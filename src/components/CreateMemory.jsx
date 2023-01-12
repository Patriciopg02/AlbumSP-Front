import { useState } from 'react';
import './CreateMemory.css';
import ModalCreation from './ModalCreation';

export default function CreateMemory() {

    const [password, setPassword] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const onChange = (e) => {
        setPassword(e.target.value);
    }

    const checkPassword = () => {
        if(password === process.env.REACT_APP_PASSWORD) {
            setOpenModal(true);
        }
        else {
            alert('Contraseña incorrecta :(')
            setOpenModal(false);
        }
    }


    return (
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
                    <button id='pwdButton' onClick={() => checkPassword()}>✔️</button>
                </div>
                {
                    openModal === true ? 
                    <div className="modal">
                        <ModalCreation setOpenModal={setOpenModal}/>
                    </div> :
                    <></>
                }
            </div>
        </div>
    )
}
