class CurrentWeather {
  constructor(data) {
    this.name = data.location.name;
    this.region = data.location.region;
    this.country = data.location.country;
    this.time = data.location.localtime;
    this.tempF = `${data.current.temp_f}°F`;
    this.tempC = `${data.current.temp_c}°C`;
    this.condition = data.current.condition;
    this.isTempC = false;
  }

  get temp() {
    if (this.isTempC) {
      return this.tempC;
    }
    return this.tempF;
  }

  set temp(value) {
    this.isTempC = value;
  }
}

export default CurrentWeather;
