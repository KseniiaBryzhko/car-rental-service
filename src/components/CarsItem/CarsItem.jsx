import {
  CarCard,
  CarImageWrapper,
  CarImage,
  ContentWrapper,
  MainContent,
  SecondaryContent,
  MainText,
  MainTextModel,
  SecondaryText,
} from './CarsItem.styled';

import Button from 'components/Button/Button';

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
  const addressParts = address.split(', ');

  return (
    <>
      <CarCard key={id}>
        <CarImageWrapper>
          <CarImage src={img} alt="car" />
        </CarImageWrapper>
        <ContentWrapper>
          <MainContent>
            <MainText>
              {make}
              <MainTextModel> {model}, </MainTextModel>
              {year}
            </MainText>
            <MainText>{rentalPrice}</MainText>
          </MainContent>
          <SecondaryContent>
            <SecondaryText>{addressParts[1]}</SecondaryText>
            <SecondaryText>{addressParts[2]}</SecondaryText>
            <SecondaryText>{rentalCompany}</SecondaryText>
            <SecondaryText>{type}</SecondaryText>
            <SecondaryText>{make}</SecondaryText>
            <SecondaryText>{id}</SecondaryText>
            <SecondaryText>{accessories[0]}</SecondaryText>
          </SecondaryContent>
          {/* <p>{isFavorite}</p>
          <p>{fuelConsumption}</p>
          <p>{engineSize}</p>
          <p>{description}</p>
          <p>{functionalities}</p>
          <p>{rentalConditions}</p>
          <p>{mileage}</p> */}
        </ContentWrapper>
        <Button>Learn more</Button>
      </CarCard>
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
