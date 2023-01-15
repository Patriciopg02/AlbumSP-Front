import './ModalCreation.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import Validate from './Validate';

export default function EditMemory({ setEditModal, id, date, description }) {

    const closeModal = () => {
        setEditModal(false);
        window.location = window.location.href
    }

    const onSubmit = (values, { resetForm }) => {
        axios.put(`${process.env.REACT_APP_MY_API_URL}/memory/${id}`, {
            date: values.date,
            description: values.description
        })
            .then(function (response) {
                alert('Recuerdo añadido <3')
                resetForm();
            })
            .catch(function (err) { console.log(err) });
    }

    return (
        <div className='modal'>

            <div className="containerModal">
                <header>Recuerdos</header>
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

                                    <ErrorMessage name='date' component={() => (<div className='error'> {errors.date} </div>)} />
                                    <ErrorMessage name='description' component={() => (<div className='error'> {errors.description} </div>)} />

                                    <button type='submit'>Editar</button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}