# TypescriptMonoRepo
Typescript Mono Repo

First package is an inquirer typescript package.

To establish a new TypeScript package:
1. NPM init -y (creates a json package, new node.js project with default values) 
2. tsc --init (initializes a new typescript project)
3. npm i inquirer (installs the inquirer package as a dependancy)
4. npm i @types/inquirer -D (installs type definitions for inquirer in the development mode, dev dependancy)
5. in tsconfig.json, find the variable "target": "es2016" and change to "target": "ES2022" (Tells the javascript code that we want it to be compatable with the ecma script 2022 instead of 2016)
6. Change "module": "commonjs" to "module": "NodeNext" and uncomment  "moduleResolution": "node", and change it to  "moduleResolution": "nodenext"
7. go to package.json and under main "main": "index.js" insert "type": "module",
This ensures that the project is setup to work with the most modern node features and has the inquirer package installed with the required dependancies.

8. Create a file called 'index.ts' typescript file.
Then write the first line into the program
9. import inquirer from "inquirer";
then create the prompt variable.
This will use the await method, so the question and then the enquirer will await the response before moving on.