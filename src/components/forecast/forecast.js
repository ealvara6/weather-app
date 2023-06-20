class Forecast {
  constructor(data) {
    this.date = data.date;
    this.condition = data.day.condition;
    this.avgTempF = data.day.avgtemp_f;
    this.avgTempC = data.day.avgtemp_c;
  }
}

const forecastArray = (data) => {
  const forecast = [];
  data.forEach((day) => {
    forecast.push(new Forecast(day));
  });

  return forecast;
};

export {
  Forecast,
  forecastArray,
};
