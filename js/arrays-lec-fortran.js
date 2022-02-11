"use strict;"

// console.log("test")

// var dog1 = "Fido";
// var dog2 = "Spot";
// var dog3 = "Fifi";
// var dog4 = "Lola";

var dogNames = ["Fido", "Spot", "Fifi", "Lola"];
var dogAges = [5, 2, 3, 10];
// Will not be able to do the below in Java - can't do heterogeneous arrays in Java. Don't do the below.
var dogs = ["Fido", 5, "Spot", 2];

console.log("Dog names: " + dogNames);
console.log(dogNames.length);

// first elemnt is at index 0
console.log(dogNames[0]); // Fido
// last element is at index length - 1
console.log(dogNames[dogNames.length-1]); // Lola