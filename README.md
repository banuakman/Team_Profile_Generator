# Note Taker
  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
- [Descriptions](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributers](#Contributers)
- [Tests](#Tests)
- [Questions](#Questions)

## Description
This is a Node.js command-line application that takes in information about employees in command line, then generates a responsive HTML webpage that displays summaries for each person.

## Installation

1. Be sure that "node.js" is installed to your local machine. (see <a href="https://nodejs.org/en/download/" rel="nofollow">offical website</a> for installation)
2. Clone this repo and open that directory in terminal.
3. Install npm packages by running 
  ```bash
  npm init -y-- npm install
  ```
4. Install jest package for tests by typing
  ```bash
  node i jest -D
  ```
5. Run the application by typing
  ```bash
  node index.js
  ```

## Usage
The following video show the web application's appearance and functionality:
![following the terminal prompts hmtl file is updated](./Assets/ScreenShot_NoteTaker.gif)

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Contributers
There were no other collaborators for this project.

## Tests
There are built in tests in this application. Tests were run with the npm package "jest." 
To run the tests;
  ```bash
  npm run test
  ```

## Questions
If you have any questions, please send an email to banu@breative.net or reach me through https://github.com/banuakman