const fs = require('fs');
const inquirer = require('inquirer');
const generate = require('./utils/generateMarkdown')

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Please enter the title of your project',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please enter a description of your project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What command should be run to install any dependencies?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'What command should be run to test any dependencies?',
        name: 'test'
    },
    {
        type: 'input',
        message: 'Enter any information about usage',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Enter any guidelines regarding contribution to the project',
        name: 'contribution'
    }
];

// function to write README file
function writeToFile(fileName, data) {
    let text = generate(data);
    fs.writeFile(fileName, text, (err) => {
        if (err) throw err;
        console.log("Saved!");
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((response) => writeToFile('README.md', response))
}

// function call to initialize program
init();
