// One function separated into its own file
const greeting = function myFunction2() {
    setInterval(function() {
        console.log("Hope you had a great day!");
    }, 11000);
}

module.exports = greeting


// create 2 functions where the 2nd function does something once the 1st function completes
// logs after 11 secs
// function myFunction2(){
//     setInterval(function(){
//         console.log("Hope you had a great day!");
//     }, 11000);
// }

// // where promise is
// function waitForFunction(){
//     return new Promise((resolve, reject) => {
//         try{
//             resolve(myFunction2());
//         } catch(error){
//         reject('error: check syntax');
//         }
//     })
// }

// waitForFunction().then(res => {
//     console.log(res);
// });