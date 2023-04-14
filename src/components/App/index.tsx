import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import CityInput from '../CityInput'
import WeatherDisplay from '../WeatherDisplay';
import getGeo from '../../utils/getLatLong';
import getWeather from '../../utils/getWeather';
import Header from '../Header';
import setBackgroundImage from '../../utils/backGroundImage';

const API: string = (import.meta.env.VITE_API as string)

function App() {
  const [city, setCity] = useState<string>("");
  const [background, setBackground] = useState("cloudy");
  const [weather, setWeather] = useState({
    id: 0,
    temp: 0,
    feelsLike: 0,
    humidity: 0,
    weather: '',
    description: '',
    windSpeed: 0,
});

const handleWeather = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()
    const coords = await getGeo(city, API)
    const data = await getWeather({geo: {...coords}, API })
    setWeather({
        ...weather,
        id: data.weather[0].id,
        temp: data.main.temp,
        feelsLike: data.main.feels_like,
        humidity: data.main.humidity,
        weather: data.weather[0].main,
        description: data.weather[0].description,
        windSpeed: data.wind.speed 
    })
    setBackground(setBackgroundImage(data.weather[0].id, data.main.temp))
}      

  function handleCity(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    setCity(e.target.value);
  }

  return (
  <div className="flex flex-col gap-1 items-center md:justify-center h-screen"
  style={{backgroundImage: (`url('/${background}.jpg')`),
  backgroundSize: 'cover'
}}
  >
      <Header/>
      <CityInput handleCity={handleCity} handleWeather={handleWeather}/>
      <WeatherDisplay
      id = {weather.id}
      temp = {weather.temp}
      feelsLike = {weather.feelsLike}
      humidity = {weather.humidity}
      weather = {weather.weather}
      description = {weather.description}
      windSpeed = {weather.windSpeed}
      />
    </div>
  )
}

export default App
