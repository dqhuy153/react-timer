import { useState } from 'react';
import Button from '../Button';
import TimerForm from '../TimerForm';

const ToggleableTimerForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenForm = () => {
    setIsOpen(true);
  };

  const handleCloseForm = () => {
    setIsOpen(false);
  };

  if (!isOpen) return <Button onClick={handleOpenForm}>+</Button>;

  return <TimerForm />;
};

export default ToggleableTimerForm;
