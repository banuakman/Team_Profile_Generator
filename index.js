// DEPENDENCIES ===============================
const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// DATA =======================================
let teamMember = [];

// questions to user
    // Manager Q's
const ManagerQs = [
  {
    type: "input",
    message: "What is the managers name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the managers employee id?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the managers email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the managers office number?",
    name: "officeNumber",
  },
]

    // Add a new Employee - Engineer/Intern
    // Engineer Q's
    // Intern Q's


// FUNCTIONS ==================================
//

// USER INTERACTIONS ==========================

// Prompt the user to get answers to questions.
inquirer
  .prompt(ManagerQs)
  // Write Manager to teamMember[] and ask to add New Employee
  .then(userResponse => {
  console.log(userResponse)
  })
  // If there is an error, write an error to the console.
  .catch(err => {
    console.error(err);
  })

// ALTERNATIVE  
// function init() {
//     inquirer
//     .prompt(questions)
//     .then(userResponse => {
//     fs.writeFile(".dist/.md", generateMarkdown(userResponse), (err) => err ? console.error(err) : console.log("README_SAMPLE.MD file succesfully created"))
//     })
// }

// init();
