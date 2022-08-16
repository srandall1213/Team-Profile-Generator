const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');
const inquirer = require('inquirer');
const teamArray = [];

const managerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's employee ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email address?",
        },
        {
            type: 'input',
            name: 'office',
            message: "What is the manager's office number?",
        }
    ])
    .then(data => {
        const manager = new Manager(data.name, data.id, data.email, data.office)
        teamArray.push(manager);
        menu();
    })
} 


const menu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Please select one of the following:',
            choices: ['Add engineer', 'Add intern', 'Finish']
        }
    ])
    .then(choice => {
        switch (choice.menu) {
            case "Add engineer":
                engineerQuestions();
                break;
            case "Add intern":
                internQuestions();
                break;
            default: 
                finish();
        }
    });
}

const engineerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's employee ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email address?",
        },
        {
            type: 'input',
            name: 'username',
            message: "What is the engineer's GitHub username?",
        }
    ]).then(data => {
        const engineer = new Engineer(data.name, data.id, data.email, data.username)
        teamArray.push(engineer);
        menu();
    })
}

const internQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's employee ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email address?",
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the name of the intern's school?",
        }
    ]).then(data => {
        const intern = new Intern(data.name, data.id, data.email, data.school)
        teamArray.push(intern);
        menu();
    })
}


//Write HTML File Function
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
         err ? console.error(err) : console.log('Success! New index.html file generated.')
    );
};

//Finish Questions & Generate HTML
function finish() {
    const htmlData = generateHTML(teamArray);
    writeToFile('dist/index.html', htmlData);
    console.log(teamArray);
};

//Call Manager Questions First
managerQuestions()