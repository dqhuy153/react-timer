import { useState } from 'react';
import './App.css';

import EditableTimerForm from './components/EditableTimerForm';
import ToggleableTimerForm from './components/ToggeableTimerForm';

function App() {
  // timerData =
  const [timers, setTimers] = useState([
    {
      id: 1,
      title: 'Learn React 1',
      project: 'Internship',
      time: 12345,
      isRunning: true,
    },
    {
      id: 2,
      title: 'Learn React 2',
      project: 'Internship',
      time: 123455,
      isRunning: false,
    },
  ]);

  return (
    <div className="App">
      <h1>Timers</h1>
      <ToggleableTimerForm />

      {timers.map((timer) => {
        return (
          <EditableTimerForm
            key={timer.id}
            title={timer.title}
            project={timer.project}
            timer={timer.time}
            isRunning={timer.isRunning}
          />
        );
      })}
    </div>
  );
}

export default App;
