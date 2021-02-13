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
const questions = [
    // Employee Q's
    // Type of Employee - Manager/Engineer/Intern
    // Manager Q's
    // Engineer Q's
    // Intern Q's
]

// FUNCTIONS ==================================

// USER INTERACTIONS ==========================

// Prompt the user to get answers to questions.
inquirer
  .prompt(questions)
  // Write a ReadMe file using the amswers to the prompts.
  .then(userResponse => {
    writeUserInfo(userResponse);
  })
  // If there is an error, write an error to the console.
  .catch(err => {
    console.error(err);
  })
// function init() {
//     inquirer
//     .prompt(questions)
//     .then(userResponse => {
//     fs.writeFile(".dist/.md", generateMarkdown(userResponse), (err) => err ? console.error(err) : console.log("README_SAMPLE.MD file succesfully created"))
//     })
// }

// init();
