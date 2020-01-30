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

// Loop Homework
for (var i = 0; i <50; i++) {
    console.log("more testing");
}
// or
for (var i = 0; i <50; i++) {
    console.log(i);
}
