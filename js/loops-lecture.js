let num = 8
while (num < 50) {
    if (num % 2 === 0) {
        console.log(num)
        num++
    } else {
        num++
    }
}

let fullNameEntered = false;
let names = "";
// WE DON'T KNOW HOW MANY NAMES THEY HAVE!
while (!fullNameEntered){
    names += prompt("Please enter");

    fullNameEntered = true;
}
alert("This is your name: " + names);