const greeting = function myFunction2() {
    setInterval(function() {
        console.log("Hope you had a great day!");
    }, 11000);
}

module.exports = greeting

// function myFunction() {
//     setInterval(function() {
//         console.log("What is up?");
//     }, 10000);
// }

// var promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log('completed');
//         resolve({data: '123'});
//     }, 12000);
// });
// return promise;

// myFunction().then(promise);


// const promise = new Promise(function(resolve, reject) {
//     resolve('Success');
// });

// setTimeout(() => {
//     console.log(then)
// }

// promise.then(function(value) {
//     console.log(value);
// });
