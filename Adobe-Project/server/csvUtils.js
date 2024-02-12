// File to create CSV File and 
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const filePath = "./ExtractedData.csv";
const csvWriter = createCsvWriter({
  path: filePath,
  header: [
    { id: 'Bussiness__City', title: 'Bussiness__City' },
    { id: 'Bussiness__Country', title: 'Bussiness__Country' },
    { id: 'Bussiness__Description', title: 'Bussiness__Description' },
    { id: 'Bussiness__Name', title: 'Bussiness__Name' },
    { id: 'Bussiness__StreetAddress', title: 'Bussiness__StreetAddress' },
    { id: 'Bussiness__Zipcode', title: 'Bussiness__Zipcode' },
    { id: 'Customer__Address__line1', title: 'Customer__Address__line1' },
    { id: 'Customer__Address__line2', title: 'Customer__Address__line2' },
    { id: 'Customer__Email', title: 'Customer__Email' },
    { id: 'Customer__Name', title: 'Customer__Name' },
    { id: 'Customer__PhoneNumber', title: 'Customer__PhoneNumber' },
    { id: 'Invoice__BillDetails__Name', title: 'Invoice__BillDetails__Name' },
    { id: 'Invoice__BillDetails__Quantity', title: 'Invoice__BillDetails__Quantity' },
    { id: 'Invoice__BillDetails__Rate', title: 'Invoice__BillDetails__Rate' },
    { id: 'Invoice__Description', title: 'Invoice__Description' },
    { id: 'Invoice__DueDate', title: 'Invoice__DueDate' },
    { id: 'Invoice__IssueDate', title: 'Invoice__IssueDate' },
    { id: 'Invoice__Number', title: 'Invoice__Number' },
    { id: 'Invoice__Tax', title: 'Invoice__Tax' },
  ],
  append :false
});
// Function to write data in csv file
const writeDataToCSV = async (Invoice_Data) => {
  const {
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
  } = Invoice_Data;
  for(var i = 0 ; i < items.length ; i++){
    await csvWriter.writeRecords([{
      Bussiness__City: city_address ,
      Bussiness__Country	: Business_country,
      Bussiness__Description : Bussiness_Description,
      Bussiness__Name	: business_name,
      Bussiness__StreetAddress	: street_address ,
      Bussiness__Zipcode	:Business_Zipcode , 
      Customer__Address__line1	:Customer__Address__line1,
      Customer__Address__line2	:Customer_Address_line2,
      Customer__Email	: Customer_email,
      Customer__Name	:Customer_Name ,
      Customer__PhoneNumber	:Customer_PhoneNumber ,
      Invoice__BillDetails__Name : items[i][0] ,
      Invoice__BillDetails__Quantity : items[i][1],
      Invoice__BillDetails__Rate	: items[i][2],
      Invoice__Description	:Invoice_Description , 
      Invoice__DueDate : Invoice__DueDate,
      Invoice__IssueDate	:Invoice_IssueDate , 
      Invoice__Number :Invoice_Number , 
      Invoice__Tax : Invoice_Tax , 
    }
    ]);
  }
};

module.exports = { writeDataToCSV, filePath };