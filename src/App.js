import { useEffect, useRef, useState } from 'react';
import './App.scss';

import EditableTimerForm from './components/EditableTimerForm';
import ToggleableTimerForm from './components/ToggeableTimerForm';
import { newTimer } from './utils/TimerUtils';

function App() {
  const timerRef = useRef();
  const [timers, setTimers] = useState([
    {
      id: 1,
      title: 'Learn React 1',
      project: 'Internship',
      time: 0,
      isRunning: false,
    },
  ]);

  const handleUpdateTimer = (data) => {
    let newTimers;

    //if has no id, create a new one
    if (!data.id) {
      newTimers = [
        newTimer({
          title: data.title,
          project: data.project,
        }),
        ...timers,
      ];
    }
    //update existing timer
    else {
      newTimers = timers.map((timer, idx) => {
        if (timer.id === data.id) {
          return {
            ...timer,
            title: data.title,
            project: data.project,
          };
        }

        return timer;
      });
    }

    setTimers(newTimers);
  };

  const handleRemoveTimer = (id) => {
    setTimers(timers.filter((timer) => timer.id !== id));
  };

  const handleTimerClick = (id) => {
    const newTimers = timers.map((timer, idx) => {
      if (timer.id === id) {
        return {
          ...timer,
          isRunning: !timer.isRunning,
        };
      }

      return timer;
    });

    setTimers(newTimers);
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
      <div className="body">
        <h1>Timers</h1>

        <ToggleableTimerForm onUpdate={handleUpdateTimer} />

        {timers.map((timer) => {
          return (
            <EditableTimerForm
              key={timer.id}
              id={timer.id}
              title={timer.title}
              project={timer.project}
              timer={timer.time}
              isRunning={timer.isRunning}
              onUpdate={handleUpdateTimer}
              onRemove={handleRemoveTimer}
              onTimerClick={handleTimerClick}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
