const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`What's your first name?`, (firstName) => {
    console.log(`Hola ${firstName}!`)
    readline.close
})