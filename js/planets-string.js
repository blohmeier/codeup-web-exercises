(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";


    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    var planetsArray = planetsString.split('|');;
    console.log(planetsArray);


    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     */
    var planetsStringBreak = planetsArray.join('<br>');
    console.log(planetsStringBreak);

     /* BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    //My solution
    // var planetsList = `<ul><li>` + planetsArray.join('<li>') + `</ul>`;
    //console.log(planetsList);
    // Reviewer solution
    function buildPlanetUl(arrOfPlanets) {
        let newString = `<ul>`;
        for (let i = 0; i < arrOfPlanets.length; i++) {
            newString += `<li>`;
            newString += arrOfPlanets[i];
            newString += `</li>`;
        }
        newString += '<ul>';
        return newString;
    }
    console.log(buildPlanetUl(planetsArray))
})();