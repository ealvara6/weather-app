import './assets/styles/styles.scss';
import createWeatherForm from './components/weather-form';
import { weatherInfo, locationInfo } from './components/weather-info';
import { getWeatherData, createWeatherObj } from './components/weather-api/weather';

const inputAndLocationInfo = (location, weatherForm) => {
  const element = document.createElement('div');
  element.id = 'left-side';

  element.appendChild(weatherForm);
  element.appendChild(location);

  return element;
};

const component = () => {
  const element = document.createElement('div');
  element.id = 'container';

  getWeatherData('houston').then((data) => {
    const obj = createWeatherObj(data);
    const weatherForm = createWeatherForm();
    const location = locationInfo(obj.name, obj.region, obj.country, obj.time);

    element.appendChild(inputAndLocationInfo(location, weatherForm));
  });

  return element;
};

document.body.appendChild(component());
