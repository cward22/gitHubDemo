// Create a function that takes some time to execute (You can count to a really high number, or use a setInterval)
function myFunction() {
    setInterval(function() {
        console.log("What is up?");
    }, 10000);
}

myFunction();

// Create a second function that does something once the first function has completed.
function myFunction2() {
    setInterval(function() {
        console.log("Hope you had a great day!");
    }, 14000);
}

myFunction2();