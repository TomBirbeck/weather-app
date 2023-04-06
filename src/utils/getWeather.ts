interface getWeaterIProps {
  geo: { lon: number; lat: number }, 
  API : string
}


const getWeather = async ({geo, API}: getWeaterIProps): Promise<{id: number, name: string, temp: number, description: string}> => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${geo.lat}&lon=${geo.lon}&appid=${API}`
    );
    const data = await res.json();
    console.log("weather", data);
    const weatherData = {
      id: data.weather[0].id,
      name: data.name,
      temp: data.main.temp,
      description: data.weather[0].description,
    };
    return weatherData
  }

  export default getWeather