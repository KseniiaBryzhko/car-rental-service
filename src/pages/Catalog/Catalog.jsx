import CarsList from 'components/CarsList/CarsList';
import { useState, useEffect } from 'react';
import * as CarsService from 'service/cars-service';

const Catalog = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCars();
  }, []);

  const getCars = async () => {
    setIsLoading(true);
    try {
      const cars = await CarsService.getCars();
      console.log(cars.data);

      setCars([...cars.data]);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <CarsList cars={cars} />
      )}
    </div>
  );
};

export default Catalog;
