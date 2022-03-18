"use strict";
/**
 * Define all the file-scoped variables we'll need in various parts of this js file
 * **/
mapboxgl.accessToken = MP_BX;
let map;
let geocoder;
let marker;
let popup;

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
        center: [-96.7969, 32.7763], // starting position [lng, lat]
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

        /*Finally, set the hoisted marker/popup variables to new respective objects*/
        marker = getMarker(e.result.geometry.coordinates);
        console.log(getMarker(e.result.geometry.coordinates));
        var mapboxLat = marker._lngLat.lat;
        console.log(mapboxLat);
        var mapboxLng = marker._lngLat.lng;
        console.log(mapboxLng);
        popup = getPopup(e.result.place_name, e.result.geometry.coordinates);
    });
}

/*ADDED FROM html*/
let startingLat = 32.7767;
let startingLon = -96.7970;

getWeatherData(startingLat, startingLon);

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


$('#submit').click(function (e) {
    e.preventDefault();
    let userLat = $('#lat').val();
    let userLon = $('#lon').val();
    getWeatherData(userLat, userLon);
})