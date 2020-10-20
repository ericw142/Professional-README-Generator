const fs = require('fs');
const inquirer = require('inquirer');
const generate = require('./utils/generateMarkdown')

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
        validate: function(input) {
            let done = this.async();
            if (input) {
                done(null, true);
            }
        }
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
        validate: function(input) {
            let done = this.async();
            if (input) {
                done(null, true);
            }
        }
    },
    {
        type: 'input',
        message: 'Please enter the title of your project',
        name: 'title',
        validate: function(input) {
            let done = this.async();
            if (input) {
                done(null, true);
            }
        }
    },
    {
        type: 'input',
        message: 'Please enter a description of your project',
        name: 'description',
        validate: function(input) {
            let done = this.async();
            if (input) {
                done(null, true);
            }
        }
    },
    {
        // ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
        type: 'list',
        message: 'Choose an open source license',
        choices: ['MIT', 'Apache 2.0', 'Mozilla Public License 2.0', 'GNU AGPLv3', 'BSD 3', 'None'],   
        name: 'license'
    },
    {
        type: 'input',
        message: 'What command should be run to install any dependencies?',
        name: 'installation',
        validate: function(input) {
            let done = this.async();
            if (input) {
                done(null, true);
            }
        }
    },
    {
        type: 'input',
        message: 'What command should be run to test any dependencies?',
        name: 'test',
        validate: function(input) {
            let done = this.async();
            if (input) {
                done(null, true);
            }
        }
    },
    {
        type: 'input',
        message: 'Enter any information about usage',
        name: 'usage',
        validate: function(input) {
            let done = this.async();
            if (input) {
                done(null, true);
            }
        }
    },
    {
        type: 'input',
        message: 'Enter any guidelines regarding contribution to the project',
        name: 'contribution',
        validate: function(input) {
            let done = this.async();
            if (input) {
                done(null, true);
            }
        }
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
