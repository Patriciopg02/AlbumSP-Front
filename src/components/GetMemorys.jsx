import axios from "axios";

export default async function GetMemorys() {
    const response = await axios.get(`${process.env.REACT_APP_MY_API_URL}/memory`);
    return response;
}