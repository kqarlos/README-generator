const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What's the project title?",
    },
    {
        type: "input",
        name: "authorGithub",
        message: "What's your github username?",
    },
    {
        type: "input",
        name: "repoName",
        message: "What's the name of the github repository?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a small description of the project",
    },
    {
        type: "confirm",
        name: "addInstallation",
        message: "Would you like to add an installation command?",
        default: false
    },
    {
        type: "input",
        name: "installation",
        message: "Input any installation commands separated by a comma",
        when: (data) => data.addInstallation
    },
    {
        type: "input",
        name: "authorName",
        message: "What's the name of the author?",
    },
    {
        type: "input",
        name: "authorLinkedIn",
        message: "What's your LinkedIn username?",
    }, 
    {
        type: "confirm",
        name: "addScreenshot",
        message: "Would you like to add a screenshot?:",
        default: false
    }, 
    {
        type: "input",
        name: "screenshot",
        message: "Enter file name:",
        when: (data) => data.addScreenshot
    },
    {
        type: "confirm",
        name: "addToolList",
        message: "Would you like to add a tool list?",
        default: false
    },
    {
        type: "input",
        name: "toolList",
        message: "Enter tools separated by a comma (no spaces)",
        default: "",
        when: (data) => data.addToolList
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        err ? console.log(err) : console.log("Created readme successfully");
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(answers => {
        writeToFile("SampleREADME.md", generateMarkdown(answers));

    });
}

// function call to initialize program
init();
