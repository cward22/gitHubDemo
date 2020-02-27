// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// const readline = require('readline');
// const fs = require('fs');

// readline.question(`What is your favorite number?`, (number) => {
//     console.log(`Awesome!`)   
//     readline.close
//         fs.appendFile('newfile.txt', '(`${number}`)', 
//         function (err) {
//             if (err) throw err;
//             console.log("The number has been added to the file!");
//     });
// })

// var fs = require('fs');

// // appendFile with new input/text

// fs.appendFile("newfile.txt", "First thing's first", function (err) {
//     if (err) throw err;
//     console.log("File has been saved.");
// });

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
const fs = require('fs');

readline.question(`What is your favorite number?`, (number) => {
    console.log(`Awesome!`)   
    readline.close
        fs.appendFile('newfile.txt', (number), 
        function (err) {
            if (err) throw err;
            console.log("The number has been added to the file!");
    });
})
