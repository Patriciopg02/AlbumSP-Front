import { useCallback, useEffect, useState } from 'react';
import EditMemory from './EditMemory';
import GetMemorys from './GetMemorys';
import './MemoryList.css';

export default function MemoryList({ edit }) {

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
                                    <div>
                                        <button onClick={() => editFunction(m._id)}>Edit</button>
                                        <button onClick={deleteFunction}>Delete</button>
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
                                    editModal === m._id && <EditMemory setEditModal={setEditModal} id={m._id} date={m.date} description={m.description}/>
                                }
                                {/* {
                                    deleteModal && <DeleteMemory setDeleteModal={setDeleteModal} id={m._id}/>
                                } */}
                            </div>
                        )
                    }
                    else {
                        return (
                            <div className="fecha">
                                {
                                    edit &&
                                    <div>
                                        <button key={m._id} onClick={editFunction}>Edit</button>
                                        <button key={m._id} onClick={deleteFunction}>Delete</button>
                                    </div>
                                }
                                <h3>{m.date}</h3>
                                <p >{m.description}</p>
                                {
                                    editModal === m._id && <EditMemory setEditModal={setEditModal} id={m._id} date={m.date} description={m.description}/>
                                }
                                {/* {
                                    deleteModal && <DeleteMemory setDeleteModal={setDeleteModal} id={m._id}/>
                                } */}
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}