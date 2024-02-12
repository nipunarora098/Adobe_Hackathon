import validateForm from "../components/MainPageComponents/formValidation";

describe("validateForm", () => {
  test("returns true when all fields are valid", () => {
    const resumeData = {
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

    const isValid = validateForm(resumeData);

    expect(isValid).toBe(true);
  });

  test("returns false when a required field is empty", () => {
    const resumeData = {
      personal_information: {
        name: "John",
        last_names: "", // Empty last name
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

    const isValid = validateForm(resumeData);

    expect(isValid).toBe(false);
  });

  test("returns false when an required field name contains empty entry", () => {
    // Test case 5 : Empty First name
    const resumeData = {
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
          school_name: "Dafoodils",
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

    const isValid = validateForm(resumeData);

    expect(isValid).toBe(false);
  });
  test("returns false when an required email contains empty entry", () => {
    // Test case 6: Empty email
    const resumeData = {
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
          school_name: "Daffodils",
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

    const isValid = validateForm(resumeData);

    expect(isValid).toBe(false);
  });

  test("returns false when an Phone Number field is empty", () => {
    // Test case 7: Empty Phone Number
    const resumeData = {
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
          school_name: "Daffodils",
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

    const isValid = validateForm(resumeData);

    expect(isValid).toBe(false);
  });

  test("returns false when Linkedin URL not present", () => {
    // Test case 8: Empty Linkedin URL
    const resumeData = {
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
          school_name: "Daffodils",
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

    const isValid = validateForm(resumeData);

    expect(isValid).toBe(false);
  });

  test("returns false when an Job Title is not present", () => {
    // Test case 9: Empty Job title
    const resumeData = {
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
          school_name: "Daffodils",
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

    const isValid = validateForm(resumeData);

    expect(isValid).toBe(false);
  });

  test("returns false when Career Objective is empty", () => {
    // Test case 10: Empty Career objective
    const resumeData = {
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
          school_name: "Daffodils",
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

    const isValid = validateForm(resumeData);

    expect(isValid).toBe(false);
  });

  test("returns false when an Passing year is empty", () => {
    // Test case 11: Empty Passing year
    const resumeData = {
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
          school_name: "Daffodils",
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

    const isValid = validateForm(resumeData);

    expect(isValid).toBe(false);
  });

  test("returns false when Description is empty", () => {
    // Test case 12: Empty Description
    const resumeData = {
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
          school_name: "Daffodils",
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

    const isValid = validateForm(resumeData);

    expect(isValid).toBe(false);
  });

  test("returns false when Field is empty", () => {
    // Test case 13: Empty field
    const resumeData = {
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
          school_name: "Daffodils",
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

    const isValid = validateForm(resumeData);

    expect(isValid).toBe(false);
  });

  test("returns false when award entry is empty", () => {
    // Test case 14: Empty Award
    const resumeData = {
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
          school_name: "Daffodils",
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

    const isValid = validateForm(resumeData);

    expect(isValid).toBe(false);
  });

  test("returns false when company name is empty", () => {
    // Test case 15: Empty company name
    const resumeData = {
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
          school_name: "Daffodils",
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

    const isValid = validateForm(resumeData);

    expect(isValid).toBe(false);
  });

  test("returns false when an experience passing year is empty", () => {
    // Test case 16: Empty experience passing year
    const resumeData = {
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
          school_name: "", // Empty school name
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

    const isValid = validateForm(resumeData);

    expect(isValid).toBe(false);
  });

  test("returns false when an experience responsibilities is empty", () => {
    // Test case 16: Empty experience responsibilities
    const resumeData = {
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
          school_name: "", // Empty school name
          passing_year: "2020",
          description: "Bachelor's Degree in Computer Science",
        },
      ],
      experience: [
        {
          company_name: "Company X",
          passing_year: "",
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

    const isValid = validateForm(resumeData);

    expect(isValid).toBe(false);
  });
});
