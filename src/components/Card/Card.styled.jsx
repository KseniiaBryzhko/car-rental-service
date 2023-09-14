import styled from 'styled-components';

export const CarCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
`;

export const CarImageWrapper = styled.div`
  width: 461px;
  height: 248px;
  margin: 0 auto;
`;

export const CarImage = styled.img`
  width: 461px;
  height: 248px;
  border-radius: 14px;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  padding-top: 14px;
  margin-bottom: 24px;
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
