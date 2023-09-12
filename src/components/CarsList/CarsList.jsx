import CarsItem from '../CarsItem/CarsItem';

const CarsList = ({ cars }) => {
  return (
    <ul>
      {cars.map(car => (
        <CarsItem key={cars.id} {...car} />
      ))}
    </ul>
  );
};

export default CarsList;
