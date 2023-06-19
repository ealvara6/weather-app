import './weather-info.scss';
// import toDate from 'date-fns/toDate';
import format from 'date-fns/format';

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

const locationInfo = (name, region, country, time) => {
  let element = document.getElementById('location-info');

  if (element !== null) {
    element.parentNode.removeChild(element);
  }
  element = document.createElement('div');
  element.id = 'location-info';

  element.appendChild(createInput('city', name));
  element.appendChild(createInput('region', region));
  element.appendChild(createInput('country', country));
  element.appendChild(createDate(time));
  element.appendChild(createTime(time));

  return element;
};

const createTemp = (temp) => {
  const element = document.createElement('div');
  element.id = 'temp';
  element.innerHTML = `${temp}&#176;F`;

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

const weatherInfo = (tempF, tempC, condition) => {
  let element = document.getElementById('weather-info');

  if (element !== null) {
    element.parentNode.removeChild(element);
  }
  element = document.createElement('div');
  element.id = 'weather-info';

  element.appendChild(createTemp(tempF));
  element.appendChild(createCondition(condition));

  return element;
};

const updateWeatherInfo = (data) => {
  const container = document.getElementById('container');

  container.appendChild(locationInfo(data.name, data.region, data.country, data.time));
  container.appendChild(weatherInfo(data.tempF, data.tempC, data.condition));
};

export {
  weatherInfo,
  updateWeatherInfo,
  locationInfo,
};
