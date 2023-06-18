import handleError from '../error';
import { updateWeatherInfo } from '../weather-info';

class Weather {
  constructor(name, region, country, time) {
    this.name = name;
    this.region = region;
    this.country = country;
    this.time = time;
  }
}

const createWeatherObj = (data) => {
  const weatherData = new Weather(
    data.location.name,
    data.location.region,
    data.location.country,
    data.location.localtime,
  );

  return weatherData;
};

const getWeatherData = async (location) => {
  const url = 'http://api.weatherapi.com/v1/current.json?';
  const key = 'ef1e16cd5e194abcb13211412231606';

  const response = await fetch(`${url}key=${key}&q=${location}`);
  const weatherData = await response.json();

  return weatherData;
};

const handleSubmit = (input) => {
  getWeatherData(input).then((data) => {
    if (data.error) {
      handleError(data.error);
    } else {
      const weatherObj = createWeatherObj(data);
      updateWeatherInfo(weatherObj);
    }
  });
};

export {
  getWeatherData,
  createWeatherObj,
  handleSubmit,
};
