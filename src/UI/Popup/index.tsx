import React, { useEffect, useState, FC } from 'react';
import { createPortal } from 'react-dom';
import style from './style.module.scss';

interface PopupProps {
  message: string;
  onClose: () => void;
  backgroundColor?: string;
  isVisible?: boolean;
}

export const Popup: FC<PopupProps> = ({
  message,
  onClose,
  backgroundColor,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 800);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return createPortal(
    <div
      className={`${style.popup} ${isVisible ? style.show : style.hide}`}
      style={{ backgroundColor }}
    >
      <p>{message}</p>
    </div>,
    document.body,
  );
};
