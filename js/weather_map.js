"use strict";
mapboxgl.accessToken = MP_BX;
let map;
let geocoder;
let marker;
var lng = -96.7969;
var lat = 32.7763;
let weatherData;
let results2
let coordinatesVar

/*Build map and start event listeners*/
init();
setGeocoderEventListener1();
setGeocoderEventListener2();

function init() {
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat], // starting position [lng, lat]
        zoom: 5 // starting zoom
    });

    /*Make the geocoder object, set to the geocoder variable declared above*/
    geocoder = new MapboxGeocoder({
        accessToken: MP_BX,
        mapboxgl: mapboxgl,
        marker: false,
    });

    /*Add the geocoder variable value to the map as a control (form input)*/
    map.addControl(geocoder);

    /*Draggable marker connected to forecast*/
    marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([lng, lat])
        .addTo(map);
    $('.currentCity-span').text("Dallas, Texas, United States");
}

function setGeocoderEventListener1() {
    geocoder.on("result", function (e) {
        if (marker) {
            marker.remove();
        }
        if (weatherData) {
            weatherData.remove();
        }
        map.flyTo({center: [e.result.geometry.coordinates[0], e.result.geometry.coordinates[1]]});
        /*Add new draggable marker connected to forecast*/
        marker = new mapboxgl.Marker({
            draggable: true
        })
            .setLngLat([e.result.geometry.coordinates[0], e.result.geometry.coordinates[1]])
            .addTo(map);

        weatherData = getWeatherData(e.result.geometry.coordinates[1], e.result.geometry.coordinates[0]);
        $('.currentCity-span').text(e.result.place_name);
        /*Ensure event listener for draggable mouse is restarted*/
        setGeocoderEventListener2();
    });
}
function setGeocoderEventListener2() {
    marker.on('dragend', function(e) {
        if (weatherData) {
            weatherData.remove();
        }
        weatherData = getWeatherData(e.target._lngLat.lat, e.target._lngLat.lng);

        map.flyTo({center: [e.target._lngLat.lng, e.target._lngLat.lat]});

        //Log address for dropped marker
        reverseGeocode({lng: e.target._lngLat.lng, lat: e.target._lngLat.lat}, TEST1_KEY).then(function(results) {
            results2 = results;
            $('.currentCity-span').text(results2);
        });
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