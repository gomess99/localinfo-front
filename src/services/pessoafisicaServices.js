import axios from "axios"
import Cookies from "js-cookie";

const baseURL = "http://localhost:3010";

export function getAllPessoaFisica(){
    const response = axios.get(`${baseURL}/pessoafisica`);
    return response;
}

export function singupPf(data) {
    delete data.confirmPassword;
    const body = {
      ...data,
      username: generateUserNamePf(data.name),
      avatar: "https://cdn-icons-png.flaticon.com/512/5987/5987462.png",
    };
    const response = axios.post(`${baseURL}/pessoafisica/create`, body);
    return response;
  }

  function generateUserNamePf(name) {
    const nameLowerCaseWithoutSpaces = name.replace(/\s/g, "").toLowerCase();
    const randomNumber = Math.floor(Math.random() * 1000);
    return `${nameLowerCaseWithoutSpaces}-${randomNumber}`;
  }

  export function userLoggedPf() {
    const response = axios.get(`${baseURL}/pessoafisica/findById`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    return response;
  }

  export function signinPf(data) {
    const response = axios.post(`${baseURL}/auth/authpf`, data);
    return response;
  }