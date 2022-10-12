
const fs = require("fs");
const inquirer = require("./node_modules/inquirer")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const managerQuestion = [
    {
        message: "What is the name of the manager?",
        type: "input",
        name: "managerName"
    },
    {
        message: "What is the employee ID of the manager?",
        type: "number",
        name: "managerID",
        validate(value) {
            const pass = !isNaN(value);
            if (pass) { return true; }
            else return "Please enter a number";

        }
    },
    {
        message: "What is the email of the manager?",
        type: "input",
        name: "managerEmail",
        validate(value){
            const pass = value.toLowerCase().match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
            if(pass) return true;
            else return "Please enter a valid email"
        }
    },
    {
        message: "What is the Office phone number of the manager?",
        type: "number",
        name: "managerPhone",
        validate(value) {
            if (isNaN(value)) return "Please enter numbers";
            else return true;
        },

    },
]

const menu = {
    message: "Please select an action.",
    type: "list",
    name: "action",
    choices: ['Add Engineer information', 'Add Intern information', 'Exit'],
}

const engineerQuestion = [
    {
        message: "What is the name of the engineer?",
        type: "input",
        name: "engineerName"
    },
    {
        message: "What is the employee ID of the engineer?",
        type: "number",
        name: "engineerID",
        validate(value) {
            const pass = !isNaN(value);
            if (pass) { return true; }
            else return "Please enter a number";

        }
    },
    {
        message: "What is the email of the engineer?",
        type: "input",
        name: "engineerEmail",
        validate(value){
            const pass = value.toLowerCase().match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
            if(pass) return true;
            else return "Please enter a valid email"
        }
    },
    {
        message: "What is the Github ID of the engineer?",
        type: "input",
        name: "engineerGithub"
    },
]

const internQuestion = [
    {
        message: "What is the name of the intern?",
        type: "input",
        name: "internName"
    },
    {
        message: "What is the employee ID of the intern?",
        type: "number",
        name: "internID",
        validate(value) {
            const pass = !isNaN(value);
            if (pass) { return true; }
            else return "Please enter a number";

        }
    },
    {
        message: "What is the email of the intern?",
        type: "input",
        name: "internEmail",
        validate(value){
            const pass = value.toLowerCase().match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
            if(pass) return true;
            else return "Please enter a valid email"
        }
    },
    {
        message: "What is the school of the intern?",
        type: "input",
        name: "internSchool"
    },

]

let manager = {};
let engineerList = [];
let internList = [];

async function init() {
    let { managerName, managerID, managerEmail, managerPhone } = await inquirer.prompt(managerQuestion);
    manager = new Manager(managerName, managerID, managerEmail, managerPhone);
    let action = await inquirer.prompt(menu);

    if (action.action == "Add Engineer information") {
        getEngineer();
    } else if (action.action == "Add Intern information") {
        getIntern();
    } else {
        genHTML(manager,engineerList,internList);
    }
}

async function getEngineer() {
    let { engineerName, engineerID, engineerEmail, engineerGithub } = await inquirer.prompt(engineerQuestion);
    let engineer = new Engineer(engineerName, engineerID, engineerEmail, engineerGithub);
    engineerList.push(engineer);

    let action = await inquirer.prompt(menu);
    if (action.action == "Add Engineer information") {
        getEngineer();
    } else if (action.action == "Add Intern information") {
        getIntern();
    } else {
        genHTML(manager,engineerList,internList);
    }
}

async function getIntern() {
    let { internName, internID, internEmail, internSchool } = await inquirer.prompt(internQuestion);
    let intern = new Intern(internName, internID, internEmail, internSchool);
    internList.push(intern);

    let action = await inquirer.prompt(menu);
    if (action.action == "Add Engineer information") {
        getEngineer();
    } else if (action.action == "Add Intern information") {
        getIntern();
    } else {
        genHTML(manager,engineerList,internList);
    }
}

function createCard (managerObj,engineerList,internList) {
let card = "";
card+=`
        <div class="d-flex justify-content-center mb-3">
            <div class="card text-start text-center w-50">
                <div class="card-title bg-primary p-2">
                    <h4>${managerObj.name}</h4>
                    <h5><i class="bi bi-person-badge-fill"></i> <span>${managerObj.getRole()}</span> </h5>
                </div>
                <div class="card-body">
                    <p class="card-text">ID: <span>${managerObj.id}</span></p>
                    <p class="card-text"><i class="bi bi-envelope-fill"></i> <a
                            href="mailto:${managerObj.email}">${managerObj.email}</a></p>
                    <p class="card-text"><i class="bi bi-telephone-fill"></i> <span>${managerObj.phone}</span></p>

                </div>
            </div>
        </div>
        <div class="row justify-content-center flex-wrap gap-3">`

        engineerList.forEach(empObj => {
            card+=`
            <div class="card text-start text-center col-8 col-md-5 col-lg-3 p-0">
                <div class="card-title bg-primary p-2 ">
                    <h4>${empObj.name}</h4>
                    <h5><i class="bi bi-pc-display"></i> <span>${empObj.getRole()}</span> </h5>
                </div>
                <div class="card-body">
                    <p class="card-text">ID: <span>${empObj.id}</span></p>
                    <p class="card-text"><i class="bi bi-envelope-fill"></i> <a
                            href="mailto:${empObj.email}">${empObj.email}</a></p>
                    <p class="card-text"><i class="bi bi-github"></i> <a href="https://github.com/${empObj.github}" target="_blank">${empObj.github}</a></p>
                </div>
            </div>`
        });

        internList.forEach(intObj =>{
            card+=`
            <div class="card text-start  text-center col-8 col-md-5 col-lg-3 p-0">
                <div class="card-title bg-primary p-2">
                    <h4>${intObj.name}</h4>
                    <h5><i class="bi bi-pencil-fill"></i> <span>${intObj.getRole()}</span> </h5>
                </div>
                <div class="card-body">
                    <p class="card-text">ID: <span>${intObj.id}</span></p>
                    <p class="card-text"><i class="bi bi-envelope-fill"></i> <a
                            href="mailto:${intObj.email}">${intObj.email}</a></p>
                    <p class="card-text"><i class="bi bi-book"></i> <span>${intObj.school}</span></p>
                </div>
            </div>`
        })
        card+=`
        </div>`
        return card;

}

function genHTML(managerObj,engineerList,internList) {
    let data = `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap CSS v5.2.1 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <title>Team Structure</title>
</head>

<body>
    <header class="text-center bg-dark p-2 text-light mb-3">
        <h1>Team Structure</h1>
    </header>

        <main>
            ${createCard(managerObj,engineerList,internList)}
        </main>

    </body>
    
    </html>
    
    `

    fs.writeFile(`./dist/work.html`,data,(err) =>
    err ? console.log(err) : console.log('Success!'))
}

init();