"use strict";
// console.log("This is fine ");
//
// let myName = "Brett";
//
// console.log(myName);
//
// myName += " Lohmeier";
//
// console.log(myName);



// let myName = prompt("Hi, what's your name?");
// console.log(myName);
// myName += " " + prompt(  "What is your last name, good sir night?");
// console.log(myName.toUpperCase());
// let isAwesome = confirm("Are you awesome today?");
//
// while(!isAwesome){
//     isAwesome = confirm("Are you awesome today?")
// }
//
// if (isAwesome){
//     console.log("Always good to hear")
// }
// alert("Hope you didn't console log this! ...");
// let alerted = alert("Hope you didn't console log this! ...");
//     console.log(alerted);
// console.log("Hello from inline JavaScript");
// alert("Welcome to my website!");


// let userInput = prompt('Favorite color?');
// while(userInput != "red") {
//     prompt("No good, try again!");
// }
// if (userInput = "red"){
//     console.log("That's my favorite too!");
// }

//3a
let moneyInAccount = 19.99;
let creditsInAccount = 7.50;
let driverIsNearby = true;
let canGetRideshare = (moneyInAccount > 10 || creditsInAccount > 10.00) && driverIsNearby;
if (canGetRideshare){
    alert("your ride is on the way!");
}else{
    alert("You have insufficient funds for a ride!");
}

//3b
// let noConflict = true;
// let notFull = true;
//
// let canEnroll = notFull && noConflict;
// if (canEnroll){
//     alert("You can enroll!");
// }else{
//     alert("You are not able to enroll.");
// }

//3c
// let personBuys = 0;
// let notExpired = true;
// let premiumMember = false;
// let applyProductOffer = (personBuys > 2 && notExpired) || premiumMember;
// if (applyProductOffer){
//     alert("Product offer can be applied!");
// }else{
//     alert("Sorry, product offer can not be applied");
// }



