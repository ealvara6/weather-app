const url = 'http://api.weatherapi.com/v1/current.json?';
const key = 'ef1e16cd5e194abcb13211412231606';
const location = 'Houston'

const weather = async () => {
  const weatherData = await fetch(`${url}key=${key}&q=${location}`);

  return weatherData;
};

export default weather;