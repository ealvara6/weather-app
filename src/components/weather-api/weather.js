import handleError from '../error';
import { updateWeatherInfo } from '../weather-info';

class Weather {
  constructor(name, region, country, time, tempF, tempC, condition) {
    this.name = name;
    this.region = region;
    this.country = country;
    this.time = time;
    this.tempF = tempF;
    this.tempC = tempC;
    this.condition = condition;
  }
}

const createWeatherObj = (data) => {
  const weatherData = new Weather(
    data.location.name,
    data.location.region,
    data.location.country,
    data.location.localtime,
    data.current.temp_f,
    data.current.temp_c,
    data.current.condition,
  );

  return weatherData;
};

const getWeatherData = async (location) => {
  const url = 'http://api.weatherapi.com/v1/current.json?';
  const key = 'ef1e16cd5e194abcb13211412231606';

  const response = await fetch(`${url}key=${key}&q=${location}`);
  const weatherData = await response.json();

  console.log(weatherData);

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
