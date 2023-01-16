import { useState } from 'react';
import './App.css';
import MemoryList from './components/MemoryList';

function App() {
  const [edit, setEdit] = useState(false);
  const [openModalCreator, setOpenModalCreator] = useState(false);
  const [password, setPassword] = useState('');

  const onChange = (e) => {
      setPassword(e.target.value);
  }

  const changeEdit = () => {
    setEdit(false);
  }

  const checkCreate = () => {
      if(password === process.env.REACT_APP_PASSWORD) {
          setOpenModalCreator(true);
      }
      else {
          alert('Contraseña incorrecta :(')
          setOpenModalCreator(false);
      }
  }
  const checkEdit = () => {
      if(password === process.env.REACT_APP_PASSWORD) {
          setEdit(true);
      }
      else {
          alert('Contraseña incorrecta :(')
          setEdit(false);
      }
  }

  return (
    <div className="App">
      <div className="hero">
        <h1>Nuestros Recuerdos</h1>
      </div>
      <div className='homeButtons'>
      <div className="Creation">
            <input type="checkbox" id="inpEdit"/>
            <div className="ButtonCreation">
                <label for="inpEdit" id="labelEdit">
                    Editar recuerdos
                </label>
                {
                  edit ? <label for="inpEdit" id="labelPasswordEdit" onClick={changeEdit}>Finalizar Edicion</label> : <label for="inpEdit" id="labelPasswordEdit">Ingresar contraseña 🠗</label>
                }
                {
                  !edit && 
                  <div className='password'>
                    <input type='password' id='pwdEdit' value={password} onChange={(e) => onChange(e)}/>
                    <button id='pwdButtonEdit' onClick={() => checkEdit()}>✔️</button>
                  </div>
                }               
                
            </div>
        </div>
        <div className="Creation">
            <input type="checkbox" id="inp"/>
            <div className="ButtonCreation">
                <label for="inp" id="labelAdd">
                    Añadir recuerdo
                </label>
                <label for="inp" id="labelPassword">
                    Ingresar contraseña 🠗
                </label>
                <div className='password'>
                    <input type='password' id='pwd' value={password} onChange={(e) => onChange(e)}/>
                    <button id='pwdButton' onClick={() => checkCreate()}>✔️</button>
                </div>
            </div>
        </div>
      </div>

      <MemoryList edit={edit} openModalCreator={openModalCreator} setOpenModalCreator={setOpenModalCreator}/>
    </div>
  );
}

export default App;
