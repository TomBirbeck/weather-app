import { ChangeEvent, FormEvent } from "react";

type CityInputProps = {
    handleCity: (e: ChangeEvent<HTMLInputElement>) => void;
    handleWeather: (e: FormEvent<HTMLFormElement>) => void;
  };

const CityInput = ({handleCity, handleWeather}: CityInputProps) =>{
    
    return(
        <form
        onSubmit={handleWeather}
        className="flex justify-around w-full md:w-1/3"
        >
            <input className="border-solid border-black border-2 rounded-md p-1" type='text' onChange={handleCity} placeholder="Enter City"></input>
            <button type="submit" className="border-solid border-black border-2 rounded-md p-1 bg-green-100">Search</button>
        </form>
    )
}

export default CityInput