import Button from '../Button';

const ToggleableTimerForm = () => {
  const isOpen = true;

  if (!isOpen) return <Button>+</Button>;

  return;
};

export default ToggleableTimerForm;
