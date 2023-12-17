import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "http://localhost:3010";

export function singup(data) {
  delete data.confirmPassword;
  const body = {
    ...data,
    username: generateUserName(data.name),
    avatar: "https://uploaddeimagens.com.br/images/004/692/619/original/icon.png?1702777124",
    redessociais: {
      instagram: "@instagram",
      facebook: "@facebook",
      twitter: "@twitter",
    },
    contatos: { celular: "75982065675", telefone: "75982065675" },
    endereco: { endereco1: "Rua JavaScript", endereco2: "Rua React" },
  };
  const response = axios.post(`${baseURL}/pessoajuridica/create`, body);
  return response;
}

function generateUserName(name) {
  const nameLowerCaseWithoutSpaces = name.replace(/\s/g, "").toLowerCase();
  const randomNumber = Math.floor(Math.random() * 1000);
  return `${nameLowerCaseWithoutSpaces}-${randomNumber}`;
}

export function signin(data) {
  const response = axios.post(`${baseURL}/auth/authpj`, data);
  return response;
}

export function userLogged() {
  const response = axios.get(`${baseURL}/pessoajuridica/findById`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}
