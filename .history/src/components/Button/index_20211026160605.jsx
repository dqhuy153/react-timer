import React from 'react';

import styles from './Button.module.scss';

const Button = ({ children, onClick, className, bgColor, ...rest }) => {
  return (
    <button
      style={{
        background: bgColor,
      }}
      className={`${styles.container} ${className}`}
      onClick={onClick}
      children={children}
      {...rest}
    ></button>
  );
};

export default Button;
