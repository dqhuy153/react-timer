import React from 'react';
import Button from '../Button';

const Timer = ({ title, project, timer }) => {
  const isRunning = false;

  const buttonLabel = isRunning ? 'STOP' : 'START';

  return (
    <div>
      <p>{title}</p>
      <p>{project}</p>
      <p>{timer}</p>

      <div>
        <Button>EDIT</Button>
        <Button>REMOVE</Button>
      </div>

      <Button>{buttonLabel}</Button>
    </div>
  );
};

export default Timer;
