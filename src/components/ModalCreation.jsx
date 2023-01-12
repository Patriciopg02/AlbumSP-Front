import './ModalCreation.css';
import {Formik, Form, Field} from 'formik';
import axios from 'axios';

export default function ModalCreation({ setOpenModal }) {

    const closeModal = () => {
        setOpenModal(false);
    }

    const onSubmit = (values, {resetForm}) => {
        axios.post(`${process.env.REACT_APP_MY_API_URL}/memory`, {
          image:values.image,
          date:values.date,
          description:values.description
        })
        .then(function(response) {
          alert('Recuerdo añadido <3')
          resetForm();
        })
        .catch(function(err) {console.log(err)}); 
    }

    return (
        <div className="containerModal">
            <header>Añadir recuerdo</header>
            <label id='closeModal' onClick={() => closeModal()}>X</label>
            <div className="content">
                <div className="FormContainer">
                    <Formik
                        initialValues={{
                            image: '',
                            date: '',
                            description: ''
                        }}

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
                                <button type='submit'>Añadir</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}