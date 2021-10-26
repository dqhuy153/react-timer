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
  onUpdate,
  onRemove,
  onTimerClick,
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
    handleOpenEdit();
  };

  const content = isEdit ? (
    <TimerForm
      id={id}
      title={title}
      project={project}
      timer={timer}
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
      onEdit={handleOpenEdit}
      onRemove={onRemove}
      onTimerClick={onTimerClick}
    />
  );

  return <div className={styles.container}>{content}</div>;
};

export default EditableTimerForm;
