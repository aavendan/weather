import { weather_data } from './data.js';


let loadDayForecastData = () => {
    
    let [ guayaquil, ambato, tema ] = weather_data;
    let { city , date, maxtemperature, mintemperature, ...other} = guayaquil

    let cityHTML = document.getElementById("city")
    cityHTML.innerHTML  = city;

    let dateHTML = document.getElementById("date")
    dateHTML.innerHTML  = date;

    let maxtemperatureHTML = document.getElementById("maxtemperature")
    maxtemperatureHTML.innerHTML  = maxtemperature;

    let mintemperatureHTML = document.getElementById("mintemperature")
    mintemperatureHTML.innerHTML  = mintemperature;
}

let loadWeekForecastData = () => {
	
	
}


loadDayForecastData();
loadWeekForecastData();