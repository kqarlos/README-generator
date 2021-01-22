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
        type: 'checkbox',
        name: 'sections',
        message: 'Select which sections to add',
        choices: [
            new inquirer.Separator(' = Choose a Sections = '),
            { name: 'installation' },
            { name: 'screenshots' },
            { name: 'tool list' }
        ]
    },
    {
        type: "input",
        name: "installation",
        message: "Input any installation commands separated by a comma",
        when: (data) => (data.sections.indexOf("installation") >= 0)
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
        type: "input",
        name: "screenshot",
        message: "Enter screenshot file name:",
        when: (data) => (data.sections.indexOf("screenshots") >= 0)
    },
    {
        type: "input",
        name: "toolList",
        message: "Enter tools used separated by a comma (no spaces)",
        default: "",
        when: (data) => (data.sections.indexOf("tool list") >= 0)
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
