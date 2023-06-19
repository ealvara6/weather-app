import './assets/styles/styles.scss';
import createWeatherForm from './components/weather-form';
import { locationInfo, weatherInfo } from './components/weather-info';
import { getWeatherData, createWeatherObj } from './components/weather-api/weather';

const component = () => {
  const element = document.createElement('div');
  element.id = 'container';

  const weatherForm = createWeatherForm();
  element.appendChild(weatherForm);

  getWeatherData('houston').then((data) => {
    const obj = createWeatherObj(data);

    console.log(obj);

    element.appendChild(locationInfo(obj.name, obj.region, obj.country, obj.time));
    element.appendChild(weatherInfo(obj.tempF, obj.tempC, obj.condition));
  });

  return element;
};

document.body.appendChild(component());
