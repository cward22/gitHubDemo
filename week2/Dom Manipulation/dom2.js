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
