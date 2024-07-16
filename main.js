#! /usr/bin/env node
// Importing inquirer and chalk
import inquirer from "inquirer";
import chalk from "chalk";
// Welcome message
console.log(`\n \t\t----------------------------`);
console.log(chalk.green.bold("\n \t\tWelcome to MOIZ Word-Counter"));
console.log(`\n \t\t----------------------------`);
// Prompt the user to enter the sentence
let answer = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "\nEnter your sentence to count. ",
    },
]);
// Trimming the sentence and splitting it into words
let word = answer.Sentence.trim().split(" ");
console.log(chalk.blue.bold(`\n- Words of the sentences: `));
console.log(chalk.bold.cyan(`\t\n${word}`));
console.log(chalk.blue.bold(`\n- Word count: `));
console.log(chalk.bold.cyan(`\t\n${word.length}`));
