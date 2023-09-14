import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import {
  Overlay,
  ModalWindow,
  CloseIconStyled,
  CloseBtn,
} from './Modal.styled';
import { ReactComponent as Close } from '../../images/close.svg';

const modalRoot = document.querySelector('#modal-root');

const CloseIcon = CloseIconStyled(Close);

export const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) onClose();
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalWindow>
        <CloseBtn onClick={onClose}>
          <CloseIcon />
        </CloseBtn>
        {children}
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};
