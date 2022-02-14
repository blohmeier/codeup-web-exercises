"use strict";

// CREATING AN OBJECT

let car = {};
console.log(typeof car);

car.make = `Ford`;

console.log(car);

car.model = `Mustang`;

console.log(car);




// ASSIGNING PROPERTIES TO AN OBJECT

let cohort = {
    name: `Fortran`,
    startDate: `01/31/2022`,
    endDate: `07/31/2022`
}

//ACCESSING PROPERTIES
console.log(cohort.name);
console.log("The car model is: " + car.model);
// FIND KEYS
console.log(Object.keys(car));
car.year = `1994`;
console.log(Object.keys(car));
console.log(Object.keys(cohort));



// IN KEYWORD
// Below: used to count number of duplicates in a string of letters. Create object where each letter is a property and value is number of times you find that property
if (!(`numOfWheels` in car)) {
    car.numOfWheels = 4;
}

console.log(car);

// NESTED VALUES

let elixirCohort = {
    name: `Elixir`,
    startYear: `2021`,
    students: [`Array of student names - Hector, David, Brendan, Brice etc`],
    hasGraduated: false
}

console.log(elixirCohort.startYear);

console.log(elixirCohort.hasGraduated);

elixirCohort.hasGraduated = true;

console.log(elixirCohort.hasGraduated);

// OBJECTS WITHIN OBJECTS

elixirCohort.students = [
    { // students[0]
        name: `Ry`,
        age: 27
    },
    { // students[1]
        name: `Casey`,
        age: 27
    },
    {
        name: `Docrob`,
        age: 40
    }
]
console.log(elixirCohort.students[0].name); //Ry
console.log(elixirCohort.students[1].name); //Casey

// ASSIGNING FUNCTIONALITY(BEHAVIORS) TO AN OBJECT

// car.honk = function () {
//     console.log("Honque Honque");
// }
//
// car.honk();

car.printNumberOfWheels = function () {
    console.log(this.numOfWheels);
}

car.printNumberOfWheels();

elixirCohort.printAllStudentNames = function () {
    //console.log(this.students); // "this" means elixirCohort
    this.students.forEach(function (student) { // again, this means elixirCohort
        console.log(student.name);
    })
}

elixirCohort.printAllStudentNames();