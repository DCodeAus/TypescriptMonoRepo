import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {
        type:'input',
        name: 'name',
        message:'What is your name?'
    },
    {
        type:'number',
        name:'age',
        message: 'Enter your age?'
    },
    {
        type:'list',
        name :'gender',
        message: 'What is your gender?',
        choices: ['Male', 'Female']
    }
]);
console.log ("Your name is" + answer.name + "Your age is " + answer.age + "your gender is " + answer.gender);