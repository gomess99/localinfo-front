import axios from "axios"

const baseURL = "http://localhost:3010";

export function searchLocals(categoria){
    const response = axios.get(`${baseURL}/planofree/search?categoria=${categoria}`);
    return response;
}