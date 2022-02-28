/*
Warmup: Write a function called removeAll that takes two parameters. One that represents an array and another that represents a value to be removed from that array. When called this function should return an array with all the values of the original array except the specified value to be removed.
ex:
var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];

console.log(removeAll(bugs, "ant"));

// should print
[
  'mosquito',
  'scorpion',
  'mosquito',
  'typo',
  'reference error',
  'type error'
]
 */
//my solution
/*function removeAll (array1,val) {
    for(var i = 0; i < array1.length; i++) {
        if( array1[i] === val ) {

            array1.splice(i,1);
            i--;
            /!*console.log(removed);
            console.log(array1);*!/
        }
    }
    return array1;
}*/

//in class solution
function removeAll (anArr, valueToRemove) {
    let filteredArr = [];
    anArr.forEach(function (ele) {
        if (valueToRemove !== ele) {
            filteredArr.push(ele);
        }
    })
    /*
    alternative
     */
    return filteredArr;
}

var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
console.log(removeAll(bugs, "ant"));