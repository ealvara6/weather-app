import './assets/styles/styles.scss';
import createWeatherForm from './components/weather-form';
import { locationInfo, weatherInfo } from './components/weather-info';
import { getWeatherData, Weather } from './components/weather-api/weather';
import { forecastArray } from './components/forecast/forecast';
import { forecastInfo } from './components/forecast';

const component = () => {
  const element = document.createElement('div');
  element.id = 'container';

  const weatherForm = createWeatherForm();
  element.appendChild(weatherForm);

  getWeatherData('houston').then((data) => {
    console.log(data);
    const obj = new Weather(data);

    const forecast = forecastArray(data.forecast.forecastday);

    element.appendChild(locationInfo(obj.name, obj.region, obj.country, obj.time));
    element.appendChild(weatherInfo(obj.tempF, obj.tempC, obj.condition));
    element.appendChild(forecastInfo(forecast));
  });

  return element;
};

document.body.appendChild(component());
