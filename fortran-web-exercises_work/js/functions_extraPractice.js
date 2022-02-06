// SECTION 1 OF 4: Function Drills
// Functions using conditionals but not loops or arrays:
//
// #1 Make a function named isOdd(number)
// function isOdd(number) {
//     if (Math.abs((number % 2 === 0))) {
//         return console.log("not odd");
//     }
//     return console.log("is odd");
// }
// isOdd(5);
// isOdd(4);
// isOdd(-5);
// isOdd(-4);
// #2 Make a function named isEven(number)
// function isEven(number) {
//     if (Math.abs((number % 2 !== 0))) {
//         return console.log("not even");
//     }
//     return console.log("is even");
// }
// isEven(5);
// isEven(4);
// isEven(-5);
// isEven(-4);
// #3 Make a function named identity(input) that returns the input exactly as provided.
// function identity(input) {
//         console.log(input);
// }
// identity(5);
// identity(-4);
// #4 Make a function named isFive(input)
// function isFive(input) {
//         if(input === 5){
//                 console.log("This input is 5");
//         } else {
//                 console.log("This input is not 5");
//         }
// }
// isFive(5);
// isFive(-4);
// #5 Make a function named addFive(input) that adds five to some input.
// function addFive(input) {
//         console.log(input+5);
// }
// addFive(5);
// addFive(-4);
// #6 Make a function named isMultipleOfFive(input)
// function isMultipleOfFive(input) {
//         if(input % 5 === 0){
//                 console.log("This input is a multiple of 5");
//         } else {
//                 console.log("This input is not a multiple of 5");
//         }
// }
// isMultipleOfFive(255);
// isMultipleOfFive(247);
// #7 Make a function named isThree(input)
// function isThree(input) {
//         if(input === 3){
//                 console.log("This input is 3");
//         } else {
//                 console.log("This input is not 3");
//         }
// }
// isThree(3);
// isThree(9);
// #8 Make a function named isMultipleOfThree(input)
// function isMultipleOfThree(input) {
//         if(input % 3 === 0){
//                 console.log("This input is a multiple of 3");
//         } else {
//                 console.log("This input is not a multiple of 3");
//         }
// }
// isMultipleOfThree(99);
// isMultipleOfThree(247);
// #9 Make a function named isMultipleOfThreeAndFive(input)
// function isMultipleOfThreeAndFive(input) {
//         if(input % 3 === 0 && input % 5 === 0){
//                 console.log("This input is both a multiple of 3 and a multiple of 5");
//         } else {
//                 console.log("This input is not both a multiple of 3 and a multiple of 5");
//         }
// }
// isMultipleOfThreeAndFive(15);
// isMultipleOfThreeAndFive(5);
// #10 Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
// function isMultipleOf(target, n) {
//         if(target % n === 0){
//                 return(`The value: ${target} is a multiple of divisor: ${n}`);
//         } else {
//                 return(`The value: ${target} is not a multiple of divisor: ${n}`);
//         }
// }
// console.log(isMultipleOf(15,5));
// console.log(isMultipleOf(20,7));
// #11 Make a function named isTrue(boolean)
// function isTrue(boolean) {
//         if(boolean === true){
//                 console.log(`Input ${boolean} is boolean true`);
//         } else {
//                 console.log(`Input ${boolean} is not boolean true`);
//         }
// }
// console.log(isTrue(true));
// console.log(isTrue("bear"));
// console.log(isTrue(7));
// console.log(isTrue(false));
// #12 Make a function named isFalse(boolean)
// function isFalse(boolean) {
//         if(boolean === false){
//                 console.log(`Input ${boolean} is boolean false`);
//         } else {
//                 console.log(`Input ${boolean} is not boolean false`);
//         }
// }
// console.log(isFalse(true));
// console.log(isFalse("bear"));
// console.log(isFalse(7));
// console.log(isFalse(false));
// #13 Make a function named isTruthy(input), remember that values other than true will behave like true. REFERENCES: https://developer.mozilla.org/en-US/docs/Glossary/Truthy and https://bobbyhadz.com/blog/javascript-check-if-value-is-truthy
// function isTruthy(input) {
//         if(input){
//         //if(input == (true || {} || [] || 42 || "0" || "false" || new Date() || -42 || 12n || 3.14 || -3.14 || Infinity || -Infinity)){
//                 console.log(`Input ${input} is truthy (i.e., is not false, 0, empty string, null, undefined, or NaN`);
//         } else {
//                 console.log(`Input ${input} is not truthy`);
//         }
// }
// console.log(isTruthy(42));
// console.log(isTruthy(false));
// console.log(isTruthy(12n));
// console.log(isTruthy(""));
// #14 Make a function named isFalsy(input), remember that values other than false behave like false
// function isFalsy(input) {
//         if(input){
//                 console.log(`Input ${input} is not falsy (i.e., is not false, 0, empty string, null, undefined, or NaN`);
//         } else {
//                 console.log(`Input ${input} is falsy`);
//         }
// }
// console.log(isFalsy(42));
// console.log(isFalsy(false));
// console.log(isFalsy(12n));
// console.log(isFalsy(""));
// #15 Make a function named isVowel(letter)
// function isVowel(letter){
//         letter2 = letter.toLowerCase();
//         if (letter2 == 'a' || letter2 == 'e' || letter2 == 'i' || letter2 == 'o' || letter2 == 'u' ){
//                 return (`${letter} is a vowel`);
//         }
//         return (`${letter} is not a vowel`);
// }
// console.log(isVowel("A"));
// console.log(isVowel("g"));
// console.log(isVowel("u"));
// console.log(isVowel("v"));
// #16 Make a function named isConsonant(letter)
// function isConsonant(letter){
//         letter2 = letter.toLowerCase();
//         if (letter2 == 'a' || letter2 == 'e' || letter2 == 'i' || letter2 == 'o' || letter2 == 'u' ){
//                 return (`${letter} is not a consonant`);
//         }
//         return (`${letter} is a consonant`);
// }
// console.log(isConsonant("A"));
// console.log(isConsonant("g"));
// console.log(isConsonant("u"));
// console.log(isConsonant("V"));
// #17 Make a function named isCapital(letter)
// function isCapital(letter){
//         letter2 = letter.toLowerCase();
//         if (letter2 === letter){
//                 return (`${letter} is not a capital letter`);
//         }
//         return (`${letter} is a capital letter`);
// }
// console.log(isCapital("A"));
// console.log(isCapital("g"));
// console.log(isCapital("u"));
// console.log(isCapital("V"));
// #18 Make a function named isLowerCase(letter)
// function isLowerCase(letter){
//         letter2 = letter.toLowerCase();
//         if (letter2 === letter){
//                 return (`${letter} is a lower case letter`);
//         }
//         return (`${letter} is not a lower case letter`);
// }
// console.log(isLowerCase("A"));
// console.log(isLowerCase("g"));
// console.log(isLowerCase("u"));
// console.log(isLowerCase("V"));
// #19 Make a function named hasLowerCase(string) that returns if a string has any lower cased letter
// function hasLowerCase(stringTest){
//         stringTest2 = stringTest.toUpperCase();
//         if (stringTest2 === stringTest){
//                 return (`${stringTest} has no lower cased letters in its string`);
//         }
//         return (`${stringTest} has at least one lower cased letter in its string`);
// }
// console.log(hasLowerCase("THIS SHOULD HAVE NO LOWER CASED LETTERS"));
// console.log(hasLowerCase("This should have at least one lower case letter"));
// console.log(hasLowerCase("NO LOWER CASE LETTERS HERE"));
// console.log(hasLowerCase("aT LEAST ONE LOWER CASE LETTER"));
// #20 Make a function named isSpace(letter) that returns if a character is a space character
// function isSpace(letter){
//         if (letter === " "){
//                 return (`${letter} is a space character`);
//         }
//         return (`${letter} is not a space character`);
// }
// console.log(isSpace(" "));
// console.log(isSpace("a"));
// console.log(isSpace("_"));
// console.log(isSpace("?"));
// #21 Make a function named isZero(number)
// function isZero(number){
//         if (Math.abs(number) === 0){
//                 return (`${number} is the number 0`);
//         }
//         return (`${number} is not the number 0`);
// }
// console.log(isZero(0));
// console.log(isZero(-0));
// console.log(isZero(Infinity));
// console.log(isZero("0"));
// #22 Make a function named notZero(input) that returns true if the input is not zero
// function notZero(input){
//         if (Math.abs(input) === 0){
//                 return false;
//         }
//         return true;
// }
// console.log(notZero(0));
// console.log(notZero(-0));
// console.log(notZero(Infinity));
// console.log(notZero("0"));
// #23 Write a function named lowerCase(string)
// function lowerCase(string){
//         return string.toLowerCase();
// }
// console.log(lowerCase("THIS SHOULD HAVE NO LOWER CASED LETTERS. String test 1."));
// console.log(lowerCase("This should have at least one lower case letter. String test 2."));
// console.log(lowerCase("NO LOWER CASE LETTERS HERE. String test 3."));
// console.log(lowerCase("aT LEAST ONE LOWER CASE LETTER. String test 4."));
// #24 Write a function named double(n) that returns a number times two
// function double(n){
//         return n*2;
// }
// console.log(double(7));
// #25 Write a function named triple(n) that returns a number times 3
// function triple(n){
//         return n*3;
// }
// console.log(triple(7));
// #26 Write a function named quadruple(n) that returns a number times 4
// function quadruple(n){
//         return n*4;
// }
// console.log(quadruple(7));
// #27 Write a function named half(n) that returns 1/2 of the provided input
// function half(n){
//         return n/2;
// }
// console.log(half(7));
// #28 Write a function named subtract(a, b) that returns a minus b
// function subtract(a, b){
//         return a - b;
// }
// console.log(subtract(7,3));
// #29 Write a function named multiply(a, b) that returns the product of a times b
// function multiply(a, b){
//         return a * b;
// }
// console.log(multiply(7,3));
// #30 Write a function named divide(a, b) that returns a divided by b
// function divide(a, b){
//         return a / b;
// }
// console.log(divide(7,3));
// #31 Write a function named remainder(a, b) that returns the remainder after dividing a by b
// function remainder(a, b){
//         return a % b;
// }
// console.log(remainder(7,3));
// #32 Make a function named modulo(a, b) that returns the remainder ?quotient? after dividing a by b
// function modulo(a, b){
//         return Math.floor(a / b);
// }
// console.log(modulo(7,3));
// console.log(modulo(10,5));
// console.log(modulo(100,3));
// #33 Write a function named cube(n) that returns n * n * n
// function cube(n){
//         return Math.pow(n, 3);
// }
// console.log(cube(7));
// #34 Write a function named squareRoot(n) that returns the square root of the input
// function squareRoot(n){
//         return Math.pow(n, 1/2);
// }
// console.log(squareRoot(49));
// #35 Write a function named cubeRoot(n) that returns the cube root of the input
// function cubeRoot(n){
//         return Math.round(Math.pow(n, 1/3));
// }
// console.log(cubeRoot(343));
// #36 Write a function named invertSign(number) that returns a negative version of a positive number, a positive version of negative, and false for all else.
// function invertSign(number){
//         if (parseFloat (number) > 0){
//                 return (number*-1) + " is the negative version of " + number;
//         } else if (parseFloat(number) < 0){
//                 return ((number*-1) + " is the positive version of " + number)
//         } else{ return false };
// }
// console.log(invertSign(-4));
// console.log(invertSign(2));
// console.log(invertSign("teddy bear"));
// console.log(invertSign(true));
// #37 Write a function named degreesToRadians(number)
// function degreesToRadians(number){
//         let pi = Math.PI;
//         return number * (pi/180);
// }
// console.log(degreesToRadians(45));
// #38 Write a function named radiansToDegrees(number)
// function radiansToDegrees(number){
//         let pi = Math.PI;
//         return number * (180/pi);
// }
// console.log(radiansToDegrees(0.7853981633974483));
// #39 Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs. REFERENCE: https://www.codegrepper.com/code-examples/javascript/how+to+check+if+string+contains+space+in+javascript
// function isBlank(input){
//         if (/\s/.test(input)) {
//                 return(`The input:\n...\n${input} \n...\ncontains some type of whitespace (i.e. spaces, tabs or line breaks)`);
//         } else {
//                 return(`The input:\n...\n${input} \n...\ncontains no whitespace (i.e. no spaces, tabs or line breaks)`);
//         }
// }
// console.log(isBlank("String\ntest\n1."));
// console.log(isBlank("test2"));
// console.log(isBlank("String test 3."));
// console.log(isBlank("String\ttest\t4."));
// #40 Make a function named trim(string) that removes empty spaces before and after the input.
function trim(stringTest){
        let stringTest2 = stringTest.trim();
        if (stringTest2 === stringTest) {
                console.log("String is:\n" + stringTest + "\nNo need to remove empty spaces from string:\n" + stringTest);
        } else {
                console.log("String is:\n" + stringTest + "\nString with empty spaces removed is:\n" + stringTest2);
        }
}
trim(" String test 1. ");
trim("String test 2");
trim("String test 3. ");
// #41 Make a function named areEqual(input1, input2) that returns if both inputs have the same value
// #42 Make a function named areIdentical(input1, input2) that returns if both inputs are same value and data type.
// #43 Make a function named not(input) returns the input with a flipped boolean
// #44 Make a function named notNot(input) that the negation of the negation of the input.
// #45 Make a function named and(predicate1, predicate2) that returns the logical operation of AND
// #46 Make a function named or(predicate1, predicate2) that returns the logical operation of OR
// #47 Write a function called reverseString(string) that reverses a string
// #48 Make a function named absoluteValue(number) that returns the absolute value of a number.
// #49 Make a function named rollDice(sides) that takes in an argument containing the number of sides the die should have. Generate a random number between 1 up to and including the number of sides.

// SECTION 2 OF 4: Simple Function Drills
// Make a function called returnTwo() that returns the number 2 when called
//
// Test this function with console.log(returnTwo())
//
//     Make a function called sayHowdy() which console.logs the string “Howdy!”
//
// Test this function by directly calling sayHowdy()
//
// Remember this function does not need a defined return value
//
// Make a function called returnName() that returns the string of your name
//
// Test this function with console.log(returnName())
//
//     Make a function called addThree() which takes in a number input and returns the number plus 3.
//
// Test this function with console.log(addThree(5))
//
//     Make a function called sayString() which returns the string input passed in.
//
// Test this function with console.log(sayString('codeup'))
//

// SECTION 3 OF 4: Challenge Function Drills
// Write a function called identity(input) that takes in an argument called input and returns that input.
//
//     Write a function called getRandomNumber(min, max) that returns a random number between min and max values sent to that function call.
//
// Write a function called first(input) that returns the first character in the provided string.
//
//     Write a function called last(input) that returns the last character of a string
//
// Write a function called rest(input) that returns everything but the first character of a string.
//
//     Write a function called reverse(input) that takes a string and returns it reversed.
//
//     Write a function called isNumeric(input) that takes an input and returns a boolean if the input is numeric.
//
//     Write a function called count(input) that takes in a string and returns the number of characters.
//
//     Write a function called add(a, b) that returns the sum of a and b
//
// Write a function called subtract(a, b) that return the difference between the two inputs.
//
//     Write multiply(a, b) function that returns the product
//
// Write a divide(numerator, denominator) function that returns a divided by b
//
// Write a remainder(number, divisor) function that returns the remainder left over when dividing number by the divisor
//
// Write the function square(a) that takes in a number and returns the number multiplied by itself.
//
//     Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators
//
// Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on.
//

// SECTION 4 OF 4: Even More Function Bonuses
// Create a function that will return how many whitespace characters are at the beginning and end of a string.
//
//     Create a function that takes in two string inputs.
//
//     If the second string input is present in the first, return the first input string with the second input string removed from it.
//     If the second string input is present multiple times in the first, the second string will only be removed where it first occurs in the first string.
//     If the second string input is not present in the first, return the first string as entered in the function.
// Create a function that takes in a string and returns true if the last letter is an "a" (otherwise, return false).
//
// EXTRA CHALLENGE: create a function that will return how many whitespace characters are at the beginning of a string (hint: use regex).
//
// Create a function returnTrueMessage() that returns the string "Hey, it's true!"
//
// Create a function returnFalseMessage() that returns the string "Hey, it's false!"
// Create a function returnMessage() that takes in a function and returns the call to the function
// Experiment passing in different functions.
//     Create a function, willLoginUser() that takes in a username string, password string, user age, a boolean indicating if they are an admin.
//
//     The function will return true if the username is not the same as the password and the user is at least 18 years old. If the user is an admin, they do not have to be a certain age but the password must still not match the username.