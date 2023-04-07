interface weatherDisplayIprops {
    temp: number,
    feelsLike: number,
    weather: string,
    description: string,
    windSpeed: number
}

const WeatherDisplay = ({temp, feelsLike, weather, description, windSpeed}: weatherDisplayIprops) => {
    
    return (
        <div className="flex flex-col border-solid border-black border-2 rounded-lg w-11/12 md:w-1/2">
            <p className="text-lg font-bold">Weather: {weather}</p>
            <p className="text-lg font-bold">Description: {description}</p>
            <p className="text-lg font-bold">Temp: {temp}</p>
            <p className="text-lg font-bold">Feels like: {feelsLike}</p>
            <p className="text-lg font-bold">Wind speed: {windSpeed}</p>
        </div>
    )
}

export default WeatherDisplay