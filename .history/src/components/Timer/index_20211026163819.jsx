import React from 'react';
import { millisecondsToHuman } from '../../utils/TimerUtils';
import Button from '../Button';

const Timer = ({
  title,
  project,
  timer,
  isRunning,
  onEdit,
  onRemove,
  onTimerClick,
}) => {
  const buttonLabel = isRunning ? 'STOP' : 'START';

  return (
    <div>
      <p>{title}</p>
      <p>{project}</p>
      <p>{millisecondsToHuman(timer)}</p>

      <div>
        <Button>Edit</Button>
        <Button>Remove</Button>
      </div>

      <Button>{buttonLabel}</Button>
    </div>
  );
};

export default Timer;
