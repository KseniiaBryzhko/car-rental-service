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
  HeartStyled,
  FavoriteBtn,
} from './CarsItem.styled';
import { Modal } from '../Modal/Modal';
import Card from '../Card/Card';
import { useState, useEffect } from 'react';
import { ReactComponent as WhiteHeart } from '../../images/whiteheart.svg';
import { ReactComponent as BlueHeart } from '../../images/blueheart.svg';
const WhiteHeartIcon = HeartStyled(WhiteHeart);
const BlueHeartIcon = HeartStyled(BlueHeart);

const CarsItem = ({
  model,
  make,
  year,
  rentalPrice,
  // isFavorite,
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

  const [isFavorite, setIsFavorite] = useState(false);
  const [favorites, setFavorites] = useState([]);

  // useEffect(() => {
  //   console.log(favorites);
  // }, [favorites]);

  const addToFavorites = () => {
    setIsFavorite(true);
    setFavorites(prevFavorites => [
      ...prevFavorites,
      {
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
      },
    ]);
  };

  const removeFromFavorites = () => {
    setIsFavorite(false);
    setFavorites(favorites.filter(fav => fav.id !== id));
  };

  const addressParts = address.split(', ');

  return (
    <>
      <CarCard key={id}>
        <CarImageWrapper>
          <FavoriteBtn
            onClick={!isFavorite ? addToFavorites : removeFromFavorites}
          >
            {!isFavorite ? <WhiteHeartIcon /> : <BlueHeartIcon />}
          </FavoriteBtn>
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
