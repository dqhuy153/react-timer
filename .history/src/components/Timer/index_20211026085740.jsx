import React from 'react';
import Button from '../Button';

const Timer = (props) => {
  const isRunning = false;

  const buttonLabel = isRunning ? 'STOP' : 'START';

  return (
    <div>
      <p>Title</p>
      <p>Project</p>
      <p>Timer</p>

      <div>
        <Button>EDIT</Button>
        <Button>REMOVE</Button>
      </div>

      <Button>{buttonLabel}</Button>
    </div>
  );
};

export default Timer;
