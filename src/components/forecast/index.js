import format from 'date-fns/format';

const createTemp = (temp) => {
  const element = document.createElement('div');
  element.classList.add('forecast-temp');
  element.innerHTML = `${temp}`;

  return element;
};

const createDate = (date) => {
  const element = document.createElement('div');
  element.classList.add('date');

  const dateFormat = format(new Date(date), 'EE');

  element.innerHTML = dateFormat;

  return element;
};

const createCondition = (condition) => {
  const element = document.createElement('div');
  element.classList.add('condition');

  const icon = new Image();
  icon.src = condition.icon;
  element.appendChild(icon);

  const text = document.createElement('div');
  text.innerHTML = condition.text;
  element.appendChild(text);

  return element;
};

const createDayInfo = (day) => {
  const element = document.createElement('div');
  element.classList.add('day');

  element.appendChild(createDate(day.date));
  element.appendChild(createTemp(day.temp));
  element.appendChild(createCondition(day.condition));

  return element;
};

const forecastInfo = (forecast) => {
  let element = document.getElementById('forecast');

  if (element !== null) {
    element.parentNode.removeChild(element);
  }
  element = document.createElement('div');
  element.id = 'forecast';

  forecast.forEach((day) => {
    element.appendChild(createDayInfo(day));
  });

  return element;
};

const updateForecastInfo = (forecast) => {
  const element = document.getElementById('container');

  element.appendChild(forecastInfo(forecast));
};

export {
  forecastInfo,
  updateForecastInfo,
};
