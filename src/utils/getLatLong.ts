
const getGeo = async (city: string): Promise <{lon: number, lat: number}> => {
    const res = await fetch(
      // `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API}`
      `https://geocode.maps.co/search?city=${city}`
    );
    const data = await res.json();
    const geoData = { lon: data[0].lon, lat: data[0].lat };
    return geoData
  }

  export default getGeo

  