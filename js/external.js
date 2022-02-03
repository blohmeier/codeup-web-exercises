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

//Start old variable values
//let moneyInAccount = 19.99;
//let creditsInAccount = 7.50;
//let driverIsNearby = true;
//end old variable values

// var moneyInAccount = "";
// while (moneyInAccount === ""){
//     moneyInAccount = prompt('How much money is in the account?'); //e.g. 9.99 or 10.01
// }
// var creditsInAccount = "";
// while (creditsInAccount === ""){
//     creditsInAccount = prompt('How many credits are in the account?'); //e.g. 9.99 or 10.01
// }
// var driverIsNearby = "";
// while (driverIsNearby === ""){
//     driverIsNearby = prompt("Is the driver nearby? Type 'yes' or 'no'");
// }
// if(driverIsNearby === "yes"){
//     (driverIsNearby = true);
// }else{
//     (driverIsNearby = false);
// }

// let canGetRideshare = (moneyInAccount > 10 || creditsInAccount > 10.00) && driverIsNearby;
// if (canGetRideshare){
//     alert("your ride is on the way!");
// }else{
//     alert("Sorry, no ride can be made available for you!");
// }

//3b

//Start old variable values
// let noConflict = true;
// let notFull = true;
//End old variable values

// var noConflict = "";
// while (noConflict === ""){
//     noConflict = prompt("Is the schedule free of conflicts? Type 'yes' or 'no'");
// }
// if(noConflict === "yes"){
//     (noConflict = true);
// }else{
//     (noConflict = false);
// }
// var notFull = "";
// while (notFull === ""){
//     notFull = prompt("Is the class full yet? Type 'yes' or 'no'");
// }
// if(notFull === "no"){
//     (notFull = true);
// }else{
//     (notFull = false);
// }
//
// let canEnroll = noConflict && notFull;
// if (canEnroll){
//     alert("You can enroll!");
// }else{
//     alert("You are not able to enroll.");
// }

//3c

//Start old variable values
// let personBuys = 0;
// let notExpired = true;
// let premiumMember = false;
//End old variable values

var personBuys = "";
while (personBuys === ""){
    personBuys = prompt('How many items has the person bought?'); //e.g. more than 2 to pass
}
var notExpired = "";
while (notExpired === ""){
    notExpired = prompt("Is the offer expired? Type 'yes' or 'no'");
}
if(notExpired === "no"){
    (notExpired = true);
}else{
    (notExpired = false);
}
var premiumMember = "";
while (premiumMember === ""){
    premiumMember = prompt("Is the person a premium member? Type 'yes' or 'no'");
}
if(premiumMember === "yes"){
    (premiumMember = true);
}else{
    (premiumMember = false);
}

let applyProductOffer = (personBuys > 2 && notExpired) || premiumMember;
if (applyProductOffer){
    alert("Product offer can be applied!");
}else{
    alert("Sorry, product offer can not be applied");
}