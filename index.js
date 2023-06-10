// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your first & last name?"
    },

    {
        type: "input",
        name: "title",
        message: "What is the name of this project?"
    },

    {
        type: "input",
        name: "description",
        message: "What is the purpose & functionality of this project?"
    },

    {
        type: "checkbox",
        name: "license",
        message: "Select the appropriate license for this project: ",
        choices: ["MIT", "Boost 1.0", "Eclipse 2.0", "Mozilla 2.0", "N/A"]
    },

    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install this project?"
    },

    {
        type: "input",
        name: "usage",
        message: "Provide instructions for the use of this application: "
    },

    {
        type: "input",
        name: "contributing",
        message: "Include guidelines, if any, for developers who would like to contribute to this project: "
    },

    {
        type: "input",
        name: "tests",
        message: "Provide detailed instructions on how to run the tests you have for this project, if applicable: "
    },

    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },

    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Your professional README.md file is being generated; you can find it in the 'dist' folder!");
        writeToFile("./dist/README.md", generateMarkdown({...responses}));
    });
}

// Function call to initialize app
init();
