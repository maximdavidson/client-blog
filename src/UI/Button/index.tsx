import { SlArrowRight } from 'react-icons/sl';
import buttonVariants from './buttonVariants';
import styles from './style.module.scss';
import { ButtonProps } from './types';

const Button = ({
  variant,
  size = 'medium',
  type = 'button',
  disabled = false,
  dataCy = '',
  icon = <SlArrowRight className={styles.icon} />,
  children,
  onClick,
}: ButtonProps) => {
  const variantClass = styles[buttonVariants[variant]];
  const sizeClass = styles[size];
  const className = `${styles.button} ${variantClass} ${sizeClass}`;

  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
      data-cy={dataCy}
    >
      <span className={styles.content}>
        {children}
        {icon && <span className={styles.iconWrapper}>{icon}</span>}{' '}
      </span>
    </button>
  );
};

export default Button;
