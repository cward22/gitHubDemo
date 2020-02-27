// const readline = require('readline').createInterface({
//     input: process.stdin,
// })

// readline.question(`What's your first name?`, (firstName) => {
//     readline.close
// })

// readline.question(`What is your favorite song?`, (favoriteSong) => {
//     readline.close
// })

// module.exports = readline

// const input1 = readline.question(`What's your first name?`, (firstName) => {
//     readline.close
// })

// const input2 = readline.question(`What is your favorite song?`, (favoriteSong) => {
//     readline.close
// })


module.exports = {
    input(rl) {
        const promise = new Promise(resolve => {
            let input;
            rl.on('line', userInput => {
                input = userInput;
                resolve(input);
            });
        })
        return promise;
    }
}