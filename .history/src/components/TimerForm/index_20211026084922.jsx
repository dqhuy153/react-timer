import Button from '../Button';

const TimerForm = () => {
  const isOpen = true;

  if (!isOpen) return <Button>+</Button>;

  return <TimerForm />;
};

export default TimerForm;
