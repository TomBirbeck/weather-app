
type CityInputProps = {
    handleChange: (e: { target: { value: string } }) => void;
  };

const CityInput = ({handleChange}: CityInputProps) =>{
    return(
        <input type='text' onChange={handleChange} placeholder="Enter City"></input>
    )
}

export default CityInput