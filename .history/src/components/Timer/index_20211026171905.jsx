import React from 'react';
import { BsPauseFill, BsPlayFill } from 'react-icons/bs';
import { FaEdit, FaTrash } from 'react-icons/fa';

import { millisecondsToHuman } from '../../utils/TimerUtils';

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
        <FaEdit onClick={onEdit} size={20} />
        <FaTrash size={20} onClick={onRemove} />
      </div>

      <div onClick={onTimerClick}>{buttonLabel}</div>
    </div>
  );
};

export default Timer;
