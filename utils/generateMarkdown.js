// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// function takes in the data entered by user and returns the text to be written into the readme.md 
function generateMarkdown(data) {
  const { projectName, description, installation, usage, contributing, test, username, email } = data;
  return `# ${projectName}

  ## Description
  ${description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)
  - [Contributing](#contributing)
  - [Licenses](#licenses)
  - [Questions](#questions)

  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ## Testing
  ${test}

  ## Contributing
  ${contributing}


  ## Questions
  My github username: ${username}
  My email: ${email}

`;
}

// exports generateMarkdown function output 
module.exports = data => {
  return generateMarkdown(data);
};
