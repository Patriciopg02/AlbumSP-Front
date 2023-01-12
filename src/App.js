import './App.css';
import CreateMemory from './components/CreateMemory';
import MemoryList from './components/MemoryList';
import foto1 from './resources/1.jpeg'
import foto2 from './resources/2.jpeg'
import foto3 from './resources/3.jpeg'

function App() {

  return (
    <div className="App">
      <div className="hero">
        <h1>Mis Viajes</h1>
      </div>
      <CreateMemory/>
      <MemoryList/>
    </div>
  );
}

export default App;
