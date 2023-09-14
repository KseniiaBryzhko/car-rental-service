import styled from 'styled-components';

export const HeartStyled = component => styled(component)`
  width: 18px;
  height: 18px;
`;

export const FavoriteBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  border: none;
  background: none;
  cursor: pointer;
`;

export const LearnMoreBtn = styled.button`
  width: 100%;
  padding: 12px 0;
  color: #ffffff;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  border-radius: 12px;
  background: #3470ff;
  border: none;
  cursor: pointer;
  outline: none;
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: #0b44cd;
  }
`;

export const CarCard = styled.li`
  width: 274px;
  height: 426px;
  display: flex;
  flex-direction: column;
`;

export const CarImageWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const CarImage = styled.img`
  display: block;
  width: 100%;
  width: 274px;
  height: 268px;
  border-radius: 14px;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  padding-top: 14px;
  margin-bottom: 28px;
`;

export const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
`;

export const SecondaryContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const MainText = styled.p`
  color: #121417;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 8px;
`;

export const MainTextModel = styled.span`
  color: #3470ff;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const SecondaryText = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 1.5;
  border-right: 1px solid rgba(18, 20, 23, 0.1);
  padding-right: 6px;
`;
