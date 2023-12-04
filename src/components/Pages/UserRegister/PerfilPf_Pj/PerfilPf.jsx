import React, { useState } from "react";
import { Link as RouterLink } from 'react-router-dom';
import "../PerfilPf_Pj/PerfilPf_Pj.css";
import imgBack from "../../../../img/icons/less-than.png";

function PerfilPf() {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function(event) {
        setImagePreview(event.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="perfilpj">
      <div className="perfilpf_pj-nav">
        <div className="perfilpf_pj-back">
          <RouterLink to="/registerpf">
            <img src={imgBack} alt="Icone back" />
          </RouterLink>
        </div>
        <a href="/" className="logo">
          <span className="local">Local</span>
          <span className="info2">info</span>
        </a>
      </div>

      <div className="perfilpf_pj-container">
        <div className="perfilpf_pj-conteudo">
          <div className="perfilpf_pj-conteudo-position">
            <div className="perfilpf_pj-conteudo-titulo">
              <h1>
                Bem-<span>vindo!</span>
              </h1>
              <p>Adicione uma foto para seu perfil e a sua localização</p>
            </div>

            <div className="perfilpf_pf-input">
              <div className="ficheiro">
                <label className="addimg" htmlFor="fileInput">
                  {imagePreview ? (
                    <img src={imagePreview} alt="Imagem de Perfil" className="preview-image" />
                  ) : (
                    <i className="bi bi-camera-fill" style={{ fontSize: `30px`, cursor: 'pointer' }}></i>
                  )}
                </label>
                <input
                  type="file"
                  id="fileInput"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={handleImageChange}
                />
              </div>

              <div className="perfilpf_pj-info">
                <div className="inputBox_menor">
                  <input type="text" required="required" />
                  <span>CEP</span>
                </div>
              </div>
            </div>

            <div className="perfilpf_pj-btn">
              <a href="/sucessregister_pf_pj">
                <button>Realizar cadastro</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerfilPf;
