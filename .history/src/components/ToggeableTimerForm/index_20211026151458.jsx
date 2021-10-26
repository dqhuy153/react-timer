import { useState } from 'react';
import Button from '../Button';
import TimerForm from '../TimerForm';

import styles from './ToggleableTimerForm.module.scss';

const ToggleableTimerForm = ({ onCreate, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenForm = () => {
    setIsOpen(true);
  };

  const handleCloseForm = () => {
    setIsOpen(false);
  };

  if (!isOpen) return <Button onClick={handleOpenForm}>+</Button>;

  return <TimerForm onCancel={handleCloseForm} />;
};

export default ToggleableTimerForm;
