// Array Homework

// #1
var groceriesArray = ["bananas", "apples", "fries", "lettuce", 
"ground beef", "buns", "ketchup", "oil", "lemonade", "mayonnaise"];
var arrayLength = groceriesArray.length;

    for (i = 0; i < groceriesArray.length; i++) {
        console.log(groceriesArray[i]);
    }

// #2
var string = "It's a good day!"
var length = string.length;

    for (var i = 0; i < string.length; i++) {
        console.log(string[i])
    }

// #3
var str = "It's a good day!";
    console.log(str.toUpperCase());
/*
Arrays 2 Homework

var inventoryArray = ["bananas", "apples", "fries"]
var inventoryLength = inventoryArray.length;

for (i = 0; i < inventoryArray.length; i--) {
    console.log(inventoryArray[i]);
}


var inventory = [];

function fillArray() {
    inventory["bananas"] = 100,
    inventory["apples"] = 90,
    inventory["fries"] = 80,
    inventory["lettuce"] = 70,
    inventory["ground beef"] = 60,
    inventory["buns"] = 50,
    inventory["ketchup"] = 40,
    inventory["oil"] = 30,
    inventory["lemonade"] = 20,
    inventory["mayonnaise"] = 10;
}
fillArray();

console.log(inventory);
*/

let inventory = [
    ["banana", 100],
    ["apple", 90],
    ["potato", 80],
    ["lettuce", 70],
    ["ground beef", 60],
    ["bread", 50],
    ["ketchup", 40],
    ["oil", 30],
    ["lemonade", 20],
    ["mayonnaise", 10]
]

function sub() {
    let input = document.getElementById("userInput").value;
    for (let i = 0; i < inventory.length; i++) {
        if (input == inventory[i][0]) {
            if (inventory[i][1] > 0) {
                inventory[i][1] -= 1;
                console.log(inventory[i]);
            }
        }
    }
}