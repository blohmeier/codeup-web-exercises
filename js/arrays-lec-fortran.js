"use strict";

// console.log("test")

// var dog1 = "Fido";
// var dog2 = "Spot";
// var dog3 = "Fifi";
// var dog4 = "Lola";


//Fido is the first element (i.e., an odd element), even though the index is 0.
var dogNames = ["Fido", "Spot", "Fifi", "Lola"];
var dogAges = [5, 2, 3, 10];
// Will not be able to do the below in Java - can't do heterogeneous arrays in Java. Don't do the below.
// var dogs = ["Fido", 5, "Spot", 2];

// console.log("Dog names: " + dogNames);
// console.log(dogNames.length);

// first elemnt is at index 0
// console.log(dogNames[0]); // Fido
// how to speak accessing elements
// the element at index 0
// the 0th element in the array
// dogNames sub 0

// last element is at index length - 1
// console.log(dogNames[dogNames.length-1]); // Lola
// to make the above easier:
// var lastIndex = dogNames.length - 1
// console.log(dogNames[lastIndex]); // Lola
// how to speak accessing the last element?
// the last element in the array

// log the 2nd to last element
// console.log(dogNames[dogNames.length - 2]);

// // loops and arrays are like peas and carrots
// for (var i = 0; i < dogNames.length; i++) { // iterates 4 times.
//     // output the ith element in the array
//     // or
//     // output the element sub i
//     // or
//     // output the element at index i
//     console.log("Dog at index " + i + " is " + dogNames[i]);
// }
//
// // reverse the output by reversing the index counter
// for (let i = dogNames.length - 1; i >= 0; i--) {
//     console.log("Dog at index " + i + " is " + dogNames[i]);
// }
//
// // output only the odd dogs.
// // Fido is the first element, even though the index is 0.
// // therefore I consider Fido to be an odd element
// // thus even index values will be considered an odd element
// for (let i = dogNames.length - 1; i >= 0; i--) {
//     if(i % 2 !== 0) {
//         console.log("The odd dog at index " + i + " is " + dogNames[i]);
//     }
// }

// forEach loops
dogNames.forEach(function(dogName, index) {
    // this function will be executed on each element
    // as the forEach iterates over the array
    // BUT to skip:
    // if(a certain record) {
    //      skip that record
    // }
    console.log("Dog at index " + index + " is " + dogName);
});

// Do not use forEach loop to change array contents.