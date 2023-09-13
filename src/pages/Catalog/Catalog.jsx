import CarsList from 'components/CarsList/CarsList';
import { useState, useEffect } from 'react';
import * as CarsService from 'service/cars-service';
import Container from 'components/Container/Container';
import { CatalogWrapper, LoadMoreBtn } from './Catalog.styled';

const Catalog = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [prevPage, setPrevPage] = useState(0);

  useEffect(() => {
    if (prevPage !== page) {
      getCars(page);
    }
    setPrevPage(page);
  }, [page, prevPage]);

  const getCars = async page => {
    setIsLoading(true);
    try {
      const cars = await CarsService.getCars(page);
      console.log(cars);

      setCars(prevCars => [...prevCars, ...cars]);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <Container>
      <CatalogWrapper>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <CarsList cars={cars} />
        )}
        <LoadMoreBtn onClick={loadMore}>Load More</LoadMoreBtn>
      </CatalogWrapper>
    </Container>
  );
};

export default Catalog;
