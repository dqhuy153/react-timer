import { useState } from 'react';
import Button from '../Button';
import TimerForm from '../TimerForm';
import { BiPlus } from 'react-icons/bi';

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
    <Button onClick={handleOpenForm} className={styles.new_btn}>
      <BiPlus size={20} />
      <span>New timer</span>
    </Button>
  );

  return <div className={styles.container}>{content}</div>;
};

export default ToggleableTimerForm;
