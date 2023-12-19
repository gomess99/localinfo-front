import React, { useState, useEffect, useRef } from "react";
import "./Senha.css";
import imgEdit from "../../../img/icons/vector.png";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { userLogged, userUpdate } from "../../../services/pessoajuridicaServices";

function Senha() {
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
        password: user.password,
      };

      const response = await userUpdate(userId, userData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordC, setShowPasswordC] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordCVisibility = () => {
    setShowPasswordC(!showPasswordC);
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
              style={{ display: "none" }}
              ref={imageInputRef}
            />
          </div>
          <div className="perfil-name">
            <div className="text-name">
              <h1>{user.name}</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="dados-inputs">
        <div className="dados-inputs-grup-senha">
          <div className="inputBox dados-input">
            <input
              value={user.password || ""}
              type="text"
              name="password"
              onChange={handleInputChange}
            />
            <span>Senha Atual</span>
            <div style={{ transform: 'translateX(290px) translateY(-42px)' }} className="showPassword-dados">
              {showPassword ? (
                <i
                  className="bi bi-eye-fill"
                  onClick={togglePasswordVisibility}
                ></i>
              ) : (
                <i
                  className="bi bi-eye-slash-fill"
                  onClick={togglePasswordVisibility}
                ></i>
              )}
            </div>
          </div>

          <div className="inputBox dados-input">
          <input
              value={user.password || ""}
              type="text"
              name="password"
              onChange={handleInputChange}
            />
            <span>Nova senha</span>
            <div style={{ transform: 'translateX(290px) translateY(-42px)' }} className="showPassword-dados">
              {showPasswordC ? (
                <i
                  className="bi bi-eye-fill"
                  onClick={togglePasswordCVisibility}
                ></i>
              ) : (
                <i
                  className="bi bi-eye-slash-fill"
                  onClick={togglePasswordCVisibility}
                ></i>
              )}
            </div>
          </div>
        </div>
      </div>

      <div onClick={handleSalvarClick} className="dados-botao">
        <button>Salvar alterações</button>
      </div>
    </div>
  );
}

export default Senha;
