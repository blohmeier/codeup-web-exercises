// using same example input even numbers 8-50
let num = 8
while (num < 50) {
    if (num % 2 === 0) {
        console.log(num)
        num++
    } else {
        num++
    }
}

// //
// let fullNameEntered = false;
// let names = "";
// // WE DON'T KNOW HOW MANY NAMES THEY HAVE!
// while (!fullNameEntered){
//
//     fullNameEntered = confirm("Is this your full name?" + names);
//     names += " ";
//     names += prompt("Please enter or add to your name") + " ";
// }
// alert("You have entered: " + names);
// //

//
let fullNameEntered = false;
let names = "";
// NOT AS HACKY AS ABOVE
do {
    names += prompt("Please enter or add to your name");
    fullNameEntered = confirm("Is this your full name?" + names);
    if (!fullNameEntered) {
        names += " ";
    }
} while (!fullNameEntered)
alert("You have entered: " + names);
//