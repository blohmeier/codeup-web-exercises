`use strict`;


// "For Loops" #2.
// function showMultiplicationTable (num) {
//     console.log(num + " x 1 = " + (num*1));
//     console.log(num + " x 2 = " + (num*2));
//     console.log(num + " x 3 = " + (num*3));
//     console.log(num + " x 4 = " + (num*4));
//     console.log(num + " x 5 = " + (num*5));
//     console.log(num + " x 6 = " + (num*6));
//     console.log(num + " x 7 = " + (num*7));
//     console.log(num + " x 8 = " + (num*8));
//     console.log(num + " x 9 = " + (num*9));
//     console.log(num + " x 10 = " + (num*10));
// }
// showMultiplicationTable(7);

// // "For Loops" #3.
// for (i = 0; i < 10; i++) {
//     let random = Math.floor((Math.random() * 200) + 20);
//     if (random % 2 === 0) {
//         console.log(random + " is even");
//     } else {
//         console.log(random + " is odd");
//     }
// }

// "For Loops" #4.
// var a = "";
// for(b = 1;b <= 9; b = b + 1) {
//     var d = "";
//     for(c = 1; c <= b; c = c + 1) {
//         d += b
//     }
//     console.log(d);
// }

// "For Loops" #5.
//var b = 100;
for(let i = 0; i < 20; i++) {
    console.log(100 - 5*i);
}
