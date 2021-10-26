import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <h1>Timers</h1>
      <Button onClick={() => console.log('Clicked')}>Click</Button>
    </div>
  );
}

export default App;
