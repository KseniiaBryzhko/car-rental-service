import {
  AppNavigation,
  StyledLink,
  HomeIcon,
  CarIcon,
  FavIcon,
} from './Navigation.styled';

const Navigation = () => {
  return (
    <AppNavigation>
      <StyledLink to="/" end>
        <HomeIcon />
        Home
      </StyledLink>
      <StyledLink to="/catalog">
        <CarIcon />
        Catalog
      </StyledLink>
      <StyledLink to="/favorites">
        <FavIcon />
        Favorites
      </StyledLink>
    </AppNavigation>
  );
};

export default Navigation;
