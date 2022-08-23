// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateSite = require('./utils/generate-site.js');

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
            message: 'Enter a description of the project: '
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
        }
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
