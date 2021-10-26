import { useState } from 'react';
import Button from '../Button';

const TimerForm = ({ id, title, project, onCancel, ...rest }) => {
  const [inputTitle, setInputTitle] = useState(title);
  const [inputProject, setInputProject] = useState(project);

  return (
    <div>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="project">Project</label>
        <input
          type="text"
          id="project"
          value={inputProject}
          onChange={(e) => setInputProject(e.target.value)}
        />
      </div>

      <div>
        <Button onCancel={onCancel}>Cancel</Button>
        <Button>Create</Button>
      </div>
    </div>
  );
};

export default TimerForm;
