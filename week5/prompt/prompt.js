// Created a Node Prompt that asks a question 

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

// Then have the prompt print to the console a string with some of the user's response

readline.question(`What's your first name?`, (firstName) => {
    console.log(`Hola, ${firstName}!`)   
            readline.close
// Then after that question is asked. Ask another question
        readline.question(`What is your favorite song?`, (favoriteSong) => {
                    console.log(`${favoriteSong} is a great song!`)
                    readline.close
                })
})

// 2nd question by itself

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// readline.question(`What is your favorite song?`, (favoriteSong) => {
//     console.log(`${favoriteSong} is a great song!`)
//     readline2.close
// })

// Note for below: would need to install using npm install inquirer to use

// const inquirer = require('inquirer')

// var questions = [{
//     type: 'input',
//     name: 'firstName',
//     message: "What is your first name?",
//     type: 'input',
//     song: 'favoriteSong',
//     message: "What is the name of your favorite song?",
// }]

// inquirer.prompt(questions).then(answers => {
//     console.log(`Hola ${firstName}!`)
//     console.log(`${favoriteSong} is a great song!`)
// })