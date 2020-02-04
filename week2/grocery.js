// Create an inventory array and associate a number with each item. Then get user input that purchases items (subtracts one from the item).
// Arrays 2 exercise is part of the grocery excercise
/*
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
    ["fries", 80],
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
  for(let i = 0; inventory.length; i++) {
    if(input == inventory[i][0]) {
      if(inventory[i][1] > 0) {
        inventory[i][1] -= 1;
        console.log(inventory[i]);
      } else {
          console.log(`${input} is out of stock!`);
      }
    }
  }
}
/*
let inventoryTwo = ["bananas", "apples", "fries", "lettuce", "ground beef", "buns", "ketchup", "oil", "lemonade", "mayonnaise"];
let quantity = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];
*/

function add() {
    let input = document.getElementById('userInput').value;
    inventory.forEach(array => {
        if(input == array [0]) {
            array[1] += 1;
            console.log(array);
        }
    });
}