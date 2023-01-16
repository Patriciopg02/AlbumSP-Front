import { useCallback, useEffect, useState } from 'react';
import DeleteMemory from './DeleteMemory';
import EditMemory from './EditMemory';
import GetMemorys from './GetMemorys';
import './MemoryList.css';
import ModalCreation from './ModalCreation';

export default function MemoryList({ edit, openModalCreator, setOpenModalCreator }) {
    console.log(openModalCreator);

    const [memorys, setMemorys] = useState([]);

    const [editModal, setEditModal] = useState('');
    const [deleteModal, setDeleteModal] = useState('');

    const editFunction = (id) => {
        setEditModal(id);
    }
    const deleteFunction = (id) => {
        setDeleteModal(id);
    }

    const fetchMemorys = useCallback(async function () {
        const json = await GetMemorys();
        console.log(json);
        setMemorys(json.data);
    }, [])

    useEffect(() => {
        fetchMemorys();
    }, [])


    return (
        <div className="container">
            {
                memorys?.map(m => {
                    if (m.image) {
                        return (
                            <div className="evento">
                                {
                                    edit &&
                                    <div className='buttonsContainer'>
                                        <button onClick={() => editFunction(m._id)}>Editar ✏️</button>
                                        <button onClick={() => deleteFunction(m._id)}>Eliminar ❌</button>
                                    </div>
                                }
                                <div className="foto">
                                    <img src={m.image} alt="img" />
                                </div>
                                <div className="description">
                                    <h3>{m.date}</h3>
                                    <p >{m.description}</p>
                                </div>
                                {
                                    editModal === m._id && <EditMemory setEditModal={setEditModal} id={m._id} date={m.date} description={m.description} />
                                }
                                {
                                    deleteModal === m._id && <DeleteMemory setDeleteModal={setDeleteModal} id={m._id} />
                                }
                            </div>
                        )
                    }
                    else {
                        return (
                            <div className="fecha">
                                {
                                    edit &&
                                    <div className='buttonsContainer'>
                                        <button onClick={() => editFunction(m._id)}>Editar ✏️</button>
                                        <button onClick={() => deleteFunction(m._id)}>Eliminar ❌</button>
                                    </div>
                                }
                                <h3>{m.date}</h3>
                                <p >{m.description}</p>
                                {
                                    editModal === m._id && <EditMemory setEditModal={setEditModal} id={m._id} date={m.date} description={m.description} />
                                }
                                {
                                    deleteModal === m._id && <DeleteMemory setDeleteModal={setDeleteModal} id={m._id} />
                                }
                            </div>
                        )
                    }
                })
            }
            {
                openModalCreator === true && <ModalCreation setOpenModalCreator={setOpenModalCreator} />
            }
        </div>
    )
}