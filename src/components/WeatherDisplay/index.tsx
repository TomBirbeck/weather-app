import { useEffect, useState } from "react";
import getGeo from "../../utils/getLatLong";

interface WeatherDisplayIProps {
    city: string,
}

const WeatherDisplay = ({city}: WeatherDisplayIProps) => {

    const [geo, SetGeo] = useState<{ lon: number; lat: number }>({
        lon: 0,
        lat: 0,
      });
      const API: string = (import.meta.env.VITE_APP as string)

    const handleGeo = async () => {
        SetGeo(await getGeo(city, API))
    }      
    useEffect(() => {
       handleGeo
    },[city])
    
    console.log(geo)

    return (
        <div>
            <h1>
                display
            </h1>
        </div>
    )
}

export default WeatherDisplay