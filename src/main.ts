// src/main.ts
import { getLocation, getCurrentWeather, displayLocation, displayWeatherData } from './utils';

const form = document.getElementById("weather-form") as HTMLFormElement;

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  const input = document.getElementById("location") as HTMLInputElement;
  const locationName = input.value;

  console.log(
    `The user has submitted the form and is searching for a location with this name ${locationName}`,
  );

input.value = "";  

getLocation(locationName)
.then((response) => {
const locationDetails = response.results[0];
displayLocation(locationDetails)

getCurrentWeather(locationDetails)
.then((weatherResponse) => {
displayWeatherData(weatherResponse)
})
})
.catch((error) => {
    console.log(error)
})
})