import { weather_data } from './data.js';


let loadDayForecastData = () => {

    let [guayaquil, ambato, tema] = weather_data;
    let { city, date, maxtemperature, mintemperature, cloudiness, wind, rainfall, forecast_today, ...other } = guayaquil

    let cityHTML = document.getElementById("city")
    cityHTML.innerHTML = city;

    let dateHTML = document.getElementById("date")
    dateHTML.innerHTML = date;

    let maxtemperatureHTML = document.getElementById("maxtemperature")
    maxtemperatureHTML.innerHTML = maxtemperature;

    let mintemperatureHTML = document.getElementById("mintemperature")
    mintemperatureHTML.innerHTML = mintemperature;

    let cloudinessHTML = document.getElementById("cloudiness")
    cloudinessHTML.innerHTML = cloudiness;

    let windHTML = document.getElementById("wind")
    windHTML.innerHTML = wind;

    let rainfallHTML = document.getElementById("rainfall")
    rainfallHTML.innerHTML = rainfall;

    //late
    
    let late_iconHTML = document.getElementById("late_icon")
    late_iconHTML.innerHTML = forecast_today[0].icon;

    let late_temperatureHTML = document.getElementById("late_temperature")
    late_temperatureHTML.innerHTML = forecast_today[0].temperature;


    let late_forecastHTML = document.getElementById("late_forecast")
    late_forecastHTML.innerHTML = forecast_today[0].forecast;

    let late_textHTML = document.getElementById("late_text")
    late_textHTML.innerHTML = forecast_today[0].text;

    //night

    let night_iconHTML = document.getElementById("night_icon")
    night_iconHTML.innerHTML = forecast_today[1].icon;

    let night_temperatureHTML = document.getElementById("night_temperature")
    night_temperatureHTML.innerHTML = forecast_today[1].temperature;


    let night_forecastHTML = document.getElementById("night_forecast")
    night_forecastHTML.innerHTML = forecast_today[1].forecast;

    let night_textHTML = document.getElementById("night_text")
    night_textHTML.innerHTML = forecast_today[1].text;

}

let loadWeekForecastData = () => {

    let { forecast_week, ...other } = weather_data[0]
    let ulCollection = document.getElementsByClassName('list-group')
    let ul = ulCollection[0]

    for (let index = 0; index < forecast_week.length; index++) {

        let day = forecast_week[index];
        
        let template = `
        <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
            <div class="d-flex flex-column">
                <h6 class="mb-1 text-dark font-weight-bold text-sm">${day.text}</h6>
                <span class="text-xs">${day.date}</span>
            </div>
            <div class="d-flex align-items-center ">
                <span class="font-weight-bold text-dark mx-2">${day.temperature.max}</span> |  <span class="text-dark mx-2">${day.temperature.min}</span>
                <div class="ms-4"><i class="material-icons fs-2 me-1 rainy">${day.icon}</i></div>
            </div>
            </li>
        `
        ul.innerHTML += template
        

    }

}


loadDayForecastData();
loadWeekForecastData();