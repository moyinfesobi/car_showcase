export async function fetchCars() {
  const headers = {
    "x-rapidapi-key": "edbec2be94mshc1e5cb8d33af05bp16a820jsncae80e8d1352",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  } 

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}


export const calculateCarRent = (city_mpg: number, year: number) => {
   const basePricePerDay = 50; // Base rental price per day in dollars

   const mileageFactor = 0.1; // Additional rate per mile driven

   const ageFactor = 0.05;  // Additional rate per year of vehicle age

   // Calculate additional rate based on mileage and age
   const mileageRate = city_mpg * mileageFactor;
   const ageRate = (new Date().getFullYear() - year)  *  ageFactor;

   // Calculate total rental rate per day

   const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

   return rentalRatePerDay.toFixed(0);
 };
