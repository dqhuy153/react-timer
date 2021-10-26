import React from 'react';
import { BsPlayFill } from 'react-icons/bs';

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
  const buttonLabel = isRunning ? <BsPlayFill /> : 'START';

  return (
    <div>
      <p>{title}</p>
      <p>{project}</p>
      <p>{millisecondsToHuman(timer)}</p>

      <div>
        <Button onClick={onEdit}>Edit</Button>
        <Button onClick={onRemove}>Remove</Button>
      </div>

      <Button onClick={onTimerClick}>{buttonLabel}</Button>
    </div>
  );
};

export default Timer;
