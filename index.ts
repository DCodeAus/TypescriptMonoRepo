import inquirer from "inquirer";

// The shape of the answers we expect back from the questions below.
interface Answers {
    Username: string;
    age: number;
    gender: string;
}

// Ask three questions in the terminal and wait for the replies.
const answer = await inquirer.prompt<Answers>([
    {
        type: 'input',
        name: 'Username',
        message: 'What is your name?'
    },
    {
        type: 'number',
        name: 'age',
        message: 'Enter your age?'
    },
    {
        type: 'list',
        name: 'gender',
        message: 'What is your gender?',
        choices: ['Male', 'Female']
    }
]);
console.log("Your name is " + answer.Username + ", your age is " + answer.age + ", your gender is " + answer.gender);

// Turn the answers into a JSON object (upper-cased), print it, then read it back.
const jsonAnswers: Record<string, string> = {
    Username: answer.Username.toUpperCase(),
    age: String(answer.age),
    gender: answer.gender.toUpperCase(),
};
console.log(JSON.stringify(jsonAnswers, null, 5));

console.log('Now parsing the JSON object')
console.log('###############################################################')
const queueNameObj = JSON.parse(JSON.stringify(jsonAnswers));
console.log(queueNameObj);
