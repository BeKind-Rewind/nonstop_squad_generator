// Package declarations needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateSquad = require('./src/page-template');
const { writeFile, copyFile } = require('./util/generate-site');

const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");
const Engineer = require("./lib/Engineer.js");


// Connecting to template that incorporates user input with desired output, used to write new file
let employeeArr = [];

// Questions array for gathering user input
const promptTeam = async () => {
  console.log("Create new employees")
  const answers = await inquirer
    .prompt([
    {
      name: 'name',
      type: 'input',
      message: 'Employee name:',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Name required.');
          return false;
        }
      }
    },
    {
      name: 'id',
      type: 'input',
      message: 'Employee ID #:',
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log('ID entry required.');
          return false;
        }
      }
    },
    {
      name: 'email',
      type: 'input',
      message: 'Employee email:',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Email entry required.');
          return false;
        }
      }
    },
    {
      name: 'role',
      type: 'list',
      message: 'Role within the organization:',
      choices: ['Manager', 'Engineer', 'Intern'],
    }
  ])

  if (answers.role === "Manager"){
    const managerAns = await inquirer
      .prompt([
        {
          name: 'officeNumber',
          type: 'input',
          message: 'Office number:',
          validate: officeNumberInput => {
            if (officeNumberInput) {
              return true;
            } else {
              console.log('Office number required.');
              return false;
            }
          }
        },
      ])
      //create a new manager
      const newManager = new Manager(
        answers.name, 
        answers.id, 
        answers.email, 
        managerAns.officeNumber
      );
        employeeArr.push(newManager)

      
    } else if (answers.role === "Engineer"){
      const engineerAns = await inquirer  
        .prompt([
          {
            name: 'gitHub',
            type: 'input',
            message: 'GitHub Username:',
            validate: gitHubInput => {
              if (gitHubInput) {
                return true;
              } else {
                console.log('GitHub Username required.');
                return false;
              }
            }
          }
        ])
      //create a new engineer
      const newEngineer = new Engineer(
        answers.name, 
        answers.id, 
        answers.email, 
        engineerAns.gitHub
      );
        employeeArr.push(newEngineer);


    } else if (answers.role === "Intern"){
      const internAns = await inquirer 
        .prompt([
          {
            name: 'school',
            type: 'input',
            message: 'Intern School Name:',
            validate: schoolInput => {
              if (schoolInput) {
                return true;
              } else {
                console.log('School Name required.');
                return false;
              }
            }
          }  
        ])
      //create a new intern
      const newIntern = new Intern(
        answers.name, 
        answers.id, 
        answers.email, 
        answers.school
      );
        employeeArr.push(newIntern);
    }
};

// end of prompts

// ask if user wants to add employee to the squad
async function promptNewEmployee() {
  await promptTeam()

  const newEmployeeAns = await inquirer
    .prompt([
      {
        name: 'addToSquad',
        type: 'list',
        message: 'Add another member to the squad or finish?',
        choices: ['Add to the squad', 'Finish']
      },
    ])

    if (newEmployeeAns.addToSquad === 'Add to the squad') {
      return promptNewEmployee()
    }
    return createSquad();
}

promptNewEmployee();
function createSquad (){
  console.log("New employee", employeeArr)
  fs.writeFileSync(
    "./dist/index.html",
    generateSquad(employeeArr),
    "utf-8"
  );
}

