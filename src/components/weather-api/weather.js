const key = 'ef1e16cd5e194abcb13211412231606';

const getWeatherData = async (location) => {
  const url = 'http://api.weatherapi.com/v1/forecast.json?';

  const response = await fetch(`${url}key=${key}&q=${location}&days=7`);
  const weatherData = await response.json();

  return weatherData;
};

export default getWeatherData;
