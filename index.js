const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What's the project title?"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log("answers", answers);

    });
}

// function call to initialize program
init();
