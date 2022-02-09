`use strict`;
//"While Loops" #2.
// let n = 1;
// while (n<=16){
//     console.log(2**n);
//     n++;
// }
//"Do While Loop" #1.
var allCones = Math.floor(Math.random() * 100) + 50;
Math.floor(Math.random() * 5) + 1;
do {
    names += prompt("Please enter or add to your name");
    fullNameEntered = confirm("Is this your full name?" + names);
    if (!fullNameEntered) {
        names += " ";
    }
} while (!fullNameEntered)
alert("You have entered: " + names);