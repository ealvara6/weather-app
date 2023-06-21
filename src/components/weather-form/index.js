import handleError from '../error';
import CurrentWeather from '../current-weather/currentWeather';
import { updateForecastInfo } from '../forecast';
import { forecastArray } from '../forecast/forecast';
import { updateWeatherInfo } from '../current-weather';
import getWeatherData from '../weather-api/weather';

const handleSubmit = (input) => {
  getWeatherData(input).then((data) => {
    if (data.error) {
      handleError(data.error);
    } else {
      const weatherObj = new CurrentWeather(data);
      const forecast = forecastArray(data.forecast.forecastday);
      updateWeatherInfo(weatherObj, forecast);

      updateForecastInfo(forecast);
    }
  });
};

const createWeatherForm = () => {
  const element = document.createElement('form');

  const label = document.createElement('label');
  label.setAttribute('for', 'weather');
  label.innerHTML = 'Enter Location';
  element.appendChild(label);

  const input = document.createElement('input');
  input.id = 'weather';
  input.setAttribute('type', 'text');
  input.setAttribute('name', 'weather');
  element.appendChild(input);

  const submit = document.createElement('button');
  submit.setAttribute('type', 'submit');
  submit.innerHTML = 'Submit';
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    handleSubmit(input.value);
  });
  element.appendChild(submit);

  return element;
};

export default createWeatherForm;
