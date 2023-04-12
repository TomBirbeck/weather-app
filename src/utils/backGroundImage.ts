const setBackgroundImage = (id: number, temp: number) => {
    if (id >= 500 && id <= 531){
        return 'rainy'
    }
    else if (id >= 200 && id <= 232){
      return 'thunder'
    }
    else if (id >= 600 && id <= 622){
      return 'snowy'
    }
    else if (id === 701){
      return 'fog'
    }
    else if (id === 800){
      if(Number((temp - 273.15).toFixed()) < 20){
        return 'clear'
      } else {
        return 'sunny'
      }
    }
    else if (id >= 801 && id <= 804){
      return 'cloudy'
    }

    return 'clear'
}

export default setBackgroundImage