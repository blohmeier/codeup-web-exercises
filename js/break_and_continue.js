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
// OLD BREAK FROM LOOP - LESS ACCURATE - DO NOT USE
// while (numberToSkip > 0 && numberToSkip < 51) {
//     if (numberToSkip % 2 === 0) {
//         numberToSkip = parseInt(prompt("That was even. Try again"));
//     } else if (numberToSkip <= 0) {
//         break;
//     }
// }
// END OF OLD BREAK FROM LOOP

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


//Instructor solution

// console.log("test log")
/*
var oddNumber = promptForOddNumberInRange(1, 50);

printOddNumbersInRangeWithSkip(1, 50, oddNumber);

function printOddNumbersInRangeWithSkip(low, high, skipNumber) {
    //INCLUSIVE
    for (let i = 0; i <= high; i++) {
        if(i === skipNumber || i % 2 === 0) {
            // if i is the skipNumber then output something special
            if(i === skipNumber) {
                console.log("Yikes! Skipping number: " + i);
                
            }
            continue;
        }
        // if you get here then should be an odd number that is within range and not skipnumber
        console.log("Here is an odd number: " + i);
    }
}

function promptForOddNumberInRange(low, high) {
    // loop until user gives odd number in the range INCLUSIVE
    var result;
    while(true) {
        var result = prompt("Enter an odd number from " + low + " to " + high);
        //console.log(result);
        if (result !== null && result % 2 === 1 && result >= low && result <= high) {
            break;
        }
    }
    return result;
}*/
