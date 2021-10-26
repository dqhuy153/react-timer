import React from 'react';
import { BsPauseFill, BsPlayFill } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';

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
  const buttonLabel = isRunning ? (
    <BsPauseFill size={20} />
  ) : (
    <BsPlayFill size={20} />
  );

  return (
    <div>
      <p>{title}</p>
      <p>{project}</p>
      <p>{millisecondsToHuman(timer)}</p>

      <div>
        <Button onClick={onEdit}>
          <FiEdit size={20} />
        </Button>
        <Button onClick={onRemove}>Remove</Button>
      </div>

      <div onClick={onTimerClick}>{buttonLabel}</div>
    </div>
  );
};

export default Timer;
