import CarsItem from '../CarsItem/CarsItem';
import { CarsGallery } from './CarsList.styled';

const CarsList = ({ cars }) => {
  return (
    <CarsGallery>
      {cars.map(car => (
        <CarsItem key={cars.id} {...car} />
      ))}
    </CarsGallery>
  );
};

export default CarsList;
