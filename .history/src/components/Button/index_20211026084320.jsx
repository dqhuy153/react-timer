import React from 'react';

const Button = ({ children, onClick, ...rest }) => {
  return <button onClick={onClick} children={children} {...rest}></button>;
};

export default Button;
