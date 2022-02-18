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
