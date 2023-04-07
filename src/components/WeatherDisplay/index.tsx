type weatherDisplayIprops = {
    temp: number,
    feelsLike: number,
    weather: string,
    description: string,
    windSpeed: number
}

const WeatherDisplay = ({temp, feelsLike, weather, description, windSpeed}: weatherDisplayIprops) => {

    return (
        <div className="flex flex-col md:flex-row border-solid border-black border-2 rounded-lg bg-none backdrop-blur-lg w-full md:w-1/2 h-3/5 md:h-2/5 p-2">
            <div className="flex flex-col justify-around h-3/5 md:h-full md:w-3/5 bg-teal-200">
            <p className="text-xl">Weather: <span className="font-bold pr-0.5">{weather}</span></p>
            <p className="text-xl">Description: <span className="font-bold pr-0.5">{description}</span></p>
            <p className="text-xl">Temp: <span className="font-bold pr-0.5">{Number(temp - 273.15).toFixed(1)}</span>&#8451;</p>
            <p className="text-xl">Feels like: <span className="font-bold pr-0.5">{Number(feelsLike - 273.15).toFixed(1)}</span>&#8451;</p>
            <p className="text-xl">Wind speed: <span className="font-bold pr-0.5">{windSpeed}</span>mph</p>
            </div>
            <div>
                <h3>image</h3>
                <img></img>
            </div>
        </div>
    )
}

export default WeatherDisplay