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

  const content = isOpen ? (
    <TimerForm onCancel={handleCloseForm} />
  ) : (
    <Button onClick={handleOpenForm}>+</Button>
  );

  return <div className={styles.container}>{content}</div>;
};

export default ToggleableTimerForm;