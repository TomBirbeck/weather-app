type CityInputProps = {
    handleCity: (e: { target: { value: string } }) => void;
    handleWeather: () => Promise<void>;
  };

const CityInput = ({handleCity, handleWeather}: CityInputProps) =>{
    
    return(
        <div className="flex justify-around w-full md:w-1/3">
            <input className="border-solid border-black border-2 rounded-md p-1" type='text' onChange={handleCity} placeholder="Enter City"></input>
            <button className="border-solid border-black border-2 rounded-md p-1 bg-green-100" onClick={handleWeather}>Search</button>
        </div>
    )
}

export default CityInput