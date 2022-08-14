const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./utils/generateHTML'); //may do this another way

//do this another way with templates?
const questions = [
    {
        type: 'input',
        name: 'manager',
        message: "What is the team manager's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the employee ID of the team manager?',
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the team manager's email address?",
    },
    {
        type: 'input',
        name: 'office',
        message: 'What is the office number for the team manager?',
    }
    //add engineer>name/ID/email/GitHub username/back to menu
    //OR 
    //add intern>name/ID/email/school/back to menu
    //OR
    //finish?
];

//Write HTML File Function
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
         err ? console.error(err) : console.log('Success! New index.html file generated.')
    );
};

//Initialize HTML Function
function init() {
    return inquirer.prompt(questions)
    .then((data) => {
        const htmlData = generateHTML(data); //may do this another way
        writeToFile('dist/index.html', htmlData); //put htmlData in place of data to do it that way ^^
    })
};

//Call to Initialize 
init();