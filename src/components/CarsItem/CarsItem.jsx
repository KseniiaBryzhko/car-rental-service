const CarsItem = ({
  model,
  make,
  year,
  rentalPrice,
  isFavorite,
  address,
  rentalCompany,
  functionalities,
  id,
  type,
  img,
  fuelConsumption,
  engineSize,
  description,
  accessories,
  rentalConditions,
  mileage,
}) => {
  return (
    <>
      <li key={id}>
        <p>{model}</p>
        <p>{make}</p>
        <p>{year}</p>
        <p>{rentalPrice}</p>
        <p>{isFavorite}</p>
        <p>{address}</p>
        <p>{rentalCompany}</p>
        <p>{functionalities}</p>
        <p>{id}</p>
        <p>{type}</p>
        <p>{fuelConsumption}</p>
        <p>{engineSize}</p>
        <p>{description}</p>
        <p>{accessories}</p>
        <p>{rentalConditions}</p>
        <p>{mileage}</p>
        <img src={img} alt="car" />
      </li>
    </>
  );
};

export default CarsItem;

// import PropTypes from 'prop-types';

// export const CarsItem = ({ cars }) => {
//   return (
//     <ul>
//       {cars.map(car => (
//         <li
//           key={car.id}
//           model={car.model}
//           make={car.make}
//           year={car.year}
//           rentalPrice={car.rentalPrice}
//           isFavorite={car.isFavorite}
//           address={car.address}
//           rentalCompany={car.rentalCompany}
//           functionalities={car.functionalities}
//           id={car.id}
//           type={car.type}
//           img={car?.img}
//           fuelConsumption={car.fuelConsumption}
//           engineSize={car.engineSize}
//           description={car.description}
//           accessories={car.accessories}
//           rentalConditions={car.rentalConditions}
//           mileage={car.mileage}
//         ></li>
//       ))}
//     </ul>
//   );
// };

// ContactItem.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
// };

// export default CarsItem;
