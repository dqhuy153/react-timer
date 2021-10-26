import { useState } from 'react';
import Button from '../Button';

import styles from './TimerForm.module.scss';

const TimerForm = ({ id, title, project, onCancel, onUpdate, ...rest }) => {
  const [inputTitle, setInputTitle] = useState(title || '');
  const [inputProject, setInputProject] = useState(project || '');

  const updateLabel = id ? 'Update' : 'Create';

  const handleUpdate = () => {
    if (inputTitle.trim() === '' || inputProject.trim() === '') {
      alert('Please enter all the fields!');
      return;
    }

    onUpdate({ id, inputTitle, inputProject });

    setInputTitle('');
    setInputProject('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.input_container}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
      </div>

      <div className={styles.input_container}>
        <label htmlFor="project">Project</label>
        <input
          type="text"
          id="project"
          value={inputProject}
          onChange={(e) => setInputProject(e.target.value)}
        />
      </div>

      <div className={styles.btn_container}>
        <Button onClick={handleUpdate} className={styles.btn}>
          {updateLabel}
        </Button>
        <Button onClick={onCancel} className={styles.btn} bgColor="#333">
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default TimerForm;