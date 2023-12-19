import React, { useState, useEffect } from "react";
import "./Dados.css";
import imgEdit from "../../../img/icons/vector.png";
import { userLogged, userUpdate } from "../../../services/pessoajuridicaServices";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

function Dados() {
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const verificarAutenticacao = async () => {
      if (Cookies.get("token")) {
        try {
          const resposta = await userLogged();
          setUser(resposta.data);
          setUserId(resposta.data._id); // Assumindo que o _id está diretamente em resposta.data
        } catch (erro) {
          console.log(erro);
          setUser({});
          setUserId(null);
        }
      } else {
        setUser({});
        setUserId(null);
      }
    };

    verificarAutenticacao();
  }, []);

  const renderizarCPFParcial = (cpfCompleto) => {
    const ultimos4Digitos = cpfCompleto.slice(-4);
    const digitosOcultos = "***.***";
    return `${digitosOcultos}-${ultimos4Digitos}`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((usuarioAnterior) => ({
      ...usuarioAnterior,
      [name]: value,
    }));
  };

  const handleSalvarClick = async () => {
    const confirmacao = await Swal.fire({
      title: "Confirmação",
      text: `Salvar alterações?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#0DCE8E",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, salvar.",
      cancelButtonText: "Não.",
    });

    console.log(user)
    console.log(userId)

    if (confirmacao.isConfirmed) {
      try {
        if (!userId) {
          console.error("ID do usuário não disponível.");
          return;
        }

        await userUpdate(userId, user);
        Swal.fire({
          title: "Alteração salva!",
          text: "Seu perfil foi salvo com sucesso.",
          icon: "success",
        });
      } catch (error) {
        console.log(error);
        Swal.fire({
          title: "Erro",
          text: "Ocorreu um erro ao salvar as alterações.",
          icon: "error",
        });
      }
    }
  };

  return (
    <div className="dados">
      <div className="premium-perfil perfil-dados">
        <div className="frame1-perfil">
          <div
            className="perfil-img"
            style={{ backgroundImage: `url(${user.avatar})` }}
          >
            <button className="editar">
              <img src={imgEdit} alt="Lápis de edição" />
            </button>
          </div>
          <div className="perfil-name">
            <div className="text-name">
              <h1>{user.name}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="dados-inputs">
        <div className="dados-inputs-grup">
          <div className="inputBox dados-input">
            <input
              value={user.name || ""}
              type="text"
              name="name"
              onChange={handleInputChange}
            />
            <span>Nome fantasia</span>
          </div>
          <div className="inputBox dados-input">
            <input
              value={user.username || ""}
              type="text"
              name="username"
              onChange={handleInputChange}
            />
            <span>Nome de usuário</span>
          </div>
        </div>
        <div className="dados-inputs-grup">
          <div className="inputBox dados-input">
            <input
              value={user.email || ""}
              type="text"
              name="email"
              onChange={handleInputChange}
            />
            <span>E-mail</span>
          </div>
          <div className="inputBox dados-input">
            <input
              style={{ cursor: "not-allowed" }}
              value={renderizarCPFParcial(user.cpf || "")}
              type="text"
              name="cpf"
              readOnly
            />
            <span>CPF</span>
          </div>
        </div>
      </div>
      <div onClick={handleSalvarClick} className="dados-botao">
        <button>Salvar alterações</button>
      </div>
    </div>
  );
}

export default Dados;
