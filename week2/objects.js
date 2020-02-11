// Exercise Object Homework

// Step 2. Update variables and functions to better names following code quality principles we have talked about.
// Note: I made sure there was a space between 'if & (' and 'for & (' to be consistent; even though I like 'if(' and 'for(' better.
// Ex #4 from Function Homework of Week 1 - I changed the function name to addThemTogether.

var s = 20;

function addThemTogether (t) {
    return s + t;
}
    console.log(addThemTogether(20)); // 40

// Ex #3 from Function Homework of Week 1 - I changed the function name to 'loop' and changed the names of the parameters to 'start' and 'end.'

function loop (start, end) {
    for (var f = start; f <= end; f++) {
        console.log(f);
    }
}
loop (8, 28);

// Step 3. See if you can turn any functions into methods of objects.

// var inventory = {
//     item: "bananas",
//     quantity: 12,
// };
// inventory.count = function() {
//     return this.quantity + " " + this.item + " in stock";
// };


// I was trying to find an efficient way to change an array of items and quantities into an object.
// I didn't find a way to turn functions into methods of objects with the mocha testing exercises.