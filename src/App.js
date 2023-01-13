import { useState } from 'react';
import './App.css';
import CreateMemory from './components/CreateMemory';
import MemoryList from './components/MemoryList';

function App() {
  const [edit, setEdit] = useState(false);

  const changeEdit = () => {
      setEdit(!edit);
  }

  return (
    <div className="App">
      <div className="hero">
        <h1>Mis Viajes</h1>
      </div>
      <div>
          <label onClick={changeEdit}>Editar recuerdos</label>
      </div>
      <CreateMemory/>
      <MemoryList edit={edit}/>
    </div>
  );
}

export default App;
