// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questionsPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of the project:'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter installation instructions'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information:'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter contribution guidelines:'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter test instructions:'
        },
        {
            type: 'input',
            name: 'username',
            message: 'Enter your Github username:'
        },
        {
            type:'input',
            name: 'email',
            message: 'Enter your email address:'
        }
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, fileContent) {
    fs.writeFile('./dist/' + fileName, fileContent, err => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("File created!");
    });
}

// TODO: Create a function to initialize app
function init() {
    questionsPrompt()
        .then(data => {
            return generatePage(data);
        })
        .then(markdown => {
            writeToFile('README.md', markdown);
        })
        .catch(err => {
            console.log(err);
        });
}

// Function call to initialize app
init();
