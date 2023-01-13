import { useState } from "react"

export default function EditMemorys() {
    const [edit, setEdit] = useState(false);

    const changeEdit = () => {
        setEdit(!edit);
    }
    
    return (
        <div>
            <label onClick={changeEdit}>Editar recuerdos</label>
        </div>
    )
}