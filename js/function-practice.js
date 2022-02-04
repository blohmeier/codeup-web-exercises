/* TODO: MINI-EXERCISE:
*   -> Write a function named getName() which will return the result of the user inputting their name(s)
*   -> Console log the invocation of getName() to ensure it works properly
*   -> Now, write a function named showName(username).
*       -> It takes in 'username' as an argument and alerts the user to their name
*       -> Pass an invocation of getName() as an argument to the invocation of showName()
*       -> showName() should be void function. That is, it should not return a value - only execute code
*   -> Test to ensure your code is working as expected
* */

// function getName(){
//     var userName = prompt("Enter name");
//     return userName;
// }
// //console.log("Hello, " + getName());
//
// function showName(){
//     var userName = getName();
//     alert("Your name is " + userName);
// }
// showName();

// Inst solution
// function getName(){
//     return prompt("What is your name?");
// }
// //console.log(getName());
//
// function showName(username) {
//     alert(username);
// }
//
// showName(getName());

// Inst solution  2
// function getName(){
//     let addMoreNames = true;
//     let username = "";
//     while (addMoreNames){
//         username += prompt("What is your name?");
//         addMoreNames = confirm("Would you like to add another name?")
//         if (addMoreNames){
//             username += " "
//         }
//     }
//     return username;
// }
//
// function showName(username) {
//     alert(username);
// }
//
// showName(getName());

//Extra mini-exercises
//Make a function named isLowerCase(letter) which returns true if the parameter is lower-cased.
// function isLowerCase() {
//     var testLetter = prompt("type a letter")
//     if (testLetter.toUpperCase() == testLetter){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(isLowerCase());

//Write a function named double(n) that returns a number times two
// function doubleN(){
//     var testNumber = prompt("type a number");
//     return testNumber*2;
// }
// console.log(doubleN());

//Make a function named areIdentical(input1, input2) that returns true if both inputs are same value and data type; otherwise it returns false.
function areIdentical(input1, input2){
    var input1 = prompt("type a first input to be compared");
    var input2 = prompt("type a second input to compare the first input to");
    if (input1 === input2){
        return true;
    }else{
        return false;
    }
}
console.log(areIdentical());