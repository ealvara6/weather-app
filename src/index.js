import './assets/styles/styles.scss';
import createWeatherForm from './components/weather-form';
import { locationInfo, weatherInfo } from './components/current-weather';
import getWeatherData from './components/weather-api/weather';
import { forecastArray } from './components/forecast/forecast';
import { forecastInfo } from './components/forecast';
import CurrentWeather from './components/current-weather/currentWeather';

const component = () => {
  const element = document.createElement('div');
  element.id = 'container';

  const weatherForm = createWeatherForm();
  element.appendChild(weatherForm);

  getWeatherData('houston').then((data) => {
    const obj = new CurrentWeather(data);

    const forecast = forecastArray(data.forecast.forecastday);

    element.appendChild(locationInfo(obj, forecast));
    element.appendChild(weatherInfo(obj.temp, obj.condition));
    element.appendChild(forecastInfo(forecast));
  });

  return element;
};

document.body.appendChild(component());
