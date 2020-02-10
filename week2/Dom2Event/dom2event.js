// DOM Manipulation

// #1

document.getElementById("title").style.color = "purple";

document.getElementById("listItemOne").style.color = "blue";

document.getElementById("listItemTwo").style.color = "green";

document.getElementById("myBtn").innerHTML = "Enter";

document.getElementById("title").innerHTML = "*Welcome Home*";


// #2

// document.getElementById("list").className = "sections"

document.getElementById("listItemOne").innerHTML = "dreams";

document.getElementById("listItemTwo").innerHTML = "quotes";

document.getElementById("listItemThree").innerHTML = "photography prints";

// Event Listener
// #1

document.getElementById("myBtn").addEventListener("click",
function(){
    document.getElementById("listItemThree").innerHTML = "beauty";
});

// #2 - see HTML document for new list

// #3

// document.getElementById("myBtn2").addEventListener("click",
// function(){
//     document.getElementsByClassName("list2").innerHTML = "enjoy!";
// });

// document.getElementById("list2").className.addEventListener("click",
// function(){
//     alert("enjoy!");
// });

// var item = document.getElementsByClassName("list2");
// for (var i =0; i < list2.length; i++) {
//     list2[i].addEventListener("click", list2Done);
// }

// function myFunction(){
//     document.getElementById("myDIV").className = "enjoy!";
// }

// document.getElementById("myBtn2").addEventListener("click",
// function(){
//     document.getElementById("myDIV").className = "enjoy!";
// });

document.getElementById("myBtn2").addEventListener("click",
function(){
    document.getElementById("myList2").innerHTML = "Enjoy!";
});