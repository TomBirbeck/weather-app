import { useState } from 'react'
import CityInput from '../CityInput'
import WeatherDisplay from '../WeatherDisplay';

function App() {
  const [city, setCity] = useState<string>("");

  function handleCity(e: { target: { value: string } }) {
    setCity(e.target.value);
  }


  return (
    <div className="App">
      <CityInput handleChange={handleCity}/>
      <WeatherDisplay/>
    </div>
  )
}

export default App
