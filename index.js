// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown.js');
const fs = require('fs');

// Using inquirer, generates an array of the user answers
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

// writes the data into the readme file and stores it in the /dist/ directory
function writeToFile(fileName, fileContent) {
    fs.writeFile('./dist/' + fileName, fileContent, err => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("File created!");
    });
}

// Initializes app and starts prompting user, on success it calls the writeToFile function to save the data
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
