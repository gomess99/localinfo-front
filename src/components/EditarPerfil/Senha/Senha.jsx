import React, { useState, useEffect, useRef } from "react";
import "./Senha.css";
import imgEdit from "../../../img/icons/vector.png";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { userLogged, userUpdate, comparePasswords } from "../../../services/pessoajuridicaServices";

function Senha() {
  const [user, setUser] = useState({
    password: "",
    newPassword: "",
  });
  const [userId, setUserId] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const imageInputRef = useRef(null);

  useEffect(() => {
    const verificarAutenticacao = async () => {
      if (Cookies.get("token")) {
        try {
          const response = await userLogged();
          setUser({
            ...response.data,
            password: "",
            newPassword: "",
          });
          setUserId(response.data?._id);
        } catch (error) {
          console.log(error);
          setUser({
            password: "",
            newPassword: "",
          });
          setUserId(null);
        }
      } else {
        setUser({
          password: "",
          newPassword: "",
        });
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

      const isPasswordValid = await comparePasswords(userId, user.password);

      if (!isPasswordValid) {
        Swal.fire({
          title: "Erro",
          text: "Senha atual incorreta. Por favor, verifique e tente novamente.",
          icon: "error",
        });
        return;
      }

      await Swal.fire({
        title: "Confirmação",
        text: "Salvar alterações?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#0DCE8E",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim, alterar senha.",
        cancelButtonText: "Não.",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await handleUpdatePerfil();
          Swal.fire({
            title: "Alteração salva!",
            text: "Sua nova senha foi salva com sucesso.",
            icon: "success",
          });
        }
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Erro",
        text: "Ocorreu um erro ao salvar a senha.",
        icon: "error",
      });
    }
  };

  const handleUpdatePerfil = async () => {
    try {
      if (!userId) {
        console.error("ID do usuário não disponível.");
        return;
      }

      const userData = {
        password: user.newPassword,
      };

      const response = await userUpdate(userId, userData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
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
              type={showPassword ? "text" : "password"}
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
              value={user.newPassword || ""}
              type={showNewPassword ? "text" : "password"}
              name="newPassword"
              onChange={handleInputChange}
            />
            <span>Nova Senha</span>
            <div style={{ transform: 'translateX(290px) translateY(-42px)' }} className="showPassword-dados">
              {showNewPassword ? (
                <i
                  className="bi bi-eye-fill"
                  onClick={toggleNewPasswordVisibility}
                ></i>
              ) : (
                <i
                  className="bi bi-eye-slash-fill"
                  onClick={toggleNewPasswordVisibility}
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
