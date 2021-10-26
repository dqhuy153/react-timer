import React from 'react';
import TimerForm from '../TimerForm';

const Timer = (props) => {
  const isEdit = false;

  if (isEdit) return <TimerForm />;

  return <Timer />;
};

export default Timer;
