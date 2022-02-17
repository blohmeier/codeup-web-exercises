"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
<<<<<<< HEAD
// function analyzeColor(colorName){
//     if (colorName === "blue") {
//         console.log(`${colorName} is the color of the sky`)
//     } else if (colorName === "red") {
//         console.log(`Strawberries are ${colorName}`)
//     } else {
//         console.log(`I do not know anything about ${colorName}`)
//     }
// }
// analyzeColor("blue");
// analyzeColor("red");
// analyzeColor("bs color");
//Instructor solution
// function analyzeColor(colorName){
//     if (colorName === 'red') {
//         return("Strawberries are red")
//     } else if (colorName === `blue`) {
//         return("blue is the color of the sky")
//     } else {
//         return("I do not know anything about " + colorName)
//     }
// }
// console.log(analyzeColor("blue"));
// console.log(analyzeColor("red"));
// console.log(analyzeColor("bs color"));
=======

// function analyzeColor(color) {
//     if (color === 'red') {
//         return "Strawberries are red";
//     } else if (color === 'blue') {
//         return "Blue is the color of the sky";
//     } else {
//         return "I don't know anything about " + color;
//     }
// }
//
//
// console.log(analyzeColor('red'));
// console.log(analyzeColor('blue'));
// console.log(analyzeColor('cyan'));


>>>>>>> 4de169cfa6d543f752f63f7a73506ed7f69e8573
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
<<<<<<< HEAD
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
=======
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
>>>>>>> 4de169cfa6d543f752f63f7a73506ed7f69e8573
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
<<<<<<< HEAD
// analyzeColor(randomColor);
=======

// console.log(randomColor);
// console.log(analyzeColor(randomColor));
>>>>>>> 4de169cfa6d543f752f63f7a73506ed7f69e8573
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
<<<<<<< HEAD
// function analyzeColor(colorName) {
//     colorName = colorName.toLowerCase();
//     switch (colorName) {
//         case "blue":
//             return(`${colorName} is the color of the sky`);
//             break;
//         case "red":
//             return(`Strawberries are ${colorName}`);
//             break;
//         default:
//             return(`I do not know anything about ${colorName}`);
//             break;
//     }
// }
// console.log(analyzeColor("blue"));
// console.log(analyzeColor("red"));
// console.log(analyzeColor("bs color"));
// console.log(analyzeColor(randomColor));
=======

function analyzeColor(color) {
    switch (color) {
        // color === 'red'
        case 'red':
            return 'Strawberries are red';
            break;
        case 'blue':
            return 'Blue is the color of the sky';
            break;
        default:
            return "I don't know anything about " + color;
    }
}

console.log(analyzeColor('red'));

>>>>>>> 4de169cfa6d543f752f63f7a73506ed7f69e8573
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
<<<<<<< HEAD
// Solution below is self-contained:
// function analyzeColor() {
//     let colorName = prompt("What is the color you are providing?");
//     //colorName = colorName.toLowerCase();
//     switch (colorName) {
//         case "blue":
//             alert(`blue is the color of the sky`);
//             break;
//         case "red":
//             alert(`Strawberries are red`);
//             break;
//         default:
//             alert("I do not know anything about that");
//             break;
//     }
// }
// analyzeColor();

// Instructor solution (uses previous "TODOs" above):
// var userColor = prompt("Give me a color, please");
// alert(analyzeColor(userColor));
/* ########################################################################## */

=======

/* ########################################################################## */

// var userColor = prompt("Give me a color, please!");
// alert(analyzeColor(userColor));


>>>>>>> 4de169cfa6d543f752f63f7a73506ed7f69e8573
/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
<<<<<<< HEAD
// function calculateTotal(luckyNumber, totalAmount) {
//     let discountMultiplier
//     switch (luckyNumber) {
//         case 0:
//             discountMultiplier = 0;
//             break;
//         case 1:
//             discountMultiplier = .1;
//             break;
//         case 2:
//             discountMultiplier = .25;
//             break;
//         case 3:
//             discountMultiplier = .35;
//             break;
//         case 4:
//             discountMultiplier = .5;
//             break;
//         case 5:
//             discountMultiplier = 1;
//             break;
//         default:
//             alert("I do not know anything about that");
//             break;
//     }
//     //console.log(discountMultiplier);
//     return (totalAmount - (totalAmount * discountMultiplier));
// }
// console.log(calculateTotal(0, 100)); // returns 100
// console.log(calculateTotal(4, 100)); // returns 50
// console.log(calculateTotal(5, 100)); // returns 0
=======


function calculateTotal(luckyNumber, totalAmount) {
    let discountPercentage;
    if (luckyNumber === 0) {
        discountPercentage = 0.00;
    } else if (luckyNumber === 1) {
        discountPercentage = 0.10;
    } else if (luckyNumber === 2) {
        discountPercentage = 0.25;
    } else if (luckyNumber === 3) {
        discountPercentage = 0.35;
    } else if (luckyNumber === 4) {
        discountPercentage = 0.50;
    } else if (luckyNumber === 5) {
        discountPercentage = 1.00;
    }
    var discount = totalAmount * discountPercentage;
    return totalAmount - discount;
}

>>>>>>> 4de169cfa6d543f752f63f7a73506ed7f69e8573

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
<<<<<<< HEAD
// let totalAmount = prompt("What is the total amount of your bill?");
// alert("your random lucky number was " + luckyNumber);
// alert("your price before discount was " + totalAmount);
// alert("your price after discount is " + calculateTotal(luckyNumber,totalAmount));
// console.log(calculateTotal(4, 100)); // returns 50
// console.log(calculateTotal(5, 100)); // returns 0
=======
// var userTotalBill = prompt("Enter your total bill:");
//
// alert("Your lucky number is: " + luckyNumber);
// alert("Your price before disount is: " + userTotalBill);
// alert("Your discounted price is: $" + calculateTotal(luckyNumber, userTotalBill));

>>>>>>> 4de169cfa6d543f752f63f7a73506ed7f69e8573
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
<<<<<<< HEAD
 */
// let userWantsToEnterNumber = confirm('Would you like to enter a number?');
// if (userWantsToEnterNumber) {
//     let num = parseFloat(prompt(`Enter number`));
//     //let parsedNum = parseInt(num);
//     console.log(typeof(num));
//     //console.log(typeof(parsedNum));
//     //if (typeof (parsedNum) !== "number") //|| (typeof (num) === "boolean") || num === NaN))
//     if (Number.isInteger(num)) {
//         if (num % 2 === 0 && num !== 0) {
//             alert(`number is even`);
//         } else if (num % 2 === 0 && num === 0) {
//             alert(`number is zero. zero is not even or odd.`);
//         } else {
//             alert(`number is odd`);
//         }
//         alert("number plus 100 is: " + (num + 100));
//         if (num > 0) {
//             alert(`number is positive`);
//         } else if (num < 0) {
//             alert(`number is negative`);
//         } else {
//             alert(`number is not negative or positive`);
//         }
//     } else {
//         alert(`incorrect input data type`);
//         }
// } else {
//     alert("well, maybe some other time!");
// }

/** Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
// function numberEval() {
//     let userWantsToEnterNumber = confirm('Would you like to enter a number?');
//     if (userWantsToEnterNumber) {
//         let num = parseFloat(prompt(`Enter number`));
//         //let parsedNum = parseInt(num);
//         console.log(typeof(num));
//         if (Number.isInteger(num)) {
//             if (num % 2 === 0 && num !== 0) {
//                 alert(`number is even`);
//             } else if (num % 2 === 0 && num === 0) {
//                 alert(`number is zero. zero is not even or odd.`);
//             } else {
//                 alert(`number is odd`);
//             }
//             alert("number plus 100 is: " + (num + 100));
//             if (num > 0) {
//                 alert(`number is positive`);
//             } else if (num < 0) {
//                 alert(`number is negative`);
//             } else {
//                 alert(`number is not negative or positive`);
//             }
//         } else {
//             alert(`incorrect input data type`);
//         }
//     } else {
//         alert("well, maybe some other time!");
//     }
// }
// function numberConfirm(num) {
//     //let userWantsToEnterNumber = confirm('Would you like to enter a number?');
//     if (confirm('Would you like to enter a number?')) {
//         let num = parseFloat(prompt(`Enter number`));
//         return num;
//
//     } else {
//         alert("well, maybe some other time!");
//     }
//     //return num;
// }
// numberConfirm();
// function getToDestination(age, isInsured, hasCar) {
//     if (age > 16 && isInsured && hasCar) {
//         console.log("You can use your own vehicle")
//     } else if (canGetRideshare(false, true)){
//         console.log("You can get a rideshare. Call up a rideshare service")
//     } else {
//         console.log("You cannot get a rideshare. Call a friend for a ride")
//     }
// }
//
// function canGetRideshare(hasDriversNearby, hasEnoughMoney) {
//     if (hasDriversNearby && hasEnoughMoney) {
//         return true;
//     } else {
//         return false;
//     }
// }
// Instructor solution
// Part 1:
// var userChoice = confirm("Do you want to enter a number?");
//
// if (userChoice) {
//     // do number stuff
//
//     // even or odd
//     var userNumber = parseInt(prompt("Enter a number: "));
//
//     if (isNaN(userNumber)) {
//         alert("Hey that's not a number")
//     } else {
//
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
// Nested ifs to get it to work

// var userChoice = confirm("Do you want to enter a number?");
// if (userChoice) {
//     // do number stuff
//     var userNumber = parseInt(prompt("Enter a number:"));
//
//     if (isNaN(userNumber)) {
//         alert("Hey that's not a number!");
//     } else {
//
//         // even or odd
>>>>>>> 4de169cfa6d543f752f63f7a73506ed7f69e8573
//         if (userNumber % 2 === 0) {
//             alert("Your number is even");
//         } else {
//             alert("Your number is odd");
//         }
//
//         // plus 100
//         alert("Your number plus 100 is: " + (userNumber + 100));
//
//         // positive or negative
//         if (userNumber > 0) {
//             alert("Your number is positive");
//         } else {
//             alert("Your number is negative");
//         }
//     }
//
// } else {
//     alert("OK, bye!")
// }
// Part 2 (refactored version of Part 1):

function executeChoice() {
    let choice = confirm("Would you like to enter a number?");
    if (choice) {
        custEntersNum(prompt("Please enter a number"));
    } else {
        alert("OK, bye");
    }
}

function custEntersNum(num) {
    if (isNaN(num)) {
        alert("Need to enter a number type");
        num = prompt("Please enter a number");
    }
    num = parseInt(num);
    if (num % 2 !== 0) {
        alert("Number was odd")
    } else {
        alert("Numbere was even")
    }
    if (num < 0) {
        alert("Number was negative")
    } else {
        alert("Number was positive")
    }
    alert("Number plus 100 is: " + (num + 100))
}

// Part 3 (improved version of Part 2):
//     alert("Ok, bye!");
// }

// Refactored to use functions

function executeUserChoice() {
    var userChoice = confirm("Do you want to enter a number?");
    if (userChoice) {
        analyzeUserNumber(prompt("Enter a number:"));
    } else {
        alert("Ok, bye!")
    }
}

function analyzeUserNumber(userNumber) {
    if (isNumeric(userNumber)) {
        alertEvenOrOdd(userNumber);
        plus100(userNumber);
        alertPosOrNeg(userNumber);
    } else {
        alert("Hey that's not a number!");
    }
}

function isNumeric(num) {
    return !isNaN(num);
}

function alertEvenOrOdd(num) {
    if (num % 2 === 0) {
        alert("Your number is even");
    } else {
        alert("Your number is odd")
    }
}

function plus100(num) {
    num = parseInt(num);
    alert("Your number plus 100 is: " + (num + 100));
}

function alertPosOrNeg(num) {
    if (num > 0) {
        alert("Your number is positive");
    } else {
        alert("Your number is negative");
    }
}
