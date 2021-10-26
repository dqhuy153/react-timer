import { useState } from 'react';
import Button from '../Button';

import styles from './TimerForm.module.scss';

const TimerForm = ({ id, title, project, onCancel, onCreate, ...rest }) => {
  const [inputTitle, setInputTitle] = useState(title || '');
  const [inputProject, setInputProject] = useState(project || '');

  const updateLabel = id ? 'Update' : 'Create';

  const handleUpdate = () => {};

  return (
    <div className={styles.container}>
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
        <Button onClick={onCancel}>Cancel</Button>
        <Button onClick={handleUpdate}>{updateLabel}</Button>
      </div>
    </div>
  );
};

export default TimerForm;
