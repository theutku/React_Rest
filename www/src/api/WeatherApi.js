import DataSetter from './DataSetter';
import ApiBase from './ApiBase';

// const ApiKey = 'YOURAPIKEYGOESHERE';

class WeatherApi extends DataSetter {

    getWeatherData(city, country) {

        if (city && country) {

            //Without local API
            // const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${ApiKey}`);
            // const data = await apiCall.json();

            return ApiBase.postData('weather/getweather', { city: city, country: country }).then((data) => {
                return this.setResult(data);
            }).catch((err) => {
                return this.setResult(err);
            });

        } else {
            return this.setEmptyQuery();
        }
    }
}

export default WeatherApi;