"use strict";
function trueTest (input) {
    if (typeof(input) !== "number" || typeof(input) === "boolean") {
        return false;
    } else {
        return true;
    }
}
console.log(trueTest(7));
console.log(trueTest(false));
console.log(trueTest([]));
console.log(trueTest(Infinity));
console.log(trueTest(NaN));


/*//correction 1
function isANumber(maybeANum){
    return !isNaN(maybeANum);
}*/
/*//correction 2
function isANumber(maybeANum){
    return Number.isNaN(maybeANum);
}*/
/*//correction 3
function isANumber(maybeANum){
    return !!parseFloat(maybeANum);
}*/
/*
//correction 4
/!*function isANumber(maybeANum){
    return !Number.isNaN(parseFloat(maybeANum));
}*!/
//string
console.log(isANumber("zebra"));

//numeric string
console.log(isANumber("12"));*/
