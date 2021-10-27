import { useState } from 'react';
import {
  humanizedTimeToMilliseconds,
  millisecondsToHuman,
} from '../../utils/TimerUtils';
import Button from '../Button';

import styles from './TimerForm.module.scss';

const TimerForm = ({
  id,
  title,
  project,
  time,
  onCancel,
  onUpdate,
  type,
  alarm,
  ...props
}) => {
  const [inputTitle, setInputTitle] = useState(title || '');
  const [inputProject, setInputProject] = useState(project || '');
  const [inputHours, setInputHours] = useState(
    millisecondsToHuman(time).hours || 0
  );
  const [inputMinute, setInputMinute] = useState(
    millisecondsToHuman(time).minutes || 0
  );
  const [inputSecond, setInputSecond] = useState(
    millisecondsToHuman(time).seconds || 0
  );
  const [inputType, setInputType] = useState(type || 'up');
  const [inputAlarm, setInputAlarm] = useState(alarm || false);

  const updateLabel = id ? 'Update' : 'Create';

  const handleUpdate = (e) => {
    e.preventDefault();

    if (inputTitle.trim() === '' || inputProject.trim() === '') {
      alert('Please enter all the fields!');
      return;
    }

    if (
      inputHours < 0 ||
      inputMinute < 0 ||
      inputMinute > 60 ||
      inputSecond < 0 ||
      inputSecond > 60
    ) {
      alert('Please enter valid time!');
      return;
    }

    onUpdate({
      id,
      title: inputTitle,
      project: inputProject,
      time: humanizedTimeToMilliseconds(inputHours, inputMinute, inputSecond),
      type: inputType,
      alarm: inputAlarm,
    });

    setInputTitle('');
    setInputProject('');
    setInputHours(0);
    setInputAlarm(false);
  };

  return (
    <form className={styles.container} onSubmit={handleUpdate}>
      <div className={styles.input_container}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
      </div>

      <div className={styles.input_container}>
        <label htmlFor="project">Project</label>
        <input
          type="text"
          id="project"
          value={inputProject}
          onChange={(e) => setInputProject(e.target.value)}
        />
      </div>

      <div className={`${styles.input_container} ${styles.time}`}>
        <label htmlFor="time">Time</label>
        <input
          type="number"
          id="time"
          value={inputHours}
          min="0"
          onChange={(e) => setInputHours(e.target.value)}
        />
        <p>h</p>
        <input
          type="number"
          id="time"
          value={inputMinute}
          min="0"
          max="60"
          onChange={(e) => setInputMinute(e.target.value)}
        />
        <p>m</p>
        <input
          type="number"
          id="time"
          value={inputSecond}
          min="0"
          max="60"
          onChange={(e) => setInputSecond(e.target.value)}
        />
        <p>s</p>
      </div>

      <div className={`${styles.input_container} ${styles.type}`}>
        <label htmlFor="type">Type</label>
        <select
          id="type"
          value={inputType}
          onChange={(e) => setInputType(e.target.value)}
        >
          <option value="up">Up</option>
          <option value="down">Down</option>
        </select>
      </div>

      <div className={`${styles.input_container} ${styles.alarm}`}>
        <label htmlFor="alarm">Alarm</label>
        <input
          type="checkbox"
          id="alarm"
          checked={inputAlarm}
          onChange={(e) => setInputAlarm(e.target.checked)}
        />
      </div>

      <div className={styles.btn_container}>
        <Button type="submit" className={styles.btn}>
          {updateLabel}
        </Button>
        <Button
          type="button"
          onClick={onCancel}
          className={styles.btn}
          bgColor="#333"
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default TimerForm;
