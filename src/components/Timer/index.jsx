import React from 'react';
import {
  BsArrowDown,
  BsArrowUp,
  BsPauseFill,
  BsPlayFill,
} from 'react-icons/bs';
import { MdAccessAlarms, MdOutlineAlarmOff } from 'react-icons/md';

import { millisecondsToHuman } from '../../utils/TimerUtils';
import Button from '../Button';
import styles from './Timer.module.scss';

const Timer = ({
  title,
  project,
  timer,
  isRunning,
  type,
  alarm,
  onEdit,
  onRemove,
  onTimerClick,
  onAlarmClick,
  onTypeClick,
}) => {
  const buttonLabel = isRunning ? (
    <BsPauseFill size={20} />
  ) : (
    <BsPlayFill size={20} />
  );

  const buttonType =
    type === 'up' ? <BsArrowUp size={20} /> : <BsArrowDown size={20} />;

  const buttonAlarm = alarm ? (
    <MdAccessAlarms size={20} />
  ) : (
    <MdOutlineAlarmOff size={20} />
  );

  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <p>{project}</p>
      <p className={styles.timer}>{millisecondsToHuman(timer).humanized}</p>
      <div className={styles.options}>
        <Button className={styles.btn_options_icon} onClick={onTypeClick}>
          {buttonType}
        </Button>
        <Button className={styles.timer_btn} onClick={onTimerClick}>
          {buttonLabel}
        </Button>
        <Button className={styles.btn_options_icon} onClick={onAlarmClick}>
          {buttonAlarm}
        </Button>
      </div>

      <div className={styles.btn_container}>
        <Button className={styles.btn} onClick={onEdit}>
          Edit
        </Button>
        <Button className={styles.btn} onClick={onRemove}>
          Remove
        </Button>
      </div>
    </div>
  );
};

export default Timer;
