import React from 'react';
import Timer from '../Timer';
import TimerForm from '../TimerForm';

const EditableTimerForm = ({ title, project, timer }) => {
  const isEdit = false;

  if (isEdit) return <TimerForm />;

  return <Timer title={title} project={project} timer={timer} />;
};

export default EditableTimerForm;
