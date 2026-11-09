# TypeScript Mono Repo

A small TypeScript practice project. It asks you three questions in the terminal (name, age and gender), then prints your answers, turns them into JSON and reads the JSON back. It shows how to set up a modern TypeScript project and use the [Inquirer](https://www.npmjs.com/package/inquirer) package for interactive prompts.

**TypeScript** is JavaScript with types added: you describe what shape your data should be, and the compiler (`tsc`) warns you about mistakes before the code runs. It then turns your `.ts` file into plain JavaScript that Node can run.

## What you need

- [Node.js](https://nodejs.org) 18 or newer. Check with `node --version`.

## How to run it

```bash
git clone https://github.com/DCodeAus/TypescriptMonoRepo.git   # or download the ZIP from the green Code button
cd TypescriptMonoRepo
npm install        # downloads Inquirer and TypeScript into node_modules/
npm run build      # turns index.ts into src/index.js
npm start          # runs src/index.js
```

Answer the questions: type your name and press Enter, type your age and press Enter, then pick an option with the arrow keys and press Enter.

## What you'll see

```
? What is your name? Dan
? Enter your age? 30
? What is your gender? Male
Your name is Dan, your age is 30, your gender is Male
{
     "Username": "DAN",
     "age": "30",
     "gender": "MALE"
}
Now parsing the JSON object
###############################################################
{ Username: 'DAN', age: '30', gender: 'MALE' }
```

After changing `index.ts`, run `npm run build` again before `npm start`.

## What each file does

| File | What it is |
|---|---|
| `index.ts` | The program you edit. |
| `src/index.js` | The JavaScript that `npm run build` makes from `index.ts`. Don't edit it by hand. |
| `package.json` | The project's name, its packages and the `build`/`start` commands. |
| `tsconfig.json` | TypeScript's settings. |

## How I set it up from scratch

These are the steps to make a project like this yourself:

1. `npm init -y` creates `package.json` with default values.
2. `npx tsc --init` creates `tsconfig.json`.
3. `npm i inquirer` installs Inquirer, and `npm i -D @types/inquirer typescript` installs its type definitions and TypeScript itself as development-only tools.
4. In `tsconfig.json`, set `"target": "ES2022"`, `"module": "NodeNext"` and `"moduleResolution": "nodenext"`, so TypeScript produces modern JavaScript.
5. In `package.json`, add `"type": "module"` under `"main"`, so Node understands `import` statements.
6. Create `index.ts` and start with `import inquirer from "inquirer";`. The program uses `await`, which pauses until you've answered every question before carrying on.
