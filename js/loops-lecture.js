// using same example input even numbers 8-50
// let num = 8
// while (num < 50) {
//     if (num % 2 === 0) {
//         console.log(num)
//         num++
//     } else {
//         num++
//     }
// }

// //
// let fullNameEntered = false;
// let names = "";
// // WE DON'T KNOW HOW MANY NAMES THEY HAVE!
// while (!fullNameEntered){
//
//     fullNameEntered = confirm("Is this your full name?" + names);
//     names += " ";
//     names += prompt("Please enter or add to your name") + " ";
// }
// alert("You have entered: " + names);
// //

//
// let fullNameEntered = false;
// let names = "";
// //NOT AS HACKY AS ABOVE
// do {
//     names += prompt("Please enter or add to your name");
//     fullNameEntered = confirm("Is this your full name?" + names);
//     if (!fullNameEntered) {
//         names += " ";
//     }
// } while (!fullNameEntered)
// alert("You have entered: " + names);


// // TODO: A parking lot with 30 parking spaces wants to display the amount of spaces available as it gets filled.
//  Let's assume that there are allowing two cars into the parking lot at a time. As those cars take up spaces,
//  write a do-while loop that prints the spaces available. If the parking lot gets filled, print "this parking lot
//  is now full" to the console.
//
// let lotFull = false;
// let spaces = 30;
// do {
//     console.log("Spaces available is: " + spaces)
//     spaces = spaces - 2;
//
// } while (spaces > 0)
//     console.log("Lot is now full")
// // TODO: using prompt() and alert(), write a while loop that will continue to ask for the correct password until the
//  correct password is given.
// let input;
// let password = "secret";
// while (input != password) {
//     input = prompt("Please enter password");
// }
// alert("That is correct! ");
//INSTRUCTOR SOLUTION FOR ABOVE
// let password = "passw0rd123";
// let isCorrect = false;
// let attempt = "";
// while (!isCorrect){
//     attempt = prompt("please enter your password...");
//     isCorrect = attempt === password;
//     if (!isCorrect) {
//         alert("That was not the correct password...");
//     }
//     alert("You entered the correct password.");
// }

//Start lecture Thursday 10 Feb -  "While Loops #2." from codeup lecture materials
// function loopNums(){
//
//     let num = 1;
//
//     while (num < 65536) {
//         num *= 2
//         console.log(num);
//     }
// }
//
// loopNums();

//Do While Loop (instructor solution)
// This is how you get a random number between 50 and 100
// var conesInInventory = Math.floor(Math.random() * 50) + 50;
//
//
// // This expression will generate a random number between 1 and 5
//
// do { // each iteration is a new customer
//     let requestedCones = Math.floor(Math.random() * 5) + 1;
//     // do you have eenough cones to sell them?
//     // what happens when you 'sell' them a cone?
// } while() // when do you stop selling cones

//while / do-while

//ypou know what will stop the lppp, but not how many iteerations the loop will exeute


// for-loop

// you know what will stop the loop AND how many iterations the loop executes

// let num = 0;
//
// for (num; num <= 50; num++) {
//     console.log(num)
// }

for (/*control variable*/; /*test coondition*/; /*iterator*/) {
    //code to run for each iteration of the loop
}