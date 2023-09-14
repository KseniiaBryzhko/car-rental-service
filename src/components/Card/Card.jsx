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
  DescriptionText,
  AccessoriesTitle,
  AccessoriesContent,
  RentalContent,
  RentalText,
  RentalInfo,
  RentalBtn,
} from './Card.styled';

const Card = ({
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
  const rentalConditionsParts = rentalConditions.split('\n', 3);

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
          </MainContent>
          <SecondaryContent>
            <SecondaryText>{addressParts[1]}</SecondaryText>
            <SecondaryText>{addressParts[2]}</SecondaryText>
            <SecondaryText>Id: {id}</SecondaryText>
            <SecondaryText>Year: {year}</SecondaryText>
            <SecondaryText>Type: {type}</SecondaryText>
            <SecondaryText>Fuel Consumption: {fuelConsumption}</SecondaryText>
            <SecondaryText>Engine Size: {engineSize}</SecondaryText>
          </SecondaryContent>
          <DescriptionText>{description}</DescriptionText>
          <AccessoriesTitle>Accessories and functionalities:</AccessoriesTitle>
          <AccessoriesContent>
            {accessories.map((accessory, index) => (
              <SecondaryText key={index}>{accessory}</SecondaryText>
            ))}
            {functionalities.map((functionality, index) => (
              <SecondaryText key={index}>{functionality}</SecondaryText>
            ))}
          </AccessoriesContent>
          <AccessoriesTitle>Rental Conditions:</AccessoriesTitle>
          <RentalContent>
            <RentalText>{rentalConditionsParts[0]}</RentalText>
            <RentalText>{rentalConditionsParts[1]}</RentalText>
            <RentalText>{rentalConditionsParts[2]}</RentalText>
            <RentalText>
              Mileage: <RentalInfo>{mileage}</RentalInfo>
            </RentalText>
            <RentalText>
              Price: <RentalInfo>{rentalPrice}</RentalInfo>
            </RentalText>
          </RentalContent>
          {/* <p>{isFavorite}</p>*/}
        </ContentWrapper>
        <RentalBtn href="tel:+380730000000">Rental car</RentalBtn>
      </CarCard>
    </>
  );
};

export default Card;
