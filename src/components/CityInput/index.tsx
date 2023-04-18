import { CityInputProps } from "../../types"

const CityInput = ({handleCity, handleWeather}: CityInputProps) =>{
    
    return(
        <form
        onSubmit={handleWeather}
        className="flex justify-around w-full md:w-1/3 m-4"
        >
            <input className="border-solid border-black border rounded-md p-1 focus:bg-green-100" type='text' onChange={handleCity} placeholder="Enter City"></input>
            <button type="submit" className="border-solid border border-black rounded-md py-1 px-3 bg-green-100 hover:bg-green-300 hover:border-white">Search</button>
        </form>
    )
}

export default CityInput