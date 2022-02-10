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
// Same problem, with for loop ...
//let num;
// function showMultiplicationTable (num) {
//     for (i = 1; i <= 10; i++) {
//         console.log(num + " x " + i + " = " + (num*i));
//     }
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

// // "For Loops" #5.
// //var b = 100;
// for(let i = 0; i < 20; i++) {
//     console.log(100 - 5*i);
// }

//Instructor solutions
//1.
// function showMultiplicationTables(num) {
//     for (let multiplier = 1; multiplier <= 10; multiplier++) {
//         console.log(num + " x " + multiplier + " = " + (num * multiplier));
//     }
// }
//showMultiplicationTables(7);

//2.
// function printRandomNumbers(){
//     for (let i = 1; i <= 10; i++) {
//         let random = Math.floor((Math.random() * 180) + 20);
//         if (random % 2 === 0) {
//         console.log(random + " is even");
//         } else {
//         console.log(random + " is odd");
//         }
//     }
// }
// printRandomNumbers();

//3.
// function printNumStack() {
//     for(let outerNum = 1; outerNum < 10; outerNum++) {
//         let numString = "";
//         for(let innerNum = 1; innerNum <= outerNum; innerNum++) {
//             //console.log(outerNum); prints all nums, but not on same line.
//             numString += outerNum + "";
//         }
//         console.log(numString);
//     }
// }
//
// printNumStack();

// for (var i = 1; i < 10; i++){
//     console.log(i.toString().repeat(i))
// }
//
// function roughSizeOfObject( object ) {
//
//     var objectList = [];
//     var stack = [ object ];
//     var bytes = 0;
//
//     while ( stack.length ) {
//         var value = stack.pop();
//
//         if ( typeof value === 'boolean' ) {
//             bytes += 4;
//         }
//         else if ( typeof value === 'string' ) {
//             bytes += value.length * 2;
//         }
//         else if ( typeof value === 'number' ) {
//             bytes += 8;
//         }
//         else if
//         (
//             typeof value === 'object'
//             && objectList.indexOf( value ) === -1
//         )
//         {
//             objectList.push( value );
//
//             for( var i in value ) {
//                 stack.push( value[ i ] );
//             }
//         }
//     }
//     return bytes;
// }
//4.
// function numsLessFive() {
//     for (let i = 100; i >= 5; i -= 5){
//         console.log(i);
//     }
// }
// numsLessFive();