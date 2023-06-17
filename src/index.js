import './assets/styles/styles.scss';
import createWeatherForm from './components/weather-form';

const component = () => {
  const element = document.createElement('div');
  element.id = 'container';
  element.innerHTML = 'Webpack is set up';

  const weatherForm = createWeatherForm();
  element.appendChild(weatherForm);

  return element;
};

document.body.appendChild(component());
