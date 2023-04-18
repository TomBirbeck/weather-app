import { useEffect, useState } from "react"
import setBackgroundImage from "../../utils/backGroundImage"
import { weatherDisplayIprops } from "../../types"

const WeatherDisplay = ({id, temp, feelsLike, humidity, weather, description, windSpeed, searched}: weatherDisplayIprops) => {
    const [icon, setIcon] = useState('snowy')

    useEffect(() => {
        setIcon(setBackgroundImage(id, temp))
    }, [id])

    return (
            <div className="border-solid border rounded-lg bg-none backdrop-blur-sm w-11/12 w-full md:w-1/2 h-3/5 md:h-2/5 p-2">
            {searched ?
                <div className="flex flex-col md:flex-row h-full">
                    <div className="flex flex-col justify-around h-3/5 md:h-full md:w-3/5">
                        <p className="text-xl">Weather: <span className="font-bold pr-0.5">{weather}</span></p>
                        <p className="text-xl">Description: <span className="font-bold pr-0.5">{description}</span></p>
                        <p className="text-xl">Temp: <span className="font-bold pr-0.5">{Number(temp - 273.15).toFixed(1)}</span>&#8451;</p>
                        <p className="text-xl">Humidity: <span className="font-bold pr-0.5">{humidity}</span>%</p>
                        <p className="text-xl">Feels like: <span className="font-bold pr-0.5">{Number(feelsLike - 273.15).toFixed(1)}</span>&#8451;</p>
                        <p className="text-xl">Wind speed: <span className="font-bold pr-0.5">{windSpeed}</span>mph</p>
                    </div>
                    <div className="h-10/12 w-10/12 flex justify-center items-center">
                    <img src={`./${icon}.png`} className="h-1/2 md:h-5/6 rounded-lg"/>
                    </div>
                </div> :
                <div className="h-full flex items-center justify-center p-2">
                    <p className="text-3xl text-green-100">Please enter the name of the City that you wish to search for</p>
                </div>}
        </div>
    )
}

export default WeatherDisplay