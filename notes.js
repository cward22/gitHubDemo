// Notes - 1/31/20

var str = "I'm 25";
var len = str.length;
console.log(len);
console.log(str[0]);
console.log(str[10]);

for(var i = 0; i < str.length; i++) {
        console.log(str[i]);
}

var str = "hello world";

for(var i = 0; i < str.length; i++) {
    console.log(str[i]);
}

var upperCaseStr = str.toUpperCase();
console.log(upperCaseStr);
console.log(upperCaseStr.toLowerCase());

if(1 === 1) {
    console.log(true);
} else {
    console.log(false);
}

var str = "hello world";

if(str.includes('hello', 1)){
    console.log('included');
} else {
    console.log('exluded');
}

console.log(str.slice(1, 10));
console.log(str.slice(1, 11));

var z = 1;
while (z <= 50){
    if (z % 2 === 0){
        console.log(z)
    }
    z++
}

// Function HW Example

a1 = 7
a2 = 3
    console.log (a1 + a2);
    console.log (a1 * a2);

var a = 4;
var b = 6;


// additional steps
var n = 0
for (n; n < 100; n++) {
        if (n % 3 === 0) {
            console.log (n + " fizz"); }
            else if (n % 5 === 0) {
                console.log (n + " buzz"); }
                else if (n % 3 === 0 && n % 5 === 0); {
                    console.log (n + " fizzbuzz");
                }
            }