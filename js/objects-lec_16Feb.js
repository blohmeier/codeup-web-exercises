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
person2["dob"] = "01.02.1992";
console.log(person2)
