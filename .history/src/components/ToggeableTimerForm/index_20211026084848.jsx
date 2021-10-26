import Button from '../Button';

const ToggleableTimerForm = () => {
  const isOpen = true;

  if (!isOpen) return <Button>+</Button>;

  return <TimerForm />;
};

export default ToggleableTimerForm;
