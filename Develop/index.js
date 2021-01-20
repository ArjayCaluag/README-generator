// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);
// TODO: Create an array of questions for user input
// const questions = [];

function promptUser(){
   return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your Github username?'
        }, {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        }, {
            type: 'input',
            name: 'projectName',
            message: 'What is your project name?'
        }, {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project'
        }, {
            type: 'list',
            name: 'license',
            message: 'What kind of license should your project have?(Use arrow keys)',
            choices: ['MIT', 'Apache-2.0', 'GPL3.0', 'BSD 3']
        }, {
            type: 'input',
            name: 'command',
            message: 'What command should be run to install dependencies?'
        }, {
            type: 'input',
            name: 'tests',
            message: 'What command should be run to run tests?'
        }, {
            type: 'input',
            name: 'using',
            message: 'What does the user need to know about using the repo?'
        }, {
            type: 'input',
            name: 'contributing',
            message: 'What does the user need to know about contributing to the repo?'
        },
    ]);
}


function generateMarkdown(response){
        return `# ${response.projectName}

![Github license](https://img.shields.io/badge/license-${response.license}-blue.svg)

## Description
${response.description}

## Table of Contents
        
[Installation](#installation)<br>
[Usage](#usage)<br>
[License](#license)<br>
[Contributing](#test)<br>
[Tests](#tests)<br>
[Questions](#questions)<br>

## Installation

To install necessary dependencies run the following command: 
        
    ${response.command} 
        
       
## Usage
${response.using}

## License
This project is licensed under the ${response.license} license

## Contributing
${response.contributing}

## Tests

To run tests, run the following command:
        
${response.tests} 
        
## Questions

If you have any questions about the repo, open an issue or contact me directly at ${response.email}. You can find more of my work at [${response.username}](https:github.com/${response.username}/).
`;
 }


// TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
async function init() { 
}
// Function call to initialize app
init();
