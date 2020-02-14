// Problem #1

var x = document.getElementById('userInput1').value;
var y = document.getElementById('userInput2').value;

function divideThem(x ,y) {
    return x / y;
}
    console.log(divideThem(10.10, 5.00));

// function divideThem(a ,b) {
//     return a / b;
// }
//     console.log(divideThem(10.10, 5.00));
// console.log(divideThem(10,5));

// Problem #2


function findLongestWord() {
    var string = string.Split ("This will be a wonderful week");

    for(var i = 0; i < string.length; i++) {
        if(longestWord < string.length) {
            longest = string[i].length;
            word = string[i];  
        }
    }
    return word;
}


function findLongestWord() {
    var string = "This will be a wonderful week."
    var array = string.split("");
    var maxLength = 0;

        for(var i = 0; i < array.length; i++) {
            if(array[i].length > maxLength) {
                maxLength = array[i].length;
            }
        }
        // return maxLength;
        //    console.log(findLongestWord) ;
        //     if(array[i].length > i){
        //         i = array[i].length;
        //         }
// console.log(array.length)


// Problem #3

var barn = {
    color: "teal",
    material: "wood",
    doors: 3,

    clean: function() {
        return this.doors;
    },
    paintBarn: function() {
        return "blue";
        }
    };
}
