// const readline2 = require('readline').createInterface({
//     output: process.stdout
// })

// console.log(`Hola, ${firstName}!`)
//     readline.close

// console.log(`${favoriteSong} is a great song!`)
//     readline.close

// module.exports = readline2

// const output1= console.log(`Hola, ${firstName}!`)

// const output2 = console.log(`${favoriteSong} is a great song!`)

// module.exports = {
//     output1,
//     output2
// }

module.exports = {
    output(input, rl) {
        console.log(input);
        rl.close();
    }
}