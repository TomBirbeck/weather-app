import { ChangeEvent, FormEvent } from "react";

export type getWeatherProps = {
    geo: { lon: number; lat: number }, 
    API : string
  }

export type CityInputProps = {
    handleCity: (e: ChangeEvent<HTMLInputElement>) => void;
    handleWeather: (e: FormEvent<HTMLFormElement>) => void;
  };