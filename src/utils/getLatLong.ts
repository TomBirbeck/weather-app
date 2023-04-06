
const getGeo = async (city: string, API: string): Promise <{lon: number, lat: number}> => {
    const res = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API}`
    );
    const data = await res.json();
    console.log("Data", data);
    const geoData = { lon: data[0].lon, lat: data[0].lat };
    return geoData
  }

  export default getGeo

  