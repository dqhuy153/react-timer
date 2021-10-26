import React from 'react';
import { BsPauseFill, BsPlayFill } from 'react-icons/bs';

import { millisecondsToHuman } from '../../utils/TimerUtils';
import Button from '../Button';
import styles from './Timer.module.scss';

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
    <div className={styles.container}>
      <h2>{title}</h2>
      <p>{project}</p>
      <p className={styles.timer}>{millisecondsToHuman(timer)}</p>

      <div className={styles.btn_container}>
        <Button className={styles.btn} onClick={onEdit}>
          Edit
        </Button>
        <Button className={styles.btn} onClick={onRemove}>
          Remove
        </Button>
      </div>

      <Button className={styles.timer_btn} onClick={onTimerClick}>
        {buttonLabel}
      </Button>
    </div>
  );
};

export default Timer;
