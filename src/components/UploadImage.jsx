import axios from "axios";
import { useState } from "react"

export default function UploadImage({setUrlImage}) {

    const [loading, setLoading] = useState(0)

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
        <div>
            <input
            type='file'
            name='file'
            onChange={handleInputFile}
            />
            {
                loading===1 && <h3>Cargando...</h3> || loading===2 && <h3>Imagen Cargada ✔️</h3>
            }
        </div>
    )
}