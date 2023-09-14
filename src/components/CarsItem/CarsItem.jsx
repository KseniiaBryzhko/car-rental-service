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
} from './CarsItem.styled';
import { Modal } from '../Modal/Modal';
import Card from '../Card/Card';
import { useState } from 'react';

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
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

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
        <LearnMoreBtn onClick={toggleModal}>Learn more</LearnMoreBtn>
      </CarCard>
      {showModal && (
        <Modal onClose={toggleModal}>
          <Card
            model={model}
            make={make}
            year={year}
            rentalPrice={rentalPrice}
            isFavorite={isFavorite}
            address={address}
            rentalCompany={rentalCompany}
            functionalities={functionalities}
            id={id}
            type={type}
            img={img}
            fuelConsumption={fuelConsumption}
            engineSize={engineSize}
            description={description}
            accessories={accessories}
            rentalConditions={rentalConditions}
            mileage={mileage}
          />
        </Modal>
      )}
    </>
  );
};

export default CarsItem;