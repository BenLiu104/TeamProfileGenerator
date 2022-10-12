
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
            if(pass){return true;} 
            else return "Please enter a number";
           
        },
    },
    {
        message: "What is the email of the manager?",
        type: "input",
        name: "managerEmail",
        // validate(value){
        //     const pass = value.toLowerCase().match(
        //         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        //     );
        //     if(pass) return true;
        //     else return "Please enter a valid email"
        // }
    },
    {
        message: "What is the Office phone number of the manager?",
        type: "number",
        name: "managerPhone",
        validate(value) {
            if(isNaN(value)) return "Please enter a number";
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
        name: "engineerID"
    },
    {
        message: "What is the email of the engineer?",
        type: "input",
        name: "engineerEmail"
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
        name: "internID"
    },
    {
        message: "What is the email of the intern?",
        type: "input",
        name: "internEmail"
    },
    {
        message: "What is the school of the intern?",
        type: "input",
        name: "internSchool"
    },

]

let manager = {};
let engineerList =[];
let internList = [];

async function init() {
    let {managerName,managerID,managerEmail,managerPhone} = await inquirer.prompt(managerQuestion);
    manager = new Manager(managerName,managerID,managerEmail,managerPhone);
    let action = await inquirer.prompt(menu);
    
    if(action.action=="Add Engineer information"){
       getEnginner();
    }
}

async function getEnginner (){
    let {engineerName,engineerID,engineerEmail,engineerGithub} = await inquirer.prompt(engineerQuestion);
    let engineer = new Engineer (engineerName,engineerID,engineerEmail,engineerGithub);
    engineerList.push(engineer);
    
    let action = await inquirer.prompt(menu);
    if(action.action=="Add Engineer information"){
        getEnginner();
     }else if(action.action=="Add Intern information"){
        getIntern();
     }else{
        genHTML();
     }
}

async function getIntern (){
    let {internName,internID,internEmail,internSchool} = await inquirer.prompt(internQuestion);
    let intern = new Intern (internName,internID,internEmail,internSchool);
    internList.push(intern);
    
    let action = await inquirer.prompt(menu);
    if(action.action=="Add Engineer information"){
        getEnginner();
     }else if(action.action=="Add Intern information"){
        getIntern();
     }else{
        genHTML();
     }
}

function genHTML() {
    console.log(manager);
    console.log(engineerList);
    console.log(internList);
}

init();