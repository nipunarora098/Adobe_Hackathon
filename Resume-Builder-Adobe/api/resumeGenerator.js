const PDFServicesSdk = require("@adobe/pdfservices-node-sdk");
const path = require("path");
require("dotenv").config();
async function generateResume(data) {
  const resumeData = {
    Name: data.personal_information.name,
    LastName: data.personal_information.last_names,
    EmailAddress: data.personal_information.email_address,
    PhoneNumber: data.personal_information.phone_number,
    LinkedIn: `<a href=\"${data.personal_information.linkedin_url}\">linkedIn</a>`,
    JobTitle: data.job_title,
    Summary: data.career_objective,
    Skills: data.skills,
    Education: [],
    Experience: [],
    Achievements: [],
  };
  for (let i = 0; i < data.education.length; i++) {
    const education = {
      SchoolName: data.education[i].school_name,
      Year: data.education[i].passing_year,
      Description: data.education[i].description,
    };
    resumeData.Education.push(education);
  }
  for (let i = 0; i < data.experience.length; i++) {
    const experience = {
      CompanyName: data.experience[i].company_name,
      Year: data.experience[i].passing_year,
      Description: data.experience[i].responsibilities,
    };
    resumeData.Experience.push(experience);
  }
  for (let i = 0; i < data.achievements.length; i++) {
    const achievement = {
      Type: data.achievements[i].field,
      Description: data.achievements[i].awards,
    };
    resumeData.Achievements.push(achievement);
  }

  try {
    // Create credentials using your Adobe PDF Services API credentials
    const credentials =
      PDFServicesSdk.Credentials.servicePrincipalCredentialsBuilder()
        .withClientId(process.env.PDF_SERVICES_CLIENT_ID)
        .withClientSecret(process.env.PDF_SERVICES_CLIENT_SECRET)
        .build();

    // Create an ExecutionContext using the credentials
    const executionContext =
      PDFServicesSdk.ExecutionContext.create(credentials);

    // Create a new DocumentMerge options instance
    const documentMerge = PDFServicesSdk.DocumentMerge,
      documentMergeOptions = documentMerge.options,
      options = new documentMergeOptions.DocumentMergeOptions(
        resumeData,
        documentMergeOptions.OutputFormat.PDF
      );

    // Create a new operation instance using the options
    const documentMergeOperation = documentMerge.Operation.createNew(options);

    // Set operation input document template from a source file
    const input = PDFServicesSdk.FileRef.createFromLocalFile(
      `../ResumeTemplates/ResumeTemplates/Template${data.template_id}/BasicTemplate.docx`
    );
    documentMergeOperation.setInput(input);

    // Execute the operation and save the result to a file
    const result = await documentMergeOperation.execute(executionContext);
    const outputFilePath = path.join(__dirname, "resume.pdf");

    await result.saveAsFile(outputFilePath);

    return outputFilePath;
  } catch (err) {
    console.log("Exception encountered while executing operation", err);
    throw err;
  }
}

module.exports = { generateResume };
