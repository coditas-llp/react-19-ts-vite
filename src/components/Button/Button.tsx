import React from 'react';
import { IButton } from './IButton';
import style from './Button.module.scss';

export const Button: React.FC<IButton> = ({
  variant = 'Primary',
  size = 'Medium',
  className = '',
  disabled = false,
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      className={`${style.button} ${style[variant.toLocaleLowerCase()]} ${
        style[size.toLocaleLowerCase()]
      } ${className}`}
      {...props}
    />
  );
};
