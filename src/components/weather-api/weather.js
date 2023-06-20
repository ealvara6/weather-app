import handleError from '../error';
import { updateWeatherInfo } from '../weather-info';
import { updateForecastInfo } from '../forecast';
import { forecastArray } from '../forecast/forecast';

const key = 'ef1e16cd5e194abcb13211412231606';

class Weather {
  constructor(data) {
    this.name = data.location.name;
    this.region = data.location.region;
    this.country = data.location.country;
    this.time = data.location.localtime;
    this.tempF = data.current.temp_f;
    this.tempC = data.current.temp_c;
    this.condition = data.current.condition;
    this.forecast = data.forecast.forecastday;
  }
}

const getWeatherData = async (location) => {
  const url = 'http://api.weatherapi.com/v1/forecast.json?';

  const response = await fetch(`${url}key=${key}&q=${location}&days=7`);
  const weatherData = await response.json();

  return weatherData;
};

const handleSubmit = (input) => {
  getWeatherData(input).then((data) => {
    if (data.error) {
      handleError(data.error);
    } else {
      const weatherObj = new Weather(data);
      updateWeatherInfo(weatherObj);

      const forecast = forecastArray(data.forecast.forecastday);
      updateForecastInfo(forecast);
    }
  });
};

export {
  getWeatherData,
  handleSubmit,
  Weather,
};
