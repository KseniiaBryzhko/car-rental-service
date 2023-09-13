import styled from 'styled-components';

export const CatalogWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 70px 0 150px 0;
  height: 100%;
`;

export const LoadMoreBtn = styled.button`
  color: #3470ff;
  background: none;
  border: none;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  cursor: pointer;
  margin-top: 100px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #0b44cd;
  }
`;
