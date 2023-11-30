import axios from "axios";

const baseURL = "http://localhost:3010";

// export function getAllPessoaJuridica() {
//   const response = axios.get(`${baseURL}/pessoajuridica`);
//   return response;
// }

export function singup(data) {
  delete data.confirmPassword;
  delete data.cpf;
  const body = {
    ...data,
    username: generateUserName(data.name),
    avatar: "https://i.imgur.com/xml",
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
  const response = axios.post(`${baseURL}/auth/authpf`, data);
  return response;
}

// export function signinPessoaFisica(data) {
//   const response = axios.post(`${baseURL}/auth/authpf`, data);
//   return response;
// }

export function signinPessoaJuridica(data) {
  const response = axios.post(`${baseURL}/auth/authpj`, data);
  return response;
}
