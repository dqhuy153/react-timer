import React, { useState } from 'react';
import Timer from '../Timer';
import TimerForm from '../TimerForm';

import styles from './EditableTimerForm.module.scss';

const EditableTimerForm = ({ id, title, project, timer, isRunning }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleOpenEdit = () => {
    setIsEdit(true);
  };

  const handleCloseEdit = () => {
    setIsEdit(false);
  };

  const content = isEdit ? (
    <TimerForm id={id} title={title} project={project} timer={timer} />
  ) : (
    <Timer
      id={id}
      title={title}
      project={project}
      timer={timer}
      isRunning={isRunning}
    />
  );

  return <div className={styles.container}>{content}</div>;
};

export default EditableTimerForm;
