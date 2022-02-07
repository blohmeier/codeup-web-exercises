"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

// function sayHello(name) {
//     return ("Hello, " + name + "!");
// }
//
// sayHello("codeup");

//Instructor version
// function sayHello(name){
//     return `Hello, ${name}!`;
// }
// console.log(sayHello("Brett"));
//End instructor version
/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
// let helloMessage = sayHello("Brett");
// console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
// let myName = "Brett";
// console.log(sayHello(myName));
// // Don't modify the following line, it generates a random number between 1 and 3
// // and stores it in a variable named random
// var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
// function isTwo(number) {
//     (number === 2) ? console.log("true") : console.log("false");
//     //return number === 2; //alternative to the above.
// }
// isTwo(1) // returns false
// isTwo(2) // returns true
// isTwo(3) // returns false
// console.log(random); // outputs random to be tested below. If random = 2, output true. Else output false.
// isTwo(random);
/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
// function calculateTip(tipPercentage, billTotal) {
//     let amountToTip = (tipPercentage * billTotal);
//     alert(amountToTip);
// }
// calculateTip(0.20, 20) // returns 4
// calculateTip(0.25, 25.50) // returns 6.375
// calculateTip(0.15, 33.42) // returns 5.013
//Instructor version
// function calculateTip(tipPercentage, billTotal) {
//     return tipPercentage * billTotal;
// }
// console.log(calculateTip(0.20, 20)); // returns 4
// console.log(calculateTip(0.25, 25.50)); // returns 6.375
// console.log(calculateTip(0.15, 33.42)); // returns 5.013
//end instructor version

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
// LESS EFFICIENT VERSION (SEE BELOW)
// let billTotal = "";
// while (billTotal === ""){
//     billTotal = prompt('What is the bill total?');
// }
// var tipPercentage = "";
// while (tipPercentage === ""){
//     tipPercentage = prompt('What is the tip percentage (use decimal value)?');
// }
// calculateTip(billTotal,tipPercentage);
//MORE EFFICIENT VERSION OF THE ABOVE
// let billTotal = prompt("What is the bill total?");
// let tipPercentage = prompt("What is the tip percentage (first, convert percentage to decimal value)?");
// calculateTip(billTotal,tipPercentage);
// calculateTip(0.20, 20) // returns 4
// calculateTip(0.25, 25.50) // returns 6.375
// calculateTip(0.15, 33.42) // returns 5.013
/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
// function applyDiscount(priceBeforeDiscount,discountPercentage){
//     var discountedPrice = (priceBeforeDiscount - (priceBeforeDiscount * discountPercentage));
//     alert(discountedPrice);
// }
// LESS EFFICIENT VERSION (SEE FURTHER BELOW)
// let priceBeforeDiscount = "";
// while (priceBeforeDiscount === ""){
//     priceBeforeDiscount = prompt('What is the price before applying the discount?');
// }
// let discountPercentage = "";
// while (discountPercentage === ""){
//     discountPercentage = (prompt('What is the discount percentage?') * .01);
// }
// applyDiscount(priceBeforeDiscount,discountPercentage);
// MORE EFFICIENT VERSION OF THE ABOVE
// let priceBeforeDiscount = parseFloat(prompt("What is the bill total?"));
// let discountPercentage = (parseFloat(prompt("What is the discount percentage?")) * .01);
// applyDiscount(priceBeforeDiscount,discountPercentage);
// COMPLETED CORRECTED VERSION
function applyDiscount(originalPrice, discountPercent){
    alert ("Discounted price is: $" +(originalPrice - (originalPrice * discountPercent)));
}
let originalPrice = parseFloat(prompt("What is the bill total?"));
let discountPercent = (parseFloat(prompt("What is the discount percentage?")) * .01);
applyDiscount(originalPrice,discountPercent); // 45.99, 12% = 40.4712. 100, 20% = 80.