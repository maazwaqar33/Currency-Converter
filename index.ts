#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';
  
const exchangeRate : any = {
    USD: 1, 
    GBP: 0.76, 
    EURO: 0.90,
    INR: 74, 
    PKR: 279
};


let user_Choice = await inquirer .prompt(
    [
        {
            type: 'list',
            name: 'formCurrency',
            message: 'Select currency to convert',
            choices:Object.keys(exchangeRate)

        },
        {
            type: 'list',
            name: 'toCurrency',
            message: 'Select currency to covert in',
            choices:Object.keys(exchangeRate)

        },
        {
            type: 'number',
            name: 'amount',
            message: 'enter amount to convert',
            validate: (input) => !isNaN(input) ? true : 'please enter a valid number'
        }
    ]
)

let from = exchangeRate[user_Choice.formCurrency]
let toAmount = exchangeRate[user_Choice.toCurrency]
let amount = user_Choice.amount
let baseAmount = amount / from 
let convertedAmount = baseAmount * toAmount

console.log(chalk.yellow(`the converstion rate of ${from} to ${toAmount} is`))
console.log(chalk.green(convertedAmount))


