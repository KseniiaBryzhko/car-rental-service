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
  LearnMoreBtn,
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
            <SecondaryText>{rentalCompany}</SecondaryText>
            <SecondaryText>{type}</SecondaryText>
            <SecondaryText>{make}</SecondaryText>
            <SecondaryText>{id}</SecondaryText>
            <SecondaryText>{accessories[0]}</SecondaryText>
            <MainText>{rentalPrice}</MainText>
          </SecondaryContent>
          {/* <p>{isFavorite}</p>
          <p>{fuelConsumption}</p>
          <p>{engineSize}</p>
          <p>{description}</p>
          <p>{functionalities}</p>
          <p>{rentalConditions}</p>
          <p>{mileage}</p> */}
        </ContentWrapper>
        {/* <button onClick={toggleModal}>Learn more</button> */}
        <LearnMoreBtn>Learn more</LearnMoreBtn>
      </CarCard>
    </>
  );
};

export default Card;
