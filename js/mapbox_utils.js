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
let clickLat;
let clickLon;
let icon;


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
        marker: true
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
        console.log(this)
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

        /*Finally, set the hoisted marker/popup variables to new respective objects*/
        /*popup = getPopup(e.results.place_name, e.results.geometry.coordinates);
        marker = getMarker(e.results.geometry.coordinates);*/
        /*console.log(getMarker(e.result.geometry.coordinates));*/

        /*From search box entry result, use marker output to get new lat/long for firing 'getWeatherData'*/
        /*var mapboxLat = marker._lngLat.lat;*/
        /*console.log(mapboxLat);*/
        lat = marker._lngLat.lat;
        /*var mapboxLng = marker._lngLat.lng;*/
        /*console.log(mapboxLng);*/
        lng = marker._lngLat.lng;
        weatherData = getWeatherData(lat, lng);

        /*TODO: From mouse click result, use lat long output as new lat/long for firing 'getWeatherData'*/
        /*lat = e.lngLat.lat;
        lng = e.lngLat.lng;
        clickLocation = getWeatherData(lat, lng);*/
    });
    map.on('click', function(e) {
        if (marker) {
            marker.remove();
        }
        if (popup) {
            popup.remove();
        }
        if (weatherData) {
            weatherData.remove();
        }
        console.log(e);
        var coordinates = e.lngLat;
        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(`<p>Longitude: ${coordinates.lng}<br />Latitude: ${coordinates.lat}</p>`)
            /*.setHTML('you clicked here: <br/>' + coordinates)*/
            .addTo(map);
        lat = e.lngLat.wrap().lat;
        lng = e.lngLat.wrap().lng;
        weatherData = getWeatherData(lat, lng);
    });
    geocoder.on('dragend', function (e) {
    })
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
        icon: dayObj.weather[0].icon,
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
    console.log(day)
    console.log(weather.icon)
    let formattedDate = formatDate(weather.date);
    // language=HTML
    html += `
            <div class="card col-xs-12 col-md p-0" <!--style="width: 16.5rem-->;">
                <div class="card-header">
                    ${formattedDate}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Temp: ${weather.dailyTemp}</li>`
    html += "<li class=\"list-group-item\">" + '<img src="http://openweathermap.org/img/wn/' + weather.icon + '@2x.png"/>' + '</li>'
    html +=        `<li class="list-group-item">Hum: ${weather.humidity}</li>
                    <li class="list-group-item">Pressure: ${weather.pressure}</li>
                </ul>
            </div>
    `
                    /*<li class="list-group-item"><img src="http://openweathermap.org/img/wn/' + weather.icon + '@2x.png"/></li>

    html += "<div>" + '<img src="http://openweathermap.org/img/wn/' + weather.icon + '@2x.png"/>' + '</div>'*/
    return html;
}

function formatDate(unixDate) {
    return new Date(unixDate * 1000).toISOString().split('T')[0];
}

//Testing draggable marker
const coordinates2 = document.getElementById('coordinates2');
const marker2 = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-96.7969, 32.7763])
    .addTo(map)

function onDragEnd() {
    const lngLat = marker2.getLngLat();
    coordinates2.style.display = 'block';
    coordinates2.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
}
marker2.on('dragend', onDragEnd);
//End Testing draggable marker
//Start right click zoom
/*window.addEventListener('contextmenu', (event) => {
    console.log(event.button)
    map.flyTo({zoom:4});
});*/
//End right click zoom
