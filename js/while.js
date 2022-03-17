`use strict`;
//"While Loops" #2.
let n = 1;
while (n<=16){
    console.log(2**n);
    n++;
}

//"Do While Loop" #1.
var allCones = Math.floor(Math.random() * 100) + 50;
do {
    let conesSold = Math.floor(Math.random() * 5) + 1;
    //console.log("starting allCones value is: " + allCones);
    //console.log("starting conesBought value is: " + conesSold);

    if ((allCones - conesSold) < 0) {
        console.log("Cannot sell you " + conesSold + " cones I only have " + allCones + "...")
    } else {

        allCones = allCones - conesSold;
        console.log(conesSold + " cones sold...")
        //console.log("conesSold is now: " + conesSold);
    }
    //console.log(allCones);
}
while (allCones > 0);
console.log("Yay! I sold them all!");