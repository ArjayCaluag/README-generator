// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);
// TODO: Create an array of questions for user input
const questions = [];

const promptUser = () =>
inquirer.prompt([
    {
        type: 'input',
        name: 'username',
        message:'What is your Github username?'
    }, {
        type: 'input',
        name: 'email',
        message:'What is your email address?'
    }, {
        type: 'input',
        name: 'projectName',
        message:'What is your project name?'
    }, {
        type: 'input',
        name: 'description',
        message:'Please write a short description of your project'
    }, {
        type: 'list',
        name: 'license',
        message:'What kind of license should your project have?',
        choices: ['MIT','Apache 2.0','GPL3.0','BSD 3','None']
    },
])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
