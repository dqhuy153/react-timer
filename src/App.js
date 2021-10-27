import { useEffect, useRef, useState } from 'react';
import './App.scss';

import EditableTimerForm from './components/EditableTimerForm';
import ToggleableTimerForm from './components/ToggeableTimerForm';
import { newTimer } from './utils/TimerUtils';
import alarmSound from './assets/alarm-sound.mov';

function App() {
  const timerRef = useRef();
  const alarmRef = useRef();
  const [timers, setTimers] = useState([
    {
      id: 1,
      title: 'Timer up',
      project: 'Internship',
      time: 0,
      type: 'up',
      alarm: false,
      isRunning: false,
    },
    {
      id: 2,
      title: 'Timer down',
      project: 'Internship',
      time: 10000,
      type: 'down',
      alarm: true,
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
          time: data.time,
          type: data.type,
          alarm: data.alarm,
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
            time: data.time,
            type: data.type,
            alarm: data.alarm,
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

  const handleTypeClick = (id) => {
    const newTimers = timers.map((timer, idx) => {
      if (timer.id === id) {
        return {
          ...timer,
          type: timer.type === 'up' ? 'down' : 'up',
        };
      }

      return timer;
    });

    setTimers(newTimers);
  };
  const handleAlarmClick = (id) => {
    const newTimers = timers.map((timer, idx) => {
      if (timer.id === id) {
        return {
          ...timer,
          alarm: !timer.alarm,
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
        if (timer.isRunning) {
          const isKeepRunning =
            (timer.isRunning && timer.time && timer.type === 'down') ||
            timer.type === 'up';

          if (!isKeepRunning) {
            alarmRef.current.play();
          }

          return {
            ...timer,
            //increase second of timer up
            //decrease second of timer down (if time = 0 => stop timer)
            time:
              timer.type === 'up'
                ? timer.time + 1000
                : timer.time > 0
                ? timer.time - 1000
                : 0,
            //using || make timer up keep running because it always return true
            //otherwise timer down will change isRunning to false when timer.time = 0
            isRunning: isKeepRunning,
          };
        }

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
              type={timer.type}
              alarm={timer.alarm}
              onUpdate={handleUpdateTimer}
              onRemove={handleRemoveTimer}
              onTimerClick={handleTimerClick}
              onAlarmClick={handleAlarmClick}
              onTypeClick={handleTypeClick}
            />
          );
        })}

        <audio src={alarmSound} ref={alarmRef} />
      </div>
    </div>
  );
}

export default App;
