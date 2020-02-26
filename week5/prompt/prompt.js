// Created a Node Prompt that asks a question 

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`What's your first name?`, (firstName) => {
    console.log(`Hola ${firstName}!`)   
            readline.close
})

// const readline2 = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// readline2.question(`What is your favorite song?`, (favoriteSong) => {
//     console.log(`${favoriteSong} is a great song!`)
//     readline2.close
// })


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