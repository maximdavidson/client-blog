import { ReactNode } from 'react';

export type ButtonProps = {
  variant: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large' | 'without';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  icon?: ReactNode;
  dataCy?: string;
  children: ReactNode;
  onClick?: () => void;
};
