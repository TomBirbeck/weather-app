type CityInputProps = {
    handleCity: (e: { target: { value: string } }) => void;
    handleWeather: () => Promise<void>;
  };

const CityInput = ({handleCity, handleWeather}: CityInputProps) =>{
    
    return(
        <div>
            <input type='text' onChange={handleCity} placeholder="Enter City"></input>
            <button className="border-solid border-black border-2 rounded-md p-1" onClick={handleWeather}>Search</button>
        </div>
    )
}

export default CityInput