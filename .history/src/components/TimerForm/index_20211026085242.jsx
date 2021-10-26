import Button from '../Button';

const TimerForm = () => {
  return (
    <div>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" />
      </div>

      <div>
        <label htmlFor="project">Project</label>
        <input type="text" id="project" />
      </div>

      <div>
        <Button>Cancel</Button>
        <Button>Create</Button>
      </div>
    </div>
  );
};

export default TimerForm;
