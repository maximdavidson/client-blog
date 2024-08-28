import React from 'react';
import style from './style.module.scss';
import { InputProps } from './types';

export const Input: React.FC<InputProps> = ({
  type,
  name,
  placeholder,
  register,
  error,
  className,
}) => {
  return (
    <div className={style.inputWrapper}>
      {type === 'textarea' ? (
        <textarea
          name={name}
          placeholder={placeholder}
          className={style.textarea}
          {...register}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={style.input}
          {...register}
        />
      )}
      {error && <p className={style.error}>{error}</p>}
    </div>
  );
};
