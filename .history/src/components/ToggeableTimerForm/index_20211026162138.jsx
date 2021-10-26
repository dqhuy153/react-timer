import { useState } from 'react';
import Button from '../Button';
import TimerForm from '../TimerForm';

import styles from './ToggleableTimerForm.module.scss';

const ToggleableTimerForm = ({ onUpdate, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenForm = () => {
    setIsOpen(true);
  };

  const handleCloseForm = () => {
    setIsOpen(false);
  };

  const handleUpdate = (data) => {
    onUpdate(data);
    handleCloseForm();
  };

  const content = isOpen ? (
    <TimerForm onCancel={handleCloseForm} onUpdate={handleUpdate} />
  ) : (
    <Button onClick={handleOpenForm}>+</Button>
  );

  return <div className={styles.container}>{content}</div>;
};

export default ToggleableTimerForm;
