import React from 'react';

import styles from './Button.module.scss';

const Button = ({
  children,
  onClick,
  className,
  bgColor,
  color,
  hoverColor,
  hoverBgColor,
  ...rest
}) => {
  return (
    <button
      style={{
        background: bgColor,
        color: color,
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
