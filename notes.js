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