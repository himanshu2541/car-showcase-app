import axios from 'axios';
import {FiltersProps} from "@/types";

export const fetchCars = async (filters :FiltersProps) => {

  const {manufacturer, year, model, fuel, limit} = filters;

  const options = {
    method: 'GET',
    url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
    params: {model: model, fuel_type: fuel, make: manufacturer, year: year, limit: limit},
    headers: {
      'X-RapidAPI-Key': process.env.CAR_API_BY_NINJA_KEY,
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
  };
  try{
    const response = await axios.request(options);
    // console.log(response.data);
    return response.data;
  } catch(e){
    console.log(e);
    return null
  }
}

export const calculateRentalPrice = (city_mpg: number, year:number) => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;

  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
}

export const updateSearchParams = (type: string, value: string) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(window.location.search);

  // Set the specified search parameter to the given value
  searchParams.set(type, value);

  // Set the specified search parameter to the given value
  return `${window.location.pathname}?${searchParams.toString()}`;
};
