// Package declarations needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./util/generate-site');

const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");
const Engineer = require("./lib/Engineer.js");


// Connecting to template that incorporates user input with desired output, used to write new file
let employeeArr = [];

// Questions array for gathering user input
const promptTeam = () => {
  console.log("Create new employees")
  inquirer.prompt([
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

  .then((answers)=>{
    employeeArr.push(answers);
    // displays { name: '', id: '', email: '', role: ''} with answers filled in
    console.log(answers);
    // displays ROLE
    console.log(answers.role);
    if (answers.role === "Manager"){
      console.log("YEEHAW MANAGER")
      inquirer.prompt([
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
        {
          name: 'additional',
          type: 'confirm',
          default: 'no',
          message: 'Create another employee file?',
        }
      ])
      .then((answers)=>{
        //create a new manager
        const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        employeeArr.push(newManager)
        // displays ROLE { name: undefined, id: undefined, email: undefined, role: ''} with role filled in
        console.log(employeeArr)
      })
      
    } else if (answers.role === "Engineer"){
      console.log("GENIUS");
        
      inquirer.prompt([
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
        },
        {
          name: 'additional',
          type: 'confirm',
          default: 'no',
          message: 'Create another employee file?',
        }
      ])
      .then((answers)=>{
        //create a new engineer
        const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub);
        employeeArr.push(newEngineer);
        console.log(employeeArr);
      })

    } else if (answers.role === "Intern"){
      console.log("GREENHORN")

      inquirer.prompt([
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
        },
        {
          name: 'additional',
          type: 'confirm',
          default: 'no',
          message: 'Create another employee file?',
        }
      ])
      .then((answers)=>{
        //create a new intern
        const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
        employeeArr.push(newIntern);
        console.log(employeeArr)
        if (answers.additional){
          promptTeam();
        } else {
          console.log("All done!")
        }
      })

    } else {
      console.log("FOILED AGAIN!")
    }

  })

};


// QUESTIONS: I think I need local storage so that I can keep adding to my array *OR* 
//I need to generate the info and move on (but that doesn't seem right)

promptTeam()
  // .then(answers => {
  //   generatePage(answers);
  // })
  // .then(pageHTML => {
  //   return writeFile(pageHTML);
  // })
  // .then(writeFileResponse => {
  //   console.log(writeFileResponse);
  //   return copyFile();
  // })
  // .then(copyFileResponse => {
  //   console.log(copyFileResponse);
  // })
  // .catch(err => {
  //   console.log(err);
  // })
