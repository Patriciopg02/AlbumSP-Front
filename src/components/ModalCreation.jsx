import './ModalCreation.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import Validate from './Validate';
import { useState } from 'react';

export default function ModalCreation({ setOpenModal }) {

    const [form, setForm] = useState(false);

    const changeForm = () => {
        setForm(!form);
    }

    const closeModal = () => {
        setOpenModal(false);
        window.location = window.location.href
    }

    const onSubmit = (values, { resetForm }) => {
        axios.post(`${process.env.REACT_APP_MY_API_URL}/memory`, {
            image: values.image,
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
        <div className="containerModal">
            <header>Recuerdos</header>
            <label id='closeModal' onClick={() => closeModal()}>X</label>
            <div className="content">

                {
                    form === false ?
                        <div>
                            <label onClick={changeForm}>Añadir fecha</label>
                            <div className="MemorysForm">
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
                                                <label htmlFor='image'>Foto</label>
                                                <Field
                                                    type='text'
                                                    id='image'
                                                    name='image'
                                                />
                                            </div>


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

                                            <button type='submit'>Añadir</button>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>

                        :
                        <div>
                            <label onClick={changeForm}>Añadir recuerdo</label>
                            <div className="DatesForm">
                                <Formik
                                    initialValues={{
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
                                            <ErrorMessage name='date' component={() => (<div className='error'> {errors.date} </div>)} />
                                            <ErrorMessage name='description' component={() => (<div className='error'> {errors.description} </div>)} />

                                            <button type='submit'>Añadir</button>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}