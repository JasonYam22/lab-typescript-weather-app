// src/utils.ts

import axios from "axios";
import { LocationResponse, Location, WeatherResponse } from "./types";

export function getLocation(locationName: string): Promise<LocationResponse> {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${locationName}&count=1`;
  return axios.get(url).then((response) => response.data);
}

export function getCurrentWeather(
  locationDetails: Location,
): Promise<WeatherResponse> {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${locationDetails.latitude}&longitude=${locationDetails.longitude}&current_weather=true&models=icon_global`;
  return axios.get(url).then((response) => response.data);
}

export function displayLocation(locationDetails: Location): void {
  const elementLocationName = document.getElementById(
    "location-name",
  ) as HTMLElement;
  
  elementLocationName.innerText = locationDetails.name;

  const elementCountry = document.getElementById("country") as HTMLElement;
  elementCountry.innerText = locationDetails.country;
}

export function displayWeatherData(obj: WeatherResponse): void {
  const elementTemperature = document.getElementById(
    "temperature",
  ) as HTMLElement;
const temperature = obj.current_weather.temperature;
const temperatureUnits = obj.current_weather_units.temperature;
elementTemperature.innerText = `Temperature: ${temperature} ${temperatureUnits}` 
 

  const elementWindSpeed = document.getElementById(
    "windspeed",
  ) as HTMLElement;
  const windspeed = obj.current_weather.windspeed;
const windspeedUnits = obj.current_weather_units.windspeed;
elementWindSpeed.innerText = `Windspeed: ${windspeed} ${windspeedUnits}`


  const elementWindDirection = document.getElementById(
    "winddirection",
  ) as HTMLElement;
  const winddirection = obj.current_weather.winddirection;
const winddirectionUnits = obj.current_weather_units.winddirection;
elementWindDirection.innerText = `Winddirection: ${winddirection} ${winddirectionUnits}`
}
