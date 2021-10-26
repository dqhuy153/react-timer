import { useState } from 'react';
import './App.css';

import EditableTimerForm from './components/EditableTimerForm';

function App() {
  // timerData =
  const [timers, setTimers] = useState([
    {
      id: '',
      title: 'Learn React 1',
      project: 'Internship',
      time: 12345,
      isRunning: true,
    },
    {
      id: '',
      title: 'Learn React 2',
      project: 'Internship',
      time: 123455,
      isRunning: false,
    },
  ]);

  return (
    <div className="App">
      <h1>Timers</h1>

      {timers.map((timer) => {
        return (
          <EditableTimerForm
            key={timer.id}
            title={timer.title}
            project={timer.project}
            timer={timer.timer}
          />
        );
      })}
    </div>
  );
}

export default App;