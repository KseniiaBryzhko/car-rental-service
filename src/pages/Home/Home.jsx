import {
  HomeWrapper,
  CarImage,
  LeftContentWrapper,
  RightContentWrapper,
  Title,
  SubTitle,
  Text,
  List,
  ListItem,
} from './Home.styled';
import Container from 'components/Container/Container';

import car from 'images/car.png';
import car2 from 'images/car2.png';

const Home = () => {
  return (
    <Container>
      <HomeWrapper>
        <LeftContentWrapper>
          <CarImage src={car} alt="blue car" />
          <SubTitle>Why us?</SubTitle>
          <List>
            <ListItem>Wide Selection</ListItem>
            <ListItem>Affordable Rates</ListItem>
            <ListItem>Convenience</ListItem>
            <ListItem>Safety First</ListItem>
            <ListItem>Support</ListItem>
            <ListItem>24/7 Flexibility</ListItem>
            <ListItem>Explore with Confidence</ListItem>
          </List>
          <SubTitle>Welcome to Car Rental Service –</SubTitle>
          <SubTitle>where every mile is a memory!</SubTitle>
        </LeftContentWrapper>

        <RightContentWrapper>
          <SubTitle>Discover the freedom of the open road at</SubTitle>
          <Title>Car Rental Service!</Title>
          <Text>We're dedicated to making your journey extraordinary.</Text>
          <Text>
            Whether you're embarking on a business trip, family vacation, or
            just need a reliable ride, we've got you covered.
          </Text>

          <CarImage src={car2} alt="light blue car" />
        </RightContentWrapper>
      </HomeWrapper>
    </Container>
  );
};

export default Home;
