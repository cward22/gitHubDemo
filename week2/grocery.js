// Create an inventory array and associate a number with each item. Then get user input that purchases items (subtracts one from the item).
// Arrays 2 exercise is part of the grocery excercise.
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
    ["banana", 12],
    ["apple",11],
    ["potato", 10],
    ["lettuce", 9],
    ["ground beef", 8],
    ["bread", 7],
    ["ketchup", 6],
    ["oil", 5],
    ["lemonade", 4],
    ["mayonnaise", 3]
]

function add() {
  let input = document.getElementById("userInput").value;
  inventory.forEach(array => {
      if (input == array [0]) {
          array[1] += 1;
          console.log(array);
      }
  });
}

function sub() {
  let input = document.getElementById("userInput").value;
  for (let i = 0; i < inventory.length; i++) {
    if (input == inventory[i][0]) {
      if (inventory[i][1] > 0) {
        inventory[i][1] -= 1;
        console.log(inventory[i]);
      } else {
          console.log(`${input} is out of stock!`);
      }
    }
  }
}
// should the app list each inventory item and have '+' or '-' buttons next to each item? Should there be a function for if out of stock? Should there be an if statement for if out of stock?
// should there be some type of comparison statement so that if the input is greater than what's available, a notification appears?

/*
let inventoryTwo = ["bananas", "apples", "fries", "lettuce", "ground beef", "buns", "ketchup", "oil", "lemonade", "mayonnaise"];
let quantity = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];
*/

// Notes : Parallel Array Option from Nick for Add Function
// let name = ['bananas', 'apples', 'potatoes', 'lettuce', 'ground beef', 'bread', 'ketchup', 'oil', 'lemonade', 'mayonnaise']
// let quantity = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3];
// function add() {
//   let input = document.getElementById('userInput').value;
//   for (let i = 0; i <name.length; i++) {
//     if (input == name[i]) {
//       quantity[i]++;
//       console.log(`${name[i]}: ${quantity[i]}`);
//     }
//   }
// }