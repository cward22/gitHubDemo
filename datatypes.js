// #1 - Adding 2 Strings Together
    console.log("2" + "2");

// #1 -Output Returned: 22

// #2 - Declaring Variables
var str1; 
var str2;

// #2 - Assigning Values to Variables
str1 = "Today's ";
str2 = "a good day.";

// #2 - Output Returned: Today's a good day.
    console.log(str1 + str2);

// #3 - Declaring Variables
var music; 
var volume;

// #3 - Assigning Values to Variables
music = "loud";
volume = 7;

// #3 - Output returned: NaN
    console.log(music * volume);

// Just tried something to see the answer; got NaN
    console.log(music * volume + 2);
    console.log(music * volume + 2 + true);

// #4 - Bonus returned: 3
    console.log(2 + true);

// Conditional Homework
// #1
var j = 2;
j = j +5;
    console.log(j);
j *= 2;
    console.log(j);
j %= 3; // I think it will return 2
    console.log(j);
j %= 2; // yes, it returned 0
    console.log(j);

// #2 & 3
if (j %= 0) {
    console.log("joy");
 } else {
   console.log("not even");
}

// #4
var k = 4;
var l = 2;

if ( k < 5 && l > 1) {
    console.log("true");
}

if (k < 5 || l > 1) {
    console.log("true");
}

if (k == 4 || l == 2) {
    console.log("true");
}

if (k != 4 && l == !2) {
    console.log("false");
}

// #5 - Multiple if statements execute code when a condition is true, but 1 conditional statement will give an option to do something else if a condition is not true.
var tempIsHot;
var goForARun;
var tempIsCold;

tempIsHot = true;
goForARun = true;
tempIsCold = false;

if (tempIsHot) {
    console.log ("yayyyy");
    } if (goForARun) {
        console.log ("gonna have fun");
    } if (tempIsCold){
            console.log ("no other options");
    }

// Loop Homework

// for loop
for (var i = 0; i <50; i++) {
    console.log(i);
}

// while loop
for (var m = 0; m < 50; m++) {
    if (m % 2 == 0) {
        console.log(m);
    }
}

// loop from 0 to 100
for (var n = 0; n < 100; n++) {
    console.log(n);
}

// additional steps
for (var n = 0; n < 100; n++) {
    console.log(n);
        if (n % 3 === 0) {
            console.log ("fizz"); }
            else if (n % 5 === 0) {
                console.log ("buzz"); }
                else if (n % 3 === 0 && n % 5 === 0); {
                }
            }

// Function Homework
a1 = 7
a2 = 3
    console.log (a1 + a2);
    console.log (a1 * a2);

var a = 4;
var b = 6;

// #1
function addThem (a, b) {
    return a + b;
}
    console.log(add(4,6)); // 10

// #2 
function multiThem (a, b) {
    return a * b;
}

// #5 - Create an IFFE
(function drive () {
    console.log ('Good Morning!'); // I will invoke myself
})();