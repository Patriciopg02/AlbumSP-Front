import './ModalCreation.css';
import axios from 'axios';

export default function DeleteMemory({ setDeleteModal, id}) {

    const closeModal = () => {
        setDeleteModal(false);
    }

    const onSubmit = () => {
        axios.delete(`${process.env.REACT_APP_MY_API_URL}/memory/${id}`)
            .then(function (response) {
                alert('Recuerdo Eliminado :(');
                window.location = window.location.href;
            })
            .catch(function (err) { console.log(err) });
    }

    return (
        <div className='modal'>

            <div className="containerModal" style={{height:'15vh'}}>
                <header>Esta seguro que desea eliminar este recuerdo?</header>
                <div className='content'>
                    <label id='aceptarDelete' onClick={() => onSubmit()}>Aceptar</label>
                    <label id='closeModal' onClick={() => closeModal()}>X</label>
                </div>
            </div>
        </div>
    )
}