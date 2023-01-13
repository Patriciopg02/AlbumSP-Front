import { useCallback, useEffect, useState } from 'react';
import GetMemorys from './GetMemorys';
import './MemoryList.css';

export default function MemoryList({edit}) {

    const [memorys, setMemorys] = useState([]);

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
                    if(m.image) {
                        return (
                            <div className="evento">
                                <div className="foto">
                                    <img src={m.image} alt="img" />
                                </div>
                                <div className="description">
                                    <h3>{m.date}</h3>
                                    <p >{m.description}</p>
                                </div>
                                
                            </div>
                        )
                    }
                    else {
                        return (
                            <div className="fecha">
                                    <h3>{m.date}</h3>
                                    <p >{m.description}</p>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}