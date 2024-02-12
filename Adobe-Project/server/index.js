const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const { writeDataToCSV, filePath } = require("./csvUtils");
const { convertToExcel } = require("./pdfUtils");

const app = express();
const upload = multer({ dest: "uploads/" }); // Destination folder for uploaded files

app.use(cors());

// POST route for converting files to Excel
app.post("/convert-to-excel", upload.array("files"), async (req, res) => {
  try {
    const OUTPUT_ZIP = "./ExtractTextInfoFromPDF.zip"; // Output ZIP file path
    const filePath = "./ExtractedData.csv"; // Path for the generated CSV file
    await convertToExcel(req.files, OUTPUT_ZIP, writeDataToCSV); // Convert files to Excel and generate CSV
    res.sendFile(filePath, { root: __dirname }, (err) => {
      if (err) {
        console.log(err);
        res.status(500).send("An error occurred while sending the file");
      } else {
        fs.unlinkSync(filePath); // Delete the generated CSV file
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred during the conversion process");
  }
});


const PORT =  5000  ;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
