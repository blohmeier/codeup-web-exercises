/*
JS Object Warmup, pt 1:
Create an object representing a person. It should have properties representing:
names (an array of strings)
date of birth
occupation
Hard code some values in that object, then log it and its properties to the console*/
var person = [
    {
        name: "Tommy Johnson",
        dob: "17Nov95",
        occupation: "doctor"
    },
    {
        name: "Doris James",
        dob: "01Aug05",
        occupation: "lawyer"
    },
    {
        name: "Ralph Lauren",
        dob: "07Sept11",
        occupation: "police officer"
    },
    {
        name: "Winn Dixie",
        dob: "22Apr10",
        occupation: "firefighter"
    },
];
console.log(person[0].name);
console.log(person[3].dob);

//Reviewer answer:

var person = {
    names: ["Casey", "J", "Edwards"],
    occupation: "Cat Herder / Firefighter",
    dob: "11.30.1989"
}

console.log(person.names);

person.names.forEach((name)=> {
    console.log(name);
})
/*

var person2 = {};
person2.name = "Brett"

console.log(person2.name);*/

let person2 = Object.create(person);
person2["names"] = ["Ry", "Sutton"];
person2["occupation"] = "Fab Father";
person2.dob = "01.01.1992";
console.log(person2);
/*person2["dob"] = "01.02.1992";
console.log(person2)*/


/*
JS Object Warmup, pt 2:
Create an object representing a person’s contact info. It should have:
    phone number
street address
state
postal code
email address
Hard code some values in that object, then log it and its properties to the console*/

/*
var personContactInfo = {
    phoneNumber: "867-5309",
    streetAddress: "103 Elm Street",
    state: "Texas",
    postalCode: "75201",
    emailAddress: "tom.swift@gmail.com"
}
console.log(personContactInfo);*/

//Reviewer effort:
var contactInfo = {
    phoneNumber: "123.456.7890",
    streetAddy: "123 Anywhere Ln",
    city: "Beverly Hills",
    state: "CA",
    postalCode: "90210",
    emailAddress: 'nope@no-no-no'
}
console.log(contactInfo);

console.log(contactInfo.streetAddy);
console.log(contactInfo.city + ", " + contactInfo.state + " " + contactInfo.postalCode);



//TODO: print out the formatted address of the contact info
// It should look like this-ish:
// 123 Anywhere Ln
// Beverly Hills, CA 90210
