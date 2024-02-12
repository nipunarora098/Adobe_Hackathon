const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const { generateResume } = require("./resumeGenerator");
const { validateForm } = require("./formValidation");
const path = require("path");
app.use(bodyParser.json());
app.use(cors());

app.post("/resume", async (req, res) => {
  const data = req.body;

  if (!validateForm(data)) {
    res.status(500).send("Data contains missing Values");
    return;
  }
  // if file resume.pdf exists delete it first
  const resumePath = path.join(__dirname, "resume.pdf");
  if (fs.existsSync(resumePath)) {
    fs.unlinkSync(resumePath);
  }
  let resumeFilePath = "" ;
  try {
    // Call the generateResume function from the resumeGenerator module
    resumeFilePath = await generateResume(data);
    if (resumeFilePath == "Data contains missing Values") {
      res.status(500).send("Error sending Resume");
      return;
    }
    res.sendFile(resumeFilePath, {}, (err) => {
      if (err) {
        console.log("Error sending file:", err);
        res.status(500).send("Error sending Resume");
      }
      fs.unlinkSync(resumeFilePath);
    });
  } catch (err) {

    console.log("Exception encountered while executing operation", err);
    res.status(500).send(resumeFilePath);
  }
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});

module.exports = app;
