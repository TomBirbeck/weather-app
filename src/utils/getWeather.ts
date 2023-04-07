interface getWeaterIProps {
  geo: { lon: number; lat: number }, 
  API : string
}


const getWeather = async ({geo, API}: getWeaterIProps): Promise<any> => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${geo.lat}&lon=${geo.lon}&appid=${API}`
    );
    const data = await res.json();
    console.log({data})
    return data
  }

  export default getWeather