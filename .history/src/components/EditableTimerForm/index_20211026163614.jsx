import React, { useState } from 'react';
import Timer from '../Timer';
import TimerForm from '../TimerForm';

const EditableTimerForm = ({ id, title, project, timer, isRunning }) => {
  const [isEdit, setIsEdit] = useState(false);

  if (isEdit)
    return (
      <TimerForm
        id={id}
        title={title}
        project={project}
        timer={timer}
        // onCancel={handleCancelFomr}
      />
    );

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
