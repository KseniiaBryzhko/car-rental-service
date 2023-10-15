import CarsList from 'components/CarsList/CarsList';
import { useState, useEffect } from 'react';
import * as CarsService from 'service/cars-service';
import Container from 'components/Container/Container';
import Filters from 'components/Filters/Filters';
import { CatalogWrapper, LoadMoreBtn } from './Catalog.styled';

const Catalog = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  // const [total, setTotal] = useState(0);
  // const LIMIT = 8;

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        // const totalCars = await CarsService.getTotalCarCount();
        // setTotal(totalCars);
        const cars = await CarsService.getCars(page);
        if (page === 1) {
          setCars(cars);
        } else {
          setCars(prevState => [...prevState, ...cars]);
        }
        console.log(cars);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  // let remains = Math.round(total / page);
  // console.log(remains);

  return (
    <Container>
      <Filters />
      <CatalogWrapper>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <CarsList cars={cars} />
        )}
        {/* {remains > LIMIT ? (
          <LoadMoreBtn onClick={loadMore}>Load More</LoadMoreBtn>
        ) : (
          <p>Sorry, but that's all the cars we have for you at the moment.</p>
        )} */}
        <LoadMoreBtn onClick={loadMore}>Load More</LoadMoreBtn>
      </CatalogWrapper>
    </Container>
  );
};

export default Catalog;
