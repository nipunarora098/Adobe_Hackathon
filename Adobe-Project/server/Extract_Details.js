// Function to extract Information from json file received using API
const AdmZip = require('adm-zip');

async function Extract_Details(OUTPUT_ZIP) {
  let zip = new AdmZip(OUTPUT_ZIP); // Create a new instance of AdmZip with the provided ZIP file
  let jsonEntry = zip.getEntry("structuredData.json"); // Get the entry for the "structuredData.json" file
  let jsondata = await zip.readAsText("structuredData.json"); // Read the contents of the JSON file
  let data = JSON.parse(jsondata); // Parse the JSON data

  if (jsonEntry) {
    // Extract the JSON file content
    const jsonContent = zip.readAsText(jsonEntry);
    try {
      // Parse the JSON content
      data = JSON.parse(jsonContent);
      // console.log('JSON content:', data);
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  } else {
    console.log("structuredData.json file not found in the zip");
  }
  // Starting json file traversal
  let index = 0;
  
  // Reading business name
  const business_name = data.elements[index].Text;
  index++;
  
  // Reading Business Address
  var details = "";
  while (
    data.elements[index].Text === undefined ||
    !data.elements[index].Text.includes("Invoice#")
  ) {
    if (data.elements[index].Text) details += data.elements[index].Text;
    index++;
  }
  // Bussiness Details
  const details_array = details.split(",");
  const street_address = details_array[0];
  const city_address = details_array[1];
  const separate_country_zip = details_array[3].split(" ");
  const Business_country = details_array[2] + "," + separate_country_zip[1];
  const Business_Zipcode = separate_country_zip[2];
  
  // Invoice Details and Issue Date
  var invoice_details = "";
  while (
    data.elements[index].Text === undefined ||
    !data.elements[index].Text.includes(business_name)
  ) {
    if (data.elements[index].Text) invoice_details += data.elements[index].Text;
    index++;
  }
  var invoice_details_array = invoice_details.split(" ");
  const Invoice_Number = invoice_details_array[1];
  const Invoice_IssueDate = invoice_details_array[4];
  index++;
  
  let Bussiness_Description = "";
  while (
    data.elements[index].Text === undefined ||
    !data.elements[index].Text.includes("BILL TO")
  ) {
    if (data.elements[index].Text)
      Bussiness_Description += data.elements[index].Text;
    index++;
  }
  // Getting Position fo "BILL TO" , "DETAILS" , "PAYMENT"  to read their section/
  var temp_index = index;
  var BILL_TO_x_coordinate, DETAILS_x_coordinate, PAYMENT_x_coordinate;
  var cnt = 3;
  
  // Getting x coordinates for BILL TO, DETAILS, PAYMENT Section
  // Bound[0] denotes the starting x coordinate
  while (cnt > 0) {
    if (
      data.elements[temp_index].hasOwnProperty("Text") &&
      data.elements[temp_index].Text.includes("BILL TO")
    ) {
      BILL_TO_x_coordinate = data.elements[temp_index].Bounds[0];
      cnt--;
    }
    if (
      data.elements[temp_index].hasOwnProperty("Text") &&
      data.elements[temp_index].Text.includes("DETAILS")
    ) {
      DETAILS_x_coordinate = data.elements[temp_index].Bounds[0];
      cnt--;
    }
    if (
      data.elements[temp_index].hasOwnProperty("Text") &&
      data.elements[temp_index].Text.includes("PAYMENT")
    ) {
      PAYMENT_x_coordinate = data.elements[temp_index].Bounds[0];
      cnt--;
    }
    temp_index++;
  }
  
  // Customer Name
  let customer_details = "",
    Invoice_Description = "",
    Invoice__DueDate;
  temp_index = index;
  while (
    data.elements[temp_index].Text === undefined ||
    temp_index < data.elements.length - 2
  ) {
    // console.log(data.elements[temp_index+1]);
    //  Reading "BILL TO" section
    if (
      data.elements[temp_index].hasOwnProperty("Text") &&
      data.elements[temp_index].Bounds[0] === BILL_TO_x_coordinate
    ) {
      customer_details += data.elements[temp_index].Text.trim() + " ";
    } 
    //  Reading "DETAILS" section
    else if (
      data.elements[temp_index].hasOwnProperty("Text") &&
      data.elements[temp_index].Bounds[0] === DETAILS_x_coordinate
    ) {
      Invoice_Description += data.elements[temp_index].Text;
    } 
    //  Reading "PAYMENT" section
    else if (
      data.elements[temp_index].hasOwnProperty("Text") &&
      data.elements[temp_index].Bounds[0] === PAYMENT_x_coordinate
    ) {
      Invoice__DueDate = data.elements[temp_index].Text.replace("Due date: ", "");
    }
    temp_index++;
  }
  
  customer_details = customer_details.replace("BILL TO", "");
  customer_details = customer_details.trim();
  Invoice_Description = Invoice_Description.replace("DETAILS", "");
  Invoice_Description.trim();
  Invoice__DueDate = Invoice__DueDate.replace("PAYMENT", "");
  
  var customer_details_array  = customer_details.split(" ");
  // console.log(customer_details);
  var customer_index = 0;
  let Customer_email = "";
  const Customer_Name = customer_details_array[customer_index] + " " + customer_details_array[customer_index + 1];
  customer_index += 2;
  while (
    customer_index < customer_details_array.length &&
    !Customer_email.includes(".com")
  ) {
    Customer_email += customer_details_array[customer_index].trim();
    customer_index++;
  }
  
  const Customer_PhoneNumber = customer_details_array[customer_index];
  customer_index++;
  const Customer__Address__line1 = customer_details_array[customer_index] +" " +  customer_details_array[customer_index + 1] + " "+  customer_details_array[customer_index + 2];
  customer_index += 3;
  let Customer_Address_line2 = "";
  
  while(customer_index < customer_details_array.length){
    Customer_Address_line2 += customer_details_array[customer_index] + " ";
    customer_index++;
  }
  
  while (
    data.elements[index].Text === undefined ||
    !data.elements[index].Text.includes("AMOUNT")
  ) {
    index++;
  }
  index++;
  while (data.elements[index].Text === undefined) index++;
  var items = [];
  
  while (
    data.elements[index] === undefined ||
    !data.elements[index].Text.includes("Subtotal")
  ) {
    while (data.elements[index].Text === undefined) index++;
    const Invoice__BillDetails__Name = data.elements[index].Text;
    index++;
    while (data.elements[index].Text === undefined) index++;
    const Invoice__BillDetails__Quantity = data.elements[index].Text;
    index++;
    while (data.elements[index].Text === undefined) index++;
    const Invoice__BillDetails__Rate = data.elements[index].Text;
    while (data.elements[index].Text === undefined) index++;
    index++;
    while (data.elements[index].Text === undefined) index++;
    index++;
    while (data.elements[index].Text === undefined) index++;
    items.push([
      Invoice__BillDetails__Name,
      Invoice__BillDetails__Quantity,
      Invoice__BillDetails__Rate,
    ]);
  }
  
  while (
    data.elements[index].Text === undefined ||
    !data.elements[index].Text.includes("Tax")
  ) {
    index++;
  }
  
  var Tax_Y_Coordinate = data.elements[index].Bounds[1];
  var Invoice_Tax = "";
  while(data.elements[index].Text === undefined || data.elements[index].Bounds[1] === Tax_Y_Coordinate){
    if(data.elements[index].Text) Invoice_Tax += data.elements[index].Text;
    index++;
  }
  Invoice_Tax = Invoice_Tax.replace("Tax" , "");
  Invoice_Tax = Invoice_Tax.replace("%" , "");
  
  const Invoice_data = {
    business_name,
    street_address,
    city_address,
    Business_country,
    Business_Zipcode,
    Invoice_Number,
    Invoice_IssueDate,
    Bussiness_Description,
    Customer_Name,
    Customer_email,
    Customer_PhoneNumber,
    Customer__Address__line1,
    Customer_Address_line2,
    Invoice_Description,
    Invoice__DueDate,
    items,
    Invoice_Tax
  };
  
  // console.log(Invoice_data);
  return Invoice_data;
}

module.exports = { Extract_Details };
