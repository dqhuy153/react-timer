import React, { useState } from 'react';
import Timer from '../Timer';
import TimerForm from '../TimerForm';

import styles from './EditableTimerForm.module.scss';

const EditableTimerForm = ({
  id,
  title,
  project,
  timer,
  isRunning,
  type,
  alarm,
  onUpdate,
  onRemove,
  onTimerClick,
  onAlarmClick,
  onTypeClick,
}) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleOpenEdit = () => {
    setIsEdit(true);
  };

  const handleCloseEdit = () => {
    setIsEdit(false);
  };

  const handleUpdate = (data) => {
    onUpdate(data);
    handleCloseEdit();
  };

  const content = isEdit ? (
    <TimerForm
      id={id}
      title={title}
      project={project}
      time={timer}
      type={type}
      alarm={alarm}
      onCancel={handleCloseEdit}
      onUpdate={handleUpdate}
    />
  ) : (
    <Timer
      id={id}
      title={title}
      project={project}
      timer={timer}
      isRunning={isRunning}
      type={type}
      alarm={alarm}
      onEdit={handleOpenEdit}
      onRemove={() => onRemove(id)}
      onTimerClick={() => onTimerClick(id)}
      onTypeClick={() => onTypeClick(id)}
      onAlarmClick={() => onAlarmClick(id)}
    />
  );

  return <div className={styles.container}>{content}</div>;
};

export default EditableTimerForm;
