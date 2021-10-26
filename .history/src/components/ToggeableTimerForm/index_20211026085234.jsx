import Button from '../Button';
import TimerForm from '../TimerForm';

const ToggleableTimerForm = () => {
  const isOpen = false;

  if (!isOpen) return <Button>+</Button>;

  return <TimerForm />;
};

export default ToggleableTimerForm;
