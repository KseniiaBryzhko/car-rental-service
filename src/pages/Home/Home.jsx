import {
  HomeWrapper,
  CarImage,
  ContentWrapper,
  Title,
  SubTitle,
  Text,
} from './Home.styled';
import Container from 'components/Container/Container';

import car from 'images/car.png';

const Home = () => {
  return (
    <Container>
      <HomeWrapper>
        <CarImage src={car} alt="blue car" />
        <ContentWrapper>
          <SubTitle>Discover the freedom of the open road at</SubTitle>
          <Title>Car Rental Service!</Title>
          <Text>We're dedicated to making your journey extraordinary.</Text>
          <Text>
            Whether you're embarking on a business trip, family vacation, or
            just need a reliable ride, we've got you covered.
          </Text>
          <SubTitle>Why us?</SubTitle>
          <ul>
            <li>Wide Selection</li>
            <li>Affordable Rates</li>
            <li>Convenience</li>
            <li>Safety First</li>
            <li>Support</li>
            <li>24/7 Flexibility</li>
            <li>Explore with Confidence</li>
          </ul>
          <p>Welcome to Car Rental Service – Where Every Mile is a Memory!</p>
        </ContentWrapper>
      </HomeWrapper>
    </Container>
  );
};

export default Home;
