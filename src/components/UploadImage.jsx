import axios from "axios";
import { useState } from "react"

export default function UploadImage({setUrlImage, setLoading, loading}) {

    

    const handleInputFile = (e) => {
        setLoading(1);
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            uploadImage(reader.result);
        }  
    }

    const uploadImage = async (base64EncodedImage) => {
        const data = {code: base64EncodedImage} 
        try {
            await axios(`${process.env.REACT_APP_MY_API_URL}/memory/upload`, {
                method: 'POST',
                data: data,
                headers: {'Content-type':'application/json'} 
            })
            .then(res => {
                setUrlImage(res.data);
                setLoading(2);
                setTimeout(() => {
                    setLoading(0)
                },3000)
            })
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="uploadImage">
            <input
            id='uploadImageInput'
            type='file'
            name='file'
            onChange={handleInputFile}
            />
            <label for='uploadImageInput'>Subir Imagen</label>
            {
                (loading===1 && <p>Cargando...</p>) || (loading===2 && <p>Imagen Cargada ✔️</p>)
            }
        </div>
    )
}