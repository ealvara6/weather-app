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

const weatherInfo = (data) => {
  const element = document.createElement('div');
  element.id = 'weather-info';
  element.innerHTML = data.name;

  return element;
};

const updateWeatherInfo = (data) => {
  const container = document.getElementById('container');
  const leftSide = document.getElementById('left-side');

  leftSide.appendChild(locationInfo(data.name, data.region, data.country, data.time));
};

export {
  weatherInfo,
  updateWeatherInfo,
  locationInfo,
};
