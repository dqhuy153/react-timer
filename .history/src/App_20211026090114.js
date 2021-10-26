import './App.css';
import Button from './components/Button';
import EditableTimerForm from './components/EditableTimerForm';

function App() {
  return (
    <div className="App">
      <h1>Timers</h1>

      <EditableTimerForm />
    </div>
  );
}

export default App;
