import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { FaCar } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';

export const AppNavigation = styled.nav`
  display: flex;
  gap: 18px;
`;

export const StyledLink = styled(NavLink)`
  background-color: #3470ff;
  color: white;
  padding: 12px 50px;
  border-radius: 12px;
  display: flex;
  gap: 6px;

  &:hover {
    background-color: #0b44cd;
  }

  &:focus {
    background-color: #0b44cd;
  }

  &.active {
    background-color: #0b44cd;
  }
`;

export const HomeIcon = styled(AiOutlineHome)`
  fill: #ffffff;
`;

export const CarIcon = styled(FaCar)`
  fill: #ffffff;
`;

export const FavIcon = styled(AiOutlineHeart)`
  fill: #ffffff;
`;
