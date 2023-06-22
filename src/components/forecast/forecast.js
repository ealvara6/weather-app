class Forecast {
  constructor(data) {
    this.date = data.date;
    this.condition = data.day.condition;
    this.avgTempF = `${data.day.avgtemp_f}°F`;
    this.avgTempC = `${data.day.avgtemp_c}°C`;
    this.isTempC = false;
  }

  get temp() {
    if (this.isTempC) {
      return this.avgTempC;
    }
    return this.avgTempF;
  }

  set temp(value) {
    this.isTempC = value;
  }
}

const forecastArray = (data) => {
  data.splice(0, 2);
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
