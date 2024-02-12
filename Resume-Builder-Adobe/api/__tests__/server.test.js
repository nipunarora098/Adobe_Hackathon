const request = require("supertest");
const fs = require("fs");
const app = require("../server.js");
const path = require("path");
const validateForm = require("../formValidation");
describe("Resume Generator API", () => {
  jest.setTimeout(60000);
  // Test case 1
  it("Resume Generator returns a pdf file ", async () => {
    const resumeData = {
      template_id: "1",
      personal_information: {
        name: "John",
        last_names: "Doe",
        email_address: "john.doe@example.com",
        phone_number: "1234567890",
        linkedin_url: "https://linkedin.com/johndoe",
      },
      job_title: "Software Engineer",
      career_objective: "Seeking a challenging role in software development.",
      skills: ["JavaScript", "React", "Node.js"],
      education: [
        {
          school_name: "University A",
          passing_year: "2020",
          description: "Bachelor's Degree in Computer Science",
        },
      ],
      experience: [
        {
          company_name: "Company X",
          passing_year: "2021",
          responsibilities: "Developed web applications using React.",
        },
      ],
      achievements: [
        {
          field: "Field 1",
          awards: "Award 1",
        },
      ],
    };

    // Mock the generateResume function to return a dummy file path
    jest.mock("../resumeGenerator", () => ({
      generateResume: jest.fn().mockImplementation(async (data, templateId) => {
        const resumeFilePath = __dirname + "./TestResume.pdf";
        // Additional mock behavior or actions based on the provided arguments can be performed here
        return resumeFilePath;
      }),
    }));
    const sendData = {
      method: "POST",
      headers: {
        Accept: "application/pdf",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(resumeData),
    };
    const response = await request(app).post("/resume").send(resumeData);
    // if pdf generated it is saved in this location
    expect(response["status"]).toBe(200);

  });
  // Test case 2
  it("should handle errors when template id entry entries is missing", async () => {
    const resumeData = {
      template_id: "",
      personal_information: {
        name: "John",
        last_names: "Doe",
        email_address: "john.doe@example.com",
        phone_number: "1234567890",
        linkedin_url: "https://linkedin.com/johndoe",
      },
      job_title: "Software Engineer",
      career_objective: "Seeking a challenging role in software development.",
      skills: ["JavaScript", "React", "Node.js"],
      education: [
        {
          school_name: "University A",
          passing_year: "2020",
          description: "Bachelor's Degree in Computer Science",
        },
      ],
      experience: [
        {
          company_name: "Company X",
          passing_year: "2021",
          responsibilities: "Developed web applications using React.",
        },
      ],
      achievements: [
        {
          field: "Field 1",
          awards: "Award 1",
        },
      ],
    };
    const response = await request(app).post("/resume").send(resumeData);

    expect(response.status).toBe(500);
    expect(response.text).toBe("Data contains missing Values");
  });

  // Test case 3
  it("should handle errors when name entries is missing", async () => {
    const resumeData = {
      template_id: "1",
      personal_information: {
        name: "",
        last_names: "Doe",
        email_address: "john.doe@example.com",
        phone_number: "1234567890",
        linkedin_url: "https://linkedin.com/johndoe",
      },
      job_title: "Software Engineer",
      career_objective: "Seeking a challenging role in software development.",
      skills: ["JavaScript", "React", "Node.js"],
      education: [
        {
          school_name: "University A",
          passing_year: "2020",
          description: "Bachelor's Degree in Computer Science",
        },
      ],
      experience: [
        {
          company_name: "Company X",
          passing_year: "2021",
          responsibilities: "Developed web applications using React.",
        },
      ],
      achievements: [
        {
          field: "Field 1",
          awards: "Award 1",
        },
      ],
    };
    const response = await request(app).post("/resume").send(resumeData);

    expect(response.status).toBe(500);
    expect(response.text).toBe("Data contains missing Values");
  });

  // Test case 4
  it("should handle errors when last name entry is missing", async () => {
    const resumeData = {
      template_id: "1",
      personal_information: {
        name: "John",
        last_names: "",
        email_address: "john.doe@example.com",
        phone_number: "1234567890",
        linkedin_url: "https://linkedin.com/johndoe",
      },
      job_title: "Software Engineer",
      career_objective: "Seeking a challenging role in software development.",
      skills: ["JavaScript", "React", "Node.js"],
      education: [
        {
          school_name: "University A",
          passing_year: "2020",
          description: "Bachelor's Degree in Computer Science",
        },
      ],
      experience: [
        {
          company_name: "Company X",
          passing_year: "2021",
          responsibilities: "Developed web applications using React.",
        },
      ],
      achievements: [
        {
          field: "Field 1",
          awards: "Award 1",
        },
      ],
    };
    const response = await request(app).post("/resume").send(resumeData);

    expect(response.status).toBe(500);
    expect(response.text).toBe("Data contains missing Values");
  });


  // Test case 5
  it("should handle errors when email address entry is missing", async () => {
    const resumeData = {
      template_id: "1",
      personal_information: {
        name: "John",
        last_names: "Doe",
        email_address: "",
        phone_number: "1234567890",
        linkedin_url: "https://linkedin.com/johndoe",
      },
      job_title: "Software Engineer",
      career_objective: "Seeking a challenging role in software development.",
      skills: ["JavaScript", "React", "Node.js"],
      education: [
        {
          school_name: "University A",
          passing_year: "2020",
          description: "Bachelor's Degree in Computer Science",
        },
      ],
      experience: [
        {
          company_name: "Company X",
          passing_year: "2021",
          responsibilities: "Developed web applications using React.",
        },
      ],
      achievements: [
        {
          field: "Field 1",
          awards: "Award 1",
        },
      ],
    };
    const response = await request(app).post("/resume").send(resumeData);

    expect(response.status).toBe(500);
    expect(response.text).toBe("Data contains missing Values");
  });


  // Test case 6
  it("should handle errors when phone_number entry is missing", async () => {
    const resumeData = {
      template_id: "1",
      personal_information: {
        name: "John",
        last_names: "Doe",
        email_address: "john.doe@example.com",
        phone_number: "",
        linkedin_url: "https://linkedin.com/johndoe",
      },
      job_title: "Software Engineer",
      career_objective: "Seeking a challenging role in software development.",
      skills: ["JavaScript", "React", "Node.js"],
      education: [
        {
          school_name: "University A",
          passing_year: "2020",
          description: "Bachelor's Degree in Computer Science",
        },
      ],
      experience: [
        {
          company_name: "Company X",
          passing_year: "2021",
          responsibilities: "Developed web applications using React.",
        },
      ],
      achievements: [
        {
          field: "Field 1",
          awards: "Award 1",
        },
      ],
    };
    const response = await request(app).post("/resume").send(resumeData);

    expect(response.status).toBe(500);
    expect(response.text).toBe("Data contains missing Values");
  });


  // Test case 7
  it("should handle errors when linkedin url entry is missing", async () => {
    const resumeData = {
      template_id: "1",
      personal_information: {
        name: "John",
        last_names: "Doe",
        email_address: "john.doe@example.com",
        phone_number: "1234567890",
        linkedin_url: "",
      },
      job_title: "Software Engineer",
      career_objective: "Seeking a challenging role in software development.",
      skills: ["JavaScript", "React", "Node.js"],
      education: [
        {
          school_name: "University A",
          passing_year: "2020",
          description: "Bachelor's Degree in Computer Science",
        },
      ],
      experience: [
        {
          company_name: "Company X",
          passing_year: "2021",
          responsibilities: "Developed web applications using React.",
        },
      ],
      achievements: [
        {
          field: "Field 1",
          awards: "Award 1",
        },
      ],
    };
    const response = await request(app).post("/resume").send(resumeData);

    expect(response.status).toBe(500);
    expect(response.text).toBe("Data contains missing Values");
  });

  // Test case 8
  it("should handle errors when Job title entry is missing", async () => {
    const resumeData = {
      template_id: "1",
      personal_information: {
        name: "John",
        last_names: "Doe",
        email_address: "john.doe@example.com",
        phone_number: "1234567890",
        linkedin_url: "https://linkedin.com/johndoe",
      },
      job_title: "",
      career_objective: "Seeking a challenging role in software development.",
      skills: ["JavaScript", "React", "Node.js"],
      education: [
        {
          school_name: "University A",
          passing_year: "2020",
          description: "Bachelor's Degree in Computer Science",
        },
      ],
      experience: [
        {
          company_name: "Company X",
          passing_year: "2021",
          responsibilities: "Developed web applications using React.",
        },
      ],
      achievements: [
        {
          field: "Field 1",
          awards: "Award 1",
        },
      ],
    };
    const response = await request(app).post("/resume").send(resumeData);

    expect(response.status).toBe(500);
    expect(response.text).toBe("Data contains missing Values");
  });

  // Test case 9
  it("should handle errors when Career Objective entry is missing", async () => {
    const resumeData = {
      template_id: "1",
      personal_information: {
        name: "John",
        last_names: "Doe",
        email_address: "john.doe@example.com",
        phone_number: "1234567890",
        linkedin_url: "https://linkedin.com/johndoe",
      },
      job_title: "Software Engineer",
      career_objective: "",
      skills: ["JavaScript", "React", "Node.js"],
      education: [
        {
          school_name: "University A",
          passing_year: "2020",
          description: "Bachelor's Degree in Computer Science",
        },
      ],
      experience: [
        {
          company_name: "Company X",
          passing_year: "2021",
          responsibilities: "Developed web applications using React.",
        },
      ],
      achievements: [
        {
          field: "Field 1",
          awards: "Award 1",
        },
      ],
    };
    const response = await request(app).post("/resume").send(resumeData);

    expect(response.status).toBe(500);
    expect(response.text).toBe("Data contains missing Values");
  });

  // Test case 10
  it("should handle errors when skills school name entry is missing", async () => {
    const resumeData = {
      template_id: "1",
      personal_information: {
        name: "John",
        last_names: "Doe",
        email_address: "john.doe@example.com",
        phone_number: "1234567890",
        linkedin_url: "https://linkedin.com/johndoe",
      },
      job_title: "Software Engineer",
      career_objective: "Seeking a challenging role in software development.",
      skills: ["JavaScript", "React", "Node.js"],
      education: [
        {
          school_name: "",
          passing_year: "2020",
          description: "Bachelor's Degree in Computer Science",
        },
      ],
      experience: [
        {
          company_name: "Company X",
          passing_year: "2021",
          responsibilities: "Developed web applications using React.",
        },
      ],
      achievements: [
        {
          field: "Field 1",
          awards: "Award 1",
        },
      ],
    };
    const response = await request(app).post("/resume").send(resumeData);

    expect(response.status).toBe(500);
    expect(response.text).toBe("Data contains missing Values");
  });

  // Test case 11
  it("should handle errors when passing_year entry is missing", async () => {
    const resumeData = {
      template_id: "1",
      personal_information: {
        name: "John",
        last_names: "Doe",
        email_address: "john.doe@example.com",
        phone_number: "1234567890",
        linkedin_url: "https://linkedin.com/johndoe",
      },
      job_title: "Software Engineer",
      career_objective: "Seeking a challenging role in software development.",
      skills: ["JavaScript", "React", "Node.js"],
      education: [
        {
          school_name: "University A",
          passing_year: "",
          description: "Bachelor's Degree in Computer Science",
        },
      ],
      experience: [
        {
          company_name: "Company X",
          passing_year: "2021",
          responsibilities: "Developed web applications using React.",
        },
      ],
      achievements: [
        {
          field: "Field 1",
          awards: "Award 1",
        },
      ],
    };
    const response = await request(app).post("/resume").send(resumeData);

    expect(response.status).toBe(500);
    expect(response.text).toBe("Data contains missing Values");
  });

  // Test case 12
  it("should handle errors when description is missing", async () => {
    const resumeData = {
      template_id: "1",
      personal_information: {
        name: "John",
        last_names: "Doe",
        email_address: "john.doe@example.com",
        phone_number: "1234567890",
        linkedin_url: "https://linkedin.com/johndoe",
      },
      job_title: "Software Engineer",
      career_objective: "Seeking a challenging role in software development.",
      skills: ["JavaScript", "React", "Node.js"],
      education: [
        {
          school_name: "University A",
          passing_year: "2020",
          description: "",
        },
      ],
      experience: [
        {
          company_name: "Company X",
          passing_year: "2021",
          responsibilities: "Developed web applications using React.",
        },
      ],
      achievements: [
        {
          field: "Field 1",
          awards: "Award 1",
        },
      ],
    };
    const response = await request(app).post("/resume").send(resumeData);

    expect(response.status).toBe(500);
    expect(response.text).toBe("Data contains missing Values");
  });

  // Test case 13
  it("should handle errors when company_name entry is missing", async () => {
    const resumeData = {
      template_id: "1",
      personal_information: {
        name: "John",
        last_names: "Doe",
        email_address: "john.doe@example.com",
        phone_number: "1234567890",
        linkedin_url: "https://linkedin.com/johndoe",
      },
      job_title: "Software Engineer",
      career_objective: "Seeking a challenging role in software development.",
      skills: ["JavaScript", "React", "Node.js"],
      education: [
        {
          school_name: "University A",
          passing_year: "2020",
          description: "Bachelor's Degree in Computer Science",
        },
      ],
      experience: [
        {
          company_name: "",
          passing_year: "2021",
          responsibilities: "Developed web applications using React.",
        },
      ],
      achievements: [
        {
          field: "Field 1",
          awards: "Award 1",
        },
      ],
    };
    const response = await request(app).post("/resume").send(resumeData);

    expect(response.status).toBe(500);
    expect(response.text).toBe("Data contains missing Values");
  });

  // Test case 13
  it("should handle errors when passing_year is missing", async () => {
    const resumeData = {
      template_id: "1",
      personal_information: {
        name: "John",
        last_names: "Doe",
        email_address: "john.doe@example.com",
        phone_number: "1234567890",
        linkedin_url: "https://linkedin.com/johndoe",
      },
      job_title: "Software Engineer",
      career_objective: "Seeking a challenging role in software development.",
      skills: ["JavaScript", "React", "Node.js"],
      education: [
        {
          school_name: "University A",
          passing_year: "2020",
          description: "Bachelor's Degree in Computer Science",
        },
      ],
      experience: [
        {
          company_name: "Company X",
          passing_year: "",
          responsibilities: "Developed web applications using React.",
        },
      ],
      achievements: [
        {
          field: "Field 1",
          awards: "Award 1",
        },
      ],
    };
    const response = await request(app).post("/resume").send(resumeData);

    expect(response.status).toBe(500);
    expect(response.text).toBe("Data contains missing Values");
  });

  // Test case 14
  it("should handle errors when responsibilities entry is missing", async () => {
    const resumeData = {
      template_id: "1",
      personal_information: {
        name: "John",
        last_names: "Doe",
        email_address: "john.doe@example.com",
        phone_number: "1234567890",
        linkedin_url: "https://linkedin.com/johndoe",
      },
      job_title: "Software Engineer",
      career_objective: "Seeking a challenging role in software development.",
      skills: ["JavaScript", "React", "Node.js"],
      education: [
        {
          school_name: "University A",
          passing_year: "2020",
          description: "Bachelor's Degree in Computer Science",
        },
      ],
      experience: [
        {
          company_name: "Company X",
          passing_year: "2021",
          responsibilities: "",
        },
      ],
      achievements: [
        {
          field: "Field 1",
          awards: "Award 1",
        },
      ],
    };
    const response = await request(app).post("/resume").send(resumeData);

    expect(response.status).toBe(500);
    expect(response.text).toBe("Data contains missing Values");
  });

  // Test case 15
  it("should handle errors when field is missing", async () => {
    const resumeData = {
      template_id: "1",
      personal_information: {
        name: "John",
        last_names: "Doe",
        email_address: "john.doe@example.com",
        phone_number: "1234567890",
        linkedin_url: "https://linkedin.com/johndoe",
      },
      job_title: "Software Engineer",
      career_objective: "Seeking a challenging role in software development.",
      skills: ["JavaScript", "React", "Node.js"],
      education: [
        {
          school_name: "University A",
          passing_year: "2020",
          description: "Bachelor's Degree in Computer Science",
        },
      ],
      experience: [
        {
          company_name: "Company X",
          passing_year: "2021",
          responsibilities: "Developed web applications using React.",
        },
      ],
      achievements: [
        {
          field: "",
          awards: "Award 1",
        },
      ],
    };
    const response = await request(app).post("/resume").send(resumeData);

    expect(response.status).toBe(500);
    expect(response.text).toBe("Data contains missing Values");
  });

  // Test case 16
  it("should handle errors when awards entry is missing", async () => {
    const resumeData = {
      template_id: "1",
      personal_information: {
        name: "John",
        last_names: "Doe",
        email_address: "john.doe@example.com",
        phone_number: "1234567890",
        linkedin_url: "https://linkedin.com/johndoe",
      },
      job_title: "Software Engineer",
      career_objective: "Seeking a challenging role in software development.",
      skills: ["JavaScript", "React", "Node.js"],
      education: [
        {
          school_name: "University A",
          passing_year: "2020",
          description: "Bachelor's Degree in Computer Science",
        },
      ],
      experience: [
        {
          company_name: "Company X",
          passing_year: "2021",
          responsibilities: "Developed web applications using React.",
        },
      ],
      achievements: [
        {
          field: "Field 1",
          awards: "",
        },
      ],
    };
    const response = await request(app).post("/resume").send(resumeData);

    expect(response.status).toBe(500);
    expect(response.text).toBe("Data contains missing Values");
  });
});
