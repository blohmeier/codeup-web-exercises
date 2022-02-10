`use strict`;
numberToSkip = parseInt(prompt("Enter a positive odd number between 1 and 50"));
while (numberToSkip % 2 === 0) {
    if (numberToSkip >= 1 && numberToSkip <= 50) {
        numberToSkip = parseInt(prompt("That was even. Try again"));
    } else if (numberToSkip < 1) {
        numberToSkip = parseInt(prompt("That was less than 1. Try again"));
    } else if (numberToSkip > 50) {
        numberToSkip = parseInt(prompt("That was greater than 50. Try again"));
    } else {
        break;
    }
}
// OLD BREAK FROM LOOP - LESS ACCURATE
// while (numberToSkip > 0 && numberToSkip < 51) {
//     if (numberToSkip % 2 === 0) {
//         numberToSkip = parseInt(prompt("That was even. Try again"));
//     } else if (numberToSkip <= 0) {
//         break;
//     }
// }
console.log("Number to skip is: " + numberToSkip);
for (var i = 1; i <= 49; i++) {

    if (i % 2 === 0) {
        // number is even
        // odd numbers are cooler
        // skip the rest of the loop and continue with the next iteration
        continue;
    } else if (i % 2 !== 0 && i === numberToSkip) {
        console.log('Yikes! Skipping number: ' + numberToSkip);
    } else {
        console.log('Here is an odd number: ' + i);
    }
}