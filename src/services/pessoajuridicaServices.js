import axios from "axios"

const baseURL = "http://localhost:3010";

export function getAllPessoaJuridica(){
    const response = axios.get(`${baseURL}/pessoajuridica`); 
    return response;
}