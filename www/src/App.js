import React from 'react';
import Loading from './components/Loading';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import WeatherApi from './api/WeatherApi';


class App extends React.Component {
  constructor() {
    super();
    this.weatherApi = new WeatherApi();
  }

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    this.setState({ loading: true });
    this.weatherApi.getWeatherData(city, country).then((weatherData) => {
      this.setState(weatherData);
      this.setState({ loading: false });

    });
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  {this.state.loading ? <Loading /> : <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                  />}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;