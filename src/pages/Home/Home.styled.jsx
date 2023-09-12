import styled from 'styled-components';

export const HomeWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 70px 0;
  height: 100%;
`;

export const CarImage = styled.img`
  max-width: 100%;
`;

export const LeftContentWrapper = styled.div`
  height: 100%;
  min-width: 50%;
`;

export const RightContentWrapper = styled.div`
  height: 100%;
  min-width: 50%;
  padding-top: 60px;
`;

export const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 20px;
  text-align: center;
`;

export const SubTitle = styled.h2`
  font-size: 22px;
  margin-bottom: 14px;
  text-align: center;
`;

export const Text = styled.p`
  font-size: 20px;
  margin-bottom: 12px;
  text-align: center;
`;

export const List = styled.ul`
  margin-bottom: 12px;
  padding-left: 12px;
`;

export const ListItem = styled.li`
  font-size: 20px;
  margin-bottom: 2px;
  list-style: inside;
`;
