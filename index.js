// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "installSteps",
        message: "what is the command to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use"
    },
    {
        type: "list",
        name: "license",
        message: "Which license would you like to use?",
        choices: ["MIT","Unlicense","ISC","Apache"]
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
        
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
        
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, generateMarkdown(data), (err) => (err) ? console.log(err) : console.log("Success!!"))
 }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (answers) { 
            writeToFile("test.md", answers);

         })

}

// Function call to initialize app
init();
