import React, { useState, useEffect } from "react";
import "./Dados.css";
import imgEdit from "../../../img/icons/vector.png";
import { userLogged, userUpdate } from "../../../services/pessoajuridicaServices";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

function Dados() {
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState(null);
  const [state, setState] = useState({ user: null });

  useEffect(() => {
    const verificarAutenticacao = async () => {
      if (Cookies.get("token")) {
        try {
          const response = await userLogged();
          setState((prev) => ({ ...prev, user: response.data }));
          setUser(response.data);
          setUserId(response.data?._id); // Assumindo que o _id está diretamente em response.data
        } catch (erro) {
          console.log(erro);
          setState((prev) => ({ ...prev, user: undefined }));
          setUser({});
          setUserId(null);
        }
      } else {
        setUser({});
        setState((prev) => ({ ...prev, user: undefined }));
        setUserId(null);
      }
    };

    verificarAutenticacao();
  }, []);

  const handleSalvarClick = () => {
    Swal.fire({
      title: "Confirmação",
      text: "Salvar alterações?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#0DCE8E",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, salvar.",
      cancelButtonText: "Não.",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          if (!userId) {
            console.error("ID do usuário não disponível.");
            return;
          }
          Swal.fire({
            title: "Alteração salva!",
            text: "Seu perfil foi salvo com sucesso.",
            icon: "success",
          });
          handleUpdatePerfil();
        } catch (error) {
          console.log(error);
          Swal.fire({
            title: "Erro",
            text: "Ocorreu um erro ao salvar as alterações.",
            icon: "error",
          });
        }
      }
    });
  };

  const handleUpdatePerfil = async () => {
    try {
      if (!userId) {
        console.error("ID do plano não disponível.");
        return;
      }

      const userData = {
        name: user.name,
        username: user.username,
        email: user.email,
        // Adicione outros campos conforme necessário
      };

      const response = await userUpdate(userId, userData);
      // Faça algo com a resposta, se necessário
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const renderizarCPFParcial = (cpfCompleto) => {
    const ultimos4Digitos = cpfCompleto?.slice(-4);
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
              value={renderizarCPFParcial(user.cpf)}
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
