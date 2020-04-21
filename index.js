const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown");
const fs = require("fs");


    //add questions
inquirer
    .prompt([
        {
        type: "input",
        name: "title",
        message: "What is the project title?"
        },
        {
            type: "input",
            name: "description",
            message: "What is the description of the project?"  
        },
        {
            type: "input",
            name: "TOC",
            message: "List the table of contents" 
        }

    ])
    .then(answers => {
        console.log(JSON.stringify(answers, null, '  '));
        writeToFile("project.md", markdown({...answers}));
      });



function writeToFile(fileName, data) {
    //setup write file

    fs.writeFile(fileName, data, function(err) {

        if (err) {
          return console.log(err);
        }
      
        console.log("Success!");
      
      });


}

function init() {
//setup initialize

}

init();
