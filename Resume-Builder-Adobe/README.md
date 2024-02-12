# PapyrusNebulae 2023 Document Cloud Hackathon: Round 2
## Problem Statement
The challenge is to create a Resume Builder API that utilizes the Adobe Document Generation API to generate PDF resumes from DOCX-based templates. The API should be able to receive user input data, such as personal information, skills, experiences, and education, and merge it with the chosen template to produce a formatted resume.
## Resume Builder API and UI
The Resume Builder project consists of an API and a user interface built with React. The API utilizes the Adobe Document Generation API to generate PDF resumes from pre-built templates and user-provided data. The frontend provides a user-friendly interface for users to fill in the necessary details and submit the form, which triggers the API request to generate the resume.
## Project Structure
  The project is structured as follows:
  ```shell
          resume-builder/
          |── ResumeTemplates                  # pre-built templates
          ├── api/                             # API server code
          ├── frontend-resume-builder/         # Frontend UI code
          ├── README.md                        # Project README file
  ```

## Features
The Resume Builder project includes the following features:
- User Input: Users can input their personal information, including contact details, skills, experiences, education, and any other relevant details required for the resume.
- Resume Generation: The API processes the user input and merges it with the selected template to generate a professional-looking resume in PDF format.
- Error Handling: The system handles and displays appropriate error messages in case of any issues or missing information during the resume generation process.
- Seamless integration with the Adobe PDF Services Extract API.
- Frontend and Backend includes unit tests to ensure the reliability and correctness of the API and frontend components.


## Prerequisites
Before setting up and running the project, ensure the following prerequisites are met:
- Node.js and npm (Node Package Manager) are installed on your machine.
  
## Installation and Setup
Technologies Used : React , Express 
To set up the project locally, follow these steps:

1. Clone the repository:
    ```shell
   git clone https://github.com/nipunarora098/Resume-Builder-Adobe.git
	
2. Setup Frontend .
   - Go to client directory
		```shell
		cd frontend-resume-builder
   - Install Dependancies
		```shell
	 	npm init
		npm install
   - Start Frontend
	 	```shell
	 	npm start
2. Set up the API:
   - Go to api directory
		```shell
	 	cd api
   -  Install Dependancies
		```shell
	 	npm init
	 	npm install
   - Start backend
		```shell
	 	npm run dev


 ## Testing 
 ### 1. Frontend Unit Testing
- Go to Frontend directory
     ```shell
 	cd frontend-resume-builder
- Run Test
  ```shell
 	npm test
- In case no test case runs use the --watchAll flag.The --watchAll flag forces Jest to run all tests, regardless of file changes.
  ```shell
 	npm test -- --watchAll
The Unit tests will be executed using Jest, and the results will be displayed in the console. The test folder (__tests__/) contains around 11 Test Suites containing 51 tests, Test Suites for each and every Components like Achievements.js , CareerObjective.js , Education.js , Experience.js , formValidation.js etc.


![image](https://github.com/nipunarora098/Resume-Builder-Adobe/assets/74128691/492e3023-e001-4083-842a-b3d0938d5973)


### 2. API unit Testing
- Go to Frontend directory
     ```shell
 	cd api
- Run Test
  ```shell
 	npx test

The Unit tests will be executed using Jest, and the results will be displayed in the console. The test folder (__tests__/) contains around 17 
unit tests, Test Suites for each and every Components like Achievements.js , CareerObjective.js , Education.js , Experience.js , formValidation.js etc.
Note : Test may fails when Document Generation API is not available.
![image](https://github.com/nipunarora098/Resume-Builder-Adobe/assets/74128691/b28c804f-3e92-4d1d-ab2b-aa7e6e711da9)



## User Interface
![image](https://github.com/nipunarora098/Resume-Builder-Adobe/assets/74128691/cc1fab6a-f70e-4238-8a36-fb7e652307bd)
![image](https://github.com/nipunarora098/Resume-Builder-Adobe/assets/74128691/2fd205d7-8bcd-41c6-90ca-549b216c930d)
![image](https://github.com/nipunarora098/Resume-Builder-Adobe/assets/74128691/d30d46b1-7c68-484a-8bbb-301c7e595609)


## Test Sample : 
 ResumeBuilder Curl Request : https://drive.google.com/file/d/1JSP-xgqLYuOdWXV9NulbaX6IPHHL7zC5/view?usp=drive_link
 
Output Resume : https://drive.google.com/file/d/1MH3mmtqG8qp1ZABV1ZnrC1OF3-vd_jyN/view?usp=sharing
## Conclusion
The Resume Builder API project aims to provide a convenient and efficient way to generate professional resumes using pre-built templates and user data. By following the instructions in this README file, you can set up and use the API to create PDF resumes. 
