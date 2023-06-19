import inquirer from "inquirer";
interface UserName {
    text?: string;
}

  //name: Iname = {}
const answer = await inquirer.prompt([
    
    {
        type:'input',
        name:'Username:string',
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
console.log ("Your name is" + answer.Username + "Your age is " + answer.age + "your gender is " + answer.gender);

var jsonAnswers={};
jsonAnswers.Username=answer.Username.toUpperCase();
jsonAnswers.age=answer.age.toUpperCase();
jsonAnswers.gender=answer.gender.toUpperCase();
console.log(JSON.stringify(jsonAnswers, null, 5));

console.log('Now parsing the JSON object')
console.log('###############################################################')
var queueNameObj = JSON.parse(JSON.stringify(jsonAnswers));
console.log(queueNameObj);


