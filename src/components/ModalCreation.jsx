import './ModalCreation.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import Validate from './Validate';
import { useState } from 'react';
import UploadImage from './UploadImage';

export default function ModalCreation({ setOpenModalCreator }) {

    const [loading, setLoading] = useState(0)
    const [form, setForm] = useState(false);
    const [urlImage, setUrlImage] = useState('');

    const closeModal = () => {
        setOpenModalCreator(false);
        window.location = window.location.href
    }

    const onSubmit = (values, { resetForm }) => {
        axios.post(`${process.env.REACT_APP_MY_API_URL}/memory`, {
            image: urlImage,
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
                <header>Crear Recuerdo</header>
                <label id='closeModal' onClick={() => closeModal()}>X</label>
                <div className="content">
                    <Formik
                        initialValues={{
                            image: '',
                            date: '',
                            description: ''
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

                                <UploadImage setUrlImage={setUrlImage} setLoading={setLoading} loading={loading} />

                                {
                                    ((loading === 1 || (errors.date || errors.description)) && <button type='submit' disabled>Añadir</button>) || ((loading === 2 || loading === 0) && <button type='submit'>Añadir</button>)
                                }
                                
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}