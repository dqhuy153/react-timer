import './App.css';

import EditableTimerForm from './components/EditableTimerForm';

function App() {
  return (
    <div className="App">
      <h1>Timers</h1>

      <EditableTimerForm
        title="Learn React 1"
        project="Internship"
        timer={123423}
      />
    </div>
  );
}

export default App;
