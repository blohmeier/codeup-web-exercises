"use strict";

/*
JS Object Warmup, pt 4:
We are going to create a method which
allows a user to input their desired amount of names names
use prompt, alert, confirm inside of a while loop
    assign each name to an array
once the user decides they are done giving names, end the loop and return the string array
then assigning that returned array by invoking your new function on the Person.names property value!
    Things to consider:
    Should this be a standalone function or should it be a method on the Person object?*/

// Defines a contact info object
function ContactInfo(phoneNumber, streetAddress, city, state, postalCode, emailAddress){
    this.phoneNumber = phoneNumber;
    this.streetAddress = streetAddress;
    this.city = city;
    this.state = state;
    this.postalCode = postalCode;
    this.emailAddress = emailAddress;
}
// Defines a person object
function Person(names, occupation, dob, contactInfo) {
    this.names = names;
    this.occupation = occupation;
    this.dob = dob;
    this.contactInfo = contactInfo;
}
// makes a new person object instance (by invoking the constructor)

function getNames(){
    let namesArr = [];
    let hasMoreNames = true;


    while (hasMoreNames){
        namesArr.push(prompt("Please enter your desired name"));

        hasMoreNames = confirm("Would you like to enter another name?");

    }

    return namesArr;


}
