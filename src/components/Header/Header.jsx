import Navigation from 'components/Navigation/Navigation';
import Container from 'components/Container/Container';
import { AppHeader } from './Header.styled';

const Header = () => {
  return (
    <AppHeader>
      <Container>
        <Navigation />
      </Container>
    </AppHeader>
  );
};

export default Header;
