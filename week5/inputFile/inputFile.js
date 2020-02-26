const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
// const readline = require('readline');
const fs = require('fs');

readline.question(`What is your favorite number?`, (number) => {
    console.log(`Awesome!`)   
    readline.close
})

fs.appendFile('newfile.txt', '(`${number}`)', 
function (err) {
    if (err) throw err;
    // console.log("Added!");
});