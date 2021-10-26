import React from 'react';
import Timer from '../Timer';
import TimerForm from '../TimerForm';

const Button = (props) => {
  const isEdit = false;

  if (isEdit) return <TimerForm />;

  return <Timer />;
};

export default Button;
