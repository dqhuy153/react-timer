import React, { useState } from 'react';
import Timer from '../Timer';
import TimerForm from '../TimerForm';

const EditableTimerForm = ({ id, title, project, timer, isRunning }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleOpenEdit = () => {
    setIsEdit(true);
  };

  const handleCloseEdit = () => {
    setIsEdit(false);
  };

  if (isEdit)
    return <TimerForm id={id} title={title} project={project} timer={timer} />;

  return (
    <Timer
      id={id}
      title={title}
      project={project}
      timer={timer}
      isRunning={isRunning}
    />
  );
};

export default EditableTimerForm;
