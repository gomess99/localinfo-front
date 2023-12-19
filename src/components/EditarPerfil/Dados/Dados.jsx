import React, { useState, useEffect, useRef } from "react";
import "./Dados.css";
import imgEdit from "../../../img/icons/vector.png";
import { userLogged, userUpdate } from "../../../services/pessoajuridicaServices";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

function Dados() {
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const imageInputRef = useRef(null);

  useEffect(() => {
    const verificarAutenticacao = async () => {
      if (Cookies.get("token")) {
        try {
          const response = await userLogged();
          setUser(response.data);
          setUserId(response.data?._id);
        } catch (error) {
          console.log(error);
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

  const handleSalvarClick = async () => {
    try {
      if (!userId) {
        console.error("ID do usuário não disponível.");
        return;
      }

      await Swal.fire({
        title: "Confirmação",
        text: `Salvar alterações?`,
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#0DCE8E",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim, salvar.",
        cancelButtonText: "Não.",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await handleUpdatePerfil();
          Swal.fire({
            title: "Alteração salva!",
            text: "Seu perfil foi salvo com sucesso.",
            icon: "success",
          });
        }
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Erro",
        text: "Ocorreu um erro ao salvar as alterações.",
        icon: "error",
      });
    }
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
      };

      const response = await userUpdate(userId, userData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
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
            className="perfil-img -dados"
            style={{ backgroundImage: `url(${imagePreview || user.avatar})` }}
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
              ref={imageInputRef}
            />
            <button
              className="editar"
              onClick={() => imageInputRef.current.click()}
            >
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
