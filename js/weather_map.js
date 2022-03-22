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
let clickLat;
let icon;
let popupPlaceName;


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
        zoom: 5 // starting zoom
    });

    /*Make the geocoder object, set to the geocoder variable declared above*/
    geocoder = new MapboxGeocoder({
        accessToken: MP_BX,
        mapboxgl: mapboxgl,
        /*marker: true*/
    });


    /*Add the geocoder variable value to the map as a control (form input)*/
    map.addControl(geocoder);

    /*Draggable marker connected to forecast*/
    marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([lng, lat])
        .addTo(map);
    console.log(marker)
    $('.currentCity-span').text("Dallas, Texas, United States");
}

/**
 * Utility function to get a new Marker object whenever invoked
 * param coordinates: number array containing the lng lat of the location
 * **/
function getMarker(coordinates) {
    return new mapboxgl.Marker({
        draggable: true,
        color: 'red'
    })
        .setLngLat(coordinates)
        .setPopup(popup)
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
        /*.addTo(map);*/
}


/**
 * Encapsulates code to listen for the geocoder to return a result and allows us to get new Marker and Popup objects
 * **/
function setGeocoderEventListener() {
    geocoder.on("result", function (e) {
        /*console.log(this)*/
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
        console.log(e);
       /* let coordinates = e.lngLat;*/
        marker = getMarker(e.result.geometry.coordinates);
        /*console.log(getMarker(e.result.geometry.coordinates));*/

        lat = marker._lngLat.lat;
        lng = marker._lngLat.lng;
        weatherData = getWeatherData(lat, lng);

        map.flyTo({
            center: [lng, lat],
            zoom: 5,
            speed: 9
        });

        $('.currentCity-span').text(e.result.place_name);

    });
    marker.on('dragend', function(e) {
        if (popup) {
            popup.remove();
        }
        if (weatherData) {
            weatherData.remove();
        }

        /*marker = getMarker(e.dragend);*/
        /*console.log('event: ', e.dragend.target)*/


        lat = e.target._lngLat.lat;
        lng = e.target._lngLat.lng;
        weatherData = getWeatherData(lat, lng);

        map.flyTo({
            center: [lng, lat],
            zoom: 5,
            speed: 9
        });

        /*$('.currentCity-span').text(e.result.place_name);*/
    });
}

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
        dailyTempMax: dayObj.temp.max,
        dailyTempMin: dayObj.temp.min,
        icon: dayObj.weather[0].icon,
        description: dayObj.weather[0].description,
        humidity: dayObj.humidity,
        wind: dayObj.wind_speed,
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

function getCity () {
    let cityInput = $(popupPlaceName);
    $('#currentCity-span').text(cityInput);
}

function buildWeatherCard(day) {
    let html = '';
    let weather = extractWeatherData(day);
    /*console.log(day)
    console.log(weather.icon)*/
    let formattedDate = formatDate(weather.date);
    // language=HTML
    html += `
            <div class="card col-xs-12 col-md p-0" <!--style="width: 16.5rem-->;">
                <div class="card-header">
                    ${formattedDate}
                </div>
                <ul class="list-group list-group-flush">
                    <!--<li class="list-group-item">Temperature: ${weather.dailyTemp}</li>-->`
    html +=        "<li class=\"list-group-item\">" + weather.dailyTempMax + '° / ' + weather.dailyTempMin +  '°' + '</li>'
    html +=        "<li class=\"list-group-item\">" + '<img src="http://openweathermap.org/img/wn/' + weather.icon + '.png"/>' + '<br>' + weather.description  + '</li>'
    html +=        `<!--<li class="list-group-item">Description: ${weather.description}</li>-->
                    <li class="list-group-item">Humidity: ${weather.humidity}</li>
                    <li class="list-group-item">Wind: ${weather.wind}</li>
                    <li class="list-group-item bgtext"><p>Pressure: ${weather.pressure}</p></li>
                </ul>
            </div>`
    return html;
}

function formatDate(unixDate) {
    return new Date(unixDate * 1000).toISOString().split('T')[0];
}