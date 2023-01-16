import './ModalCreation.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import Validate from './Validate';

export default function EditMemory({ setEditModal, id, date, description }) {

    const closeModal = () => {
        setEditModal(false);
    }

    const onSubmit = (values, { resetForm }) => {
        axios.put(`${process.env.REACT_APP_MY_API_URL}/memory/${id}`, {
            date: values.date,
            description: values.description
        })
            .then(function (response) {
                alert('Recuerdo añadido <3')
                window.location = window.location.href
                resetForm();
            })
            .catch(function (err) { console.log(err) });
    }

    return (
        <div className='modal'>
            <div className="containerModal">
                <header>Editar Recuerdo</header>
                <label id='closeModal' onClick={() => closeModal()}>X</label>
                <div className="content">
                    <div className="MemorysForm">
                        <Formik
                            initialValues={{
                                date: date,
                                description: description
                            }}

                            validate={Validate}
                            onSubmit={onSubmit}
                        >
                            {({ errors }) => (
                                <Form>

                                    <div className='inputCont'>
                                        <label htmlFor='date'>Fecha</label>
                                        <Field
                                            type='text'
                                            id='date'
                                            name='date'
                                        />
                                    </div>

                                    <div className='inputCont'>
                                        <label htmlFor='description'>Descripcion</label>
                                        <Field
                                            type='text'
                                            id='description'
                                            name='description'
                                        />
                                    </div>
                                    {
                                        (errors.date || errors.description) ? <button type='submit' disabled>Editar</button> : <button type='submit'>Editar</button>
                                    }
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}