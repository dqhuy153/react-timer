import React from 'react';

import styles from './Button.module.scss';

const Button = ({
  children,
  onClick,
  className,
  bgColor = '#22375f',
  color = '#fff',
  hoverColor = '#22375f',
  hoverBgColor = '#fff',
  ...rest
}) => {
  return (
    <button
      style={{
        '--bg-color': bgColor,
        '--color': color,
        '--hover-color': hoverColor,
        '--hover-bg-color': hoverBgColor,
      }}
      className={`${styles.container} ${className}`}
      onClick={onClick}
      children={children}
      {...rest}
    ></button>
  );
};

export default Button;
