import { useState } from "react";
import getGeo from "../../utils/getLatLong";
import getWeather from "../../utils/getWeather";
const API: string = (import.meta.env.VITE_API as string)

interface WeatherDisplayIProps {
    city: string,
}

const WeatherDisplay = ({city}: WeatherDisplayIProps) => {

    const [geo, SetGeo] = useState<{ lon: number; lat: number }>({
        lon: 0,
        lat: 0,
      });

    const handleGeo = async () => {
        SetGeo(await getGeo(city, API))
        const coords = await getGeo(city, API)
        const weather = await getWeather({geo: {...coords}, API })
        console.log(weather)
    }      

    return (
        <div>
            <h1>
                display
            </h1>
            <button onClick={handleGeo}>Search</button>
        </div>
    )
}

export default WeatherDisplay