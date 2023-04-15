import {getWeatherProps} from '../types'

const getWeather = async ({geo, API}: getWeatherProps): Promise<any> => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${geo.lat}&lon=${geo.lon}&appid=${API}`
    );
    const data = await res.json();
    return data
  }

  export default getWeather