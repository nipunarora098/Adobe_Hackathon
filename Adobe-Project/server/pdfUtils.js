const fs = require("fs");
const PDFServicesSdk = require("@adobe/pdfservices-node-sdk");
const { Extract_Details } = require("./Extract_Details");

// Extract API Call
const convertToExcel = async (files, outputZip, writeDataToCSV) => {
  // Load credentials from a JSON file
  const credentials =
    PDFServicesSdk.Credentials.serviceAccountCredentialsBuilder()
      .fromFile("./credentials/pdfservices-api-credentials.json")
      .build();

  // Create an execution context using the credentials
  const executionContext = PDFServicesSdk.ExecutionContext.create(credentials);

  // Process each file
  for (let i = 0; i < files.length; i++) {
    const inputFile = files[i];
    const INPUT_PDF = inputFile.path;

    // Delete the output zip file if it already exists
    if (fs.existsSync(outputZip)) {
      fs.unlinkSync(outputZip);
    }

    // Create an Extract PDF operation
    const extractPDFOperation = PDFServicesSdk.ExtractPDF.Operation.createNew();

    // Create a FileRef from the input PDF file
    const input = PDFServicesSdk.FileRef.createFromLocalFile(
      INPUT_PDF,
      PDFServicesSdk.ExtractPDF.SupportedSourceFormat.pdf
    );

    // Specify options for the extraction (text elements)
    const options =
      new PDFServicesSdk.ExtractPDF.options.ExtractPdfOptions.Builder()
        .addElementsToExtract(
          PDFServicesSdk.ExtractPDF.options.ExtractElementType.TEXT
        )
        .build();

    // Set the input and options for the operation
    extractPDFOperation.setInput(input);
    extractPDFOperation.setOptions(options);

    // Execute the Extract PDF operation
    await extractPDFOperation
      .execute(executionContext)
      .then((result) => result.saveAsFile(outputZip))
      .then(async () => {
        // Extract details from the output zip file
        const InvoiceData = await Extract_Details(outputZip);
        // Write the extracted data to a CSV file
        await writeDataToCSV(InvoiceData);
      })
      .catch((err) => console.log(err));
  }
};

module.exports = {
  convertToExcel,
};
