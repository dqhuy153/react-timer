import { useEffect, useRef, useState } from 'react';
import './App.css';

import EditableTimerForm from './components/EditableTimerForm';
import ToggleableTimerForm from './components/ToggeableTimerForm';

function App() {
  const timerRef = useRef();
  const [timers, setTimers] = useState([
    {
      id: 1,
      title: 'Learn React 1',
      project: 'Internship',
      time: 123454,
      isRunning: true,
    },
    {
      id: 2,
      title: 'Learn React 2',
      project: 'Internship',
      time: 1234545,
      isRunning: false,
    },
  ]);

  const handleUpdateTimer = (data) => {
    const newTimers = timers.map((timer, idx) => {
      if (timer.id === data.id) {
        return {
          ...timer,
          title: data.title,
          project: data.project,
        };
      }

      return timer;
    });
  };

  useEffect(() => {
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      const newTimers = timers.map((timer, idx) => {
        if (timer.isRunning)
          return {
            ...timer,
            time: timer.time + 1000,
          };

        return timer;
      });

      setTimers(newTimers);
    }, 1000);
  }, [timers]);

  return (
    <div className="App">
      <h1>Timers</h1>

      <ToggleableTimerForm />

      {timers.map((timer) => {
        return (
          <EditableTimerForm
            key={timer.id}
            id={timer.id}
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
