import axios from "axios"
import Cookies from "js-cookie";

const baseURL = "http://localhost:3010";

export function getAllPlanoFree() {
    const response = axios.get(`${baseURL}/planofree`);
    return response;
}

export function createPlanoFree() {
    const config = {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
        },
    };
    console.log("Token:", Cookies.get("token"));
    const body = {
        categoria: "Categoria",
        descricao: "Descrição do seu serviço",
        galeria: {
            img1: "https://uploaddeimagens.com.br/images/004/692/629/full/Frame_121.png?1702779447",
            img2: "https://uploaddeimagens.com.br/images/004/692/629/full/Frame_121.png?1702779447",
            img3: "https://uploaddeimagens.com.br/images/004/692/629/full/Frame_121.png?1702779447",
            img4: "https://uploaddeimagens.com.br/images/004/692/629/full/Frame_121.png?1702779447",
            img5: "https://uploaddeimagens.com.br/images/004/692/629/full/Frame_121.png?1702779447",
            img6: "https://uploaddeimagens.com.br/images/004/692/629/full/Frame_121.png?1702779447",
            img7: "https://uploaddeimagens.com.br/images/004/692/629/full/Frame_121.png?1702779447",
            img8: "https://uploaddeimagens.com.br/images/004/692/629/full/Frame_121.png?1702779447",
            img9: "https://uploaddeimagens.com.br/images/004/692/629/full/Frame_121.png?1702779447",
            img10: "https://uploaddeimagens.com.br/images/004/692/629/full/Frame_121.png?1702779447",
            img11: "https://uploaddeimagens.com.br/images/004/692/629/full/Frame_121.png?1702779447",
            img12: "https://uploaddeimagens.com.br/images/004/692/629/full/Frame_121.png?1702779447",
            img13: "https://uploaddeimagens.com.br/images/004/692/629/full/Frame_121.png?1702779447",
            img14: "https://uploaddeimagens.com.br/images/004/692/629/full/Frame_121.png?1702779447",
            img15: "https://uploaddeimagens.com.br/images/004/692/629/full/Frame_121.png?1702779447",
            img16: "https://uploaddeimagens.com.br/images/004/692/629/full/Frame_121.png?1702779447",
            img17: "https://uploaddeimagens.com.br/images/004/692/629/full/Frame_121.png?1702779447",
            img18: "https://uploaddeimagens.com.br/images/004/692/629/full/Frame_121.png?1702779447",
            img19: "https://uploaddeimagens.com.br/images/004/692/629/full/Frame_121.png?1702779447",
            img20: "https://uploaddeimagens.com.br/images/004/692/629/full/Frame_121.png?1702779447"
        },
        funcionamento: {
            dia: "Aberto de Terça a Domingo",
            hora: "Das 17hs às 22hs",
            feriado: "Aberto aos feriados"
        },
        redessociais: {
            instagram: "@instagram",
            facebook: "@facebook",
            twitter: "@twitter",
        },
        contatos: {
            celular: "75982065675",
            telefone: "75982065675",
            email: "seuemail@profissional.com.br"
        },
        endereco: {
            endereco1: "seu_endereco1",
            endereco2: "seu_endereco1"
        },
    };
    const response = axios.post(`${baseURL}/planofree/create`, body, config);
    return response;
}

export function findPlanoFreeByUserId() {
    const response = axios.get(`${baseURL}/planofree/byPessoaJuridica`, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
        },
    });
    return response;
}

export async function deletePlanoFreeById(id) {
    try {
      const response = await axios.delete(`${baseURL}/planofree/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Erro em deletePlanoFreeById:", error);
      throw error;
    }
  }

  export async function likesPlanoFreeById(id) {
    try {
        const response = await axios.patch(`${baseURL}/planofree/${id}/likes`, {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        });
        return response.data;
      } catch (error) {
        console.error("Erro em likePlanoFreeById:", error);
        throw error;
      }

  }
  


