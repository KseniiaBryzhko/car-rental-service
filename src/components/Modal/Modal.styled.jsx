import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(18, 20, 23, 0.5);
  z-index: 1200;
`;

export const ModalWindow = styled.div`
  width: 541px;
  height: 752px;
  border-radius: 24px;
  background: #ffffff;
  position: relative;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  border: none;
  background: none;
`;

export const CloseIconStyled = component => styled(component)`
  width: 24px;
  height: 24px;
`;
