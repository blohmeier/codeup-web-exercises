"use strict";
/**
 * Define all the file-scoped variables we'll need in various parts of this js file
 * **/
mapboxgl.accessToken = MP_BX;
let map;
let geocoder;
let marker;
let popup;

/*NEW VARS TO GET MAP AND FORECAST WORKING TOGETHER*/
var lat = 32.7763;
var lng = -96.7969;
let weatherData;
let clickLocation;
let clickLocationLat;
let clickLocationLon;
let clickUpdate

/**
 * Invoke the initial functions to kick off our application
 * **/
init();
setGeocoderEventListener();


/**Define a function to instantiate the map and geocoder objects and bind them together**/
function init() {

    /*Make the mapbox map object, set to map variable declared above*/
    map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [lng, lat], // starting position [lng, lat]
        zoom: 12 // starting zoom
    });

    /*Make the geocoder object, set to the geocoder variable declared above*/
    geocoder = new MapboxGeocoder({
        accessToken: MP_BX,
        mapboxgl: mapboxgl,
        marker: false
    });

    /*Add the geocoder variable value to the map as a control (form input)*/
    map.addControl(geocoder);
}

/**
 * Utility function to get a new Marker object whenever invoked
 * param coordinates: number array containing the lng lat of the location
 * **/
function getMarker(coordinates) {
    return new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(map);
}


/**
 * Utility function to get a new Popup object whenever invoked
 * param description: string represented details of the location
 * param coordinates: number array containing the lng lat of the location
 * **/
function getPopup(description, coordinates) {
    return new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(`<p>${description}</p>`)
        .addTo(map);
}


/**
 * Encapsulates code to listen for the geocoder to return a result and allows us to get new Marker and Popup objects
 * **/
function setGeocoderEventListener() {
    geocoder.on("result", function (e) {
        /*We need to ensure marker/popup variables hoisted at the top actual *have* a value
        * Otherwise, calling a remove() method on a non-existent object will result in a runtime error
        * */
        if (marker) {
            marker.remove();
        }
        if (popup) {
            popup.remove();
        }
        if (weatherData) {
            weatherData.remove();
        }
        if (clickUpdate) {
            clickUpdate.remove();
        }

        /*Finally, set the hoisted marker/popup variables to new respective objects*/
        marker = getMarker(e.result.geometry.coordinates);
        console.log(getMarker(e.result.geometry.coordinates));
        var mapboxLat = marker._lngLat.lat;
        lat = marker._lngLat.lat;
        console.log(mapboxLat);
        var mapboxLng = marker._lngLat.lng;
        console.log(mapboxLng);
        lng = marker._lngLat.lat;
        popup = getPopup(e.result.place_name, e.result.geometry.coordinates);
        weatherData = getWeatherData(lat, lng);
        clickUpdate = getWeatherData(lat, lng)

    });
    /*return lat;
    return lng;*/

}

/*ADDED FROM html*/

getWeatherData(lat, lng);

function getWeatherData(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${TEST1_KEY}`)
        .then(response => response.json())
        .then(data => {
            $('#weather').html(buildCardCont(data.daily));
        });
}

function extractWeatherData(dayObj) {
    return {
        date: dayObj.dt,
        dailyTemp: dayObj.temp.day,
        humidity: dayObj.humidity,
        pressure: dayObj.pressure
    }
}

function buildCardCont(dayArr) {
    let html = '<div class="row">'
    for (let i = 0; i < 5; i++) {
        html += buildWeatherCard(dayArr[i]);
    }
    html += '</div>';
    return html;
}

function buildWeatherCard(day) {
    let html = '';
    let weather = extractWeatherData(day);
    let formattedDate = formatDate(weather.date);
    // language=HTML
    html += `
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                    ${formattedDate}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Temp: ${weather.dailyTemp}</li>
                    <li class="list-group-item">Hum: ${weather.humidity}</li>
                    <li class="list-group-item">Pressure: ${weather.pressure}</li>
                </ul>
            </div>`
    return html;
}

function formatDate(unixDate) {
    return new Date(unixDate * 1000).toISOString().split('T')[0];
}

/*ADDED TO GET DOUBLE CLICK FUNCTIONALITY. Sources:
First Try: https://docs.mapbox.com/mapbox-gl-js/example/drag-a-marker/
Second Try: https://stackoverflow.com/questions/63158744/display-lat-lng-coordinates-on-click-on-mapbox-gl-js
*/

function latLonOnClick () {
    map.on('style.load', function() {
        map.on('click', function(e) {
            var coordinates = e.lngLat;
            console.log(coordinates.lat);
            lat = coordinates.lat;
            console.log(coordinates.lng);
            lng = coordinates.lng;
            new mapboxgl.Popup()
                .setLngLat(coordinates)
                .setHTML('you clicked here: <br/>' + coordinates)
                .addTo(map);
        });
    });
}
clickLocation = latLonOnClick();
