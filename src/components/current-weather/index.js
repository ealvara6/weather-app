import './current-weather.scss';
import format from 'date-fns/format';
import { updateForecastInfo } from '../forecast';

const createInput = (id, value) => {
  const element = document.createElement('div');
  element.id = id;
  element.innerHTML = value;

  return element;
};

const createDate = (time) => {
  const element = document.createElement('div');
  element.id = 'date';
  const dateConvert = format(new Date(time), 'PPPP');
  element.innerHTML = dateConvert;

  return element;
};

const createTime = (time) => {
  const element = document.createElement('div');
  element.id = 'time';
  const timeConvert = format(new Date(time), 'p');
  element.innerHTML = timeConvert;

  return element;
};

const createTempToggle = (data, forecast) => {
  const element = document.createElement('button');
  element.id = 'toggle-temp';
  element.innerHTML = data.temp.slice(-2);

  element.addEventListener('click', () => handleToggle(data, forecast));

  return element;
};

const locationInfo = (data, forecast) => {
  let element = document.getElementById('location-info');

  if (element !== null) {
    element.parentNode.removeChild(element);
  }
  element = document.createElement('div');
  element.id = 'location-info';

  element.appendChild(createInput('city', data.name));
  element.appendChild(createInput('region', data.region));
  element.appendChild(createInput('country', data.country));
  element.appendChild(createDate(data.time));
  element.appendChild(createTempToggle(data, forecast));
  element.appendChild(createTime(data.time));

  return element;
};

const createTemp = (temp) => {
  const element = document.createElement('div');
  element.id = 'temp';
  element.innerHTML = temp;

  return element;
};

const createCondition = (condition) => {
  const element = document.createElement('div');
  element.id = 'condition';

  const conditionText = document.createElement('div');
  conditionText.id = 'condition-text';
  conditionText.innerHTML = condition.text;
  element.appendChild(conditionText);

  const conditionIcon = new Image();
  conditionIcon.src = condition.icon;
  element.appendChild(conditionIcon);

  return element;
};

const weatherInfo = (temp, condition) => {
  let element = document.getElementById('weather-info');

  if (element !== null) {
    element.parentNode.removeChild(element);
  }
  element = document.createElement('div');
  element.id = 'weather-info';

  element.appendChild(createTemp(temp));
  element.appendChild(createCondition(condition));

  return element;
};

const updateWeatherInfo = (data, forecast) => {
  const container = document.getElementById('container');

  container.appendChild(locationInfo(data, forecast));
  container.appendChild(weatherInfo(data.temp, data.condition));
};

const handleToggle = (data, forecast) => {
  const tempData = data;
  const tempForecast = forecast;
  if (data.isTempC) {
    tempData.temp = false;
    tempForecast.forEach((day) => {
      const tempDay = day;
      tempDay.temp = false;
    });
  } else {
    tempData.temp = true;
    tempForecast.forEach((day) => {
      const tempDay = day;
      tempDay.temp = true;
    });
  }
  updateWeatherInfo(data, forecast);
  updateForecastInfo(forecast);
};

export {
  weatherInfo,
  updateWeatherInfo,
  locationInfo,
};
