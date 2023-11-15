import axios from "axios"

const baseURL = "http://localhost:3010";

export function getAllPlanoFree(){
    const response = axios.get(`${baseURL}/planofree`); 
    return response;
}


