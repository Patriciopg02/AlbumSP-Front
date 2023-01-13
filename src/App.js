import './App.css';
import CreateMemory from './components/CreateMemory';
import EditMemorys from './components/EditMemorys';
import MemoryList from './components/MemoryList';

function App() {

  return (
    <div className="App">
      <div className="hero">
        <h1>Mis Viajes</h1>
      </div>
      <CreateMemory/>
      <EditMemorys/>
      <MemoryList/>
    </div>
  );
}

export default App;
