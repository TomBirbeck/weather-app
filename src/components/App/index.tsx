import { ChangeEvent, FormEvent, useState } from 'react'
import CityInput from '../CityInput'
import WeatherDisplay from '../WeatherDisplay';
import getGeo from '../../utils/getLatLong';
import getWeather from '../../utils/getWeather';
import Header from '../Header';

const API: string = (import.meta.env.VITE_API as string)

function App() {
  const [city, setCity] = useState<string>("");
  const [weatherId, setWeatherId] = useState(0)
  const [weather, setWeather] = useState({
    temp: 0,
    feelsLike: 0,
    humidity: 0,
    weather: '',
    description: '',
    windSpeed: 0,
})

const handleWeather = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()
    const coords = await getGeo(city, API)
    const data = await getWeather({geo: {...coords}, API })
    setWeather({
        ...weather,
        temp: data.main.temp,
        feelsLike: data.main.feels_like,
        humidity: data.main.humidity,
        weather: data.weather[0].main,
        description: data.weather[0].description,
        windSpeed: data.wind.speed 
    })
    setWeatherId(data.id)
}      

  function handleCity(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    setCity(e.target.value);
  }


  return (
    <div className="flex flex-col gap-1 items-center md:justify-center bg-fog h-screen">
      <Header/>
      <CityInput handleCity={handleCity} handleWeather={handleWeather}/>
      <WeatherDisplay
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
