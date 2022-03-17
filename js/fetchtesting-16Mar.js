const options = {method: 'GET', headers: {Accept: 'application/json'}};

fetch(`https://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=057a6392ed908d38e1613e1d44985802`, options)
    .then(response => response.json())
    .then(response => getSanitizedResponse(response))
    .then(sres => renderDailyForecast(sres))
    .catch(err => console.error(err));

function getSanitizedResponse(dataBody) {
    return {
        feelsLike: dataBody.main.feels_like,
        humidity: dataBody.main.humidity
    };
}

//language=HTML
function renderDailyForecast(forecast) {
    // generate DOM nodes and append to DOM
    console.log(forecast);
    $('body').append(`
      <div class="card mx-auto mt-4">
        <div class="px-2">
          <h3>Temperature Feels Like:</h3>
          <p>${forecast.feelsLike}</p>
        </div>
        <div class="px-2">
          <h3>Humidity</h3>
          <p>${forecast.humidity}</p>
        </div>
      </div>`
    );
}