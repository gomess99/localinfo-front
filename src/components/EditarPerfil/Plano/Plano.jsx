import React, { useState } from "react";
import "./Plano.css";
import imgLike from "../../../img/icons/favorite.png";
import map from "../../../img/imgPlanoFree/map.png";
import { PlanoFreeUpdate } from "../../../services/planofreeServices";

function Plano(props) {
  const {
    id,
    categoria,
    descricao,
    likes,
    contatos,
    instagram,
    facebook,
    twitter,
    celular,
    telefone,
    dia,
    hora,
    feriado,
    name,
    email,
    avatar,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
  } = props;

  const [editedData, setEditedData] = useState({
    categoria,
    descricao,
    likes,
    contatos,
    instagram,
    facebook,
    twitter,
    celular,
    telefone,
    dia,
    hora,
    feriado,
    name,
    email,
    avatar,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
  });

  // Função de manipulação de alterações para campos de texto
  const handleInputChange = (field, value) => {
    setEditedData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
    console.log("editedData:", editedData); // Adicione este log
  };
  
  const handleUpdatePlanoFree = async () => {
    try {
      console.log("Dados antes da atualização:", editedData);
      const response = await PlanoFreeUpdate(id, editedData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="plano-container">
      <div className="plano">
        <div className="plano-info">
          <div className="plano-perfil">
            <div className="frame1-perfil">
              <div
                className="perfil-img"
                style={{ backgroundImage: `url(${avatar})` }}
              ></div>
              <div className="perfil-name">
                <div className="text-name">
                  <h1>{name}</h1>
                  <input
                    className="input-update"
                    value={editedData.categoria}
                    name="categoria"
                    type="text"
                    onChange={(e) => handleInputChange("categoria", e.target.value)}
                  />
                </div>
                <i>
                  <img src={imgLike} alt="Icone like" />
                  {likes}
                </i>
              </div>
            </div>
          </div>

          <div className="plano-contatos-position">
            <div className="plano-contatos">
              <div className="plano-contatos-contato">
                <i className="bi bi-whatsapp"></i>
                <p>{celular}</p>
                <input
                    className="input-update"
                    value={editedData.celular}
                    name="celular"
                    type="text"
                    onChange={(e) => handleInputChange("celular", e.target.value)}
                  />
              </div>

              <div className="plano-contatos-contato">
                <i className="bi bi-telephone"></i>
                <p>{telefone}</p>
              </div>

              <div className="plano-contatos-contato">
                <i className="bi bi-envelope-at"></i>
                <p>{email}</p>
              </div>
            </div>

            <div className="plano-contatos-position-barra"></div>

            <div className="plano-redes">
              <div className="plano-contatos-contato">
                <i className="bi bi-instagram"></i>
                <p>{instagram}</p>
              </div>
              <div className="plano-contatos-contato">
                <i className="bi bi-facebook"></i>
                <p>{facebook}</p>
              </div>
              <div className="plano-contatos-contato">
                <i className="bi bi-twitter-x"></i>
                <p>{twitter}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="plano-aboutus">
          <div
            className="plano-aboutus-img"
            style={{
              backgroundImage: `url(${img1})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          <div className="plano-aboutus-text-carrossel">
            <p>{descricao}</p>

            <div className="plano-aboutus-carrossel">
              <div
                className="plano-aboutus-carrossel-img"
                style={{
                  backgroundImage: `url(${img2})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div
                className="plano-aboutus-carrossel-img"
                style={{
                  backgroundImage: `url(${img3})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div
                className="plano-aboutus-carrossel-img"
                style={{
                  backgroundImage: `url(${img4})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="plano-promo">
          <div className="plano-promo-titulo">
            <h1>Promoções do Dia</h1>
          </div>

          <div className="plano-promo-carrossel">
            <div
              className="plano-promo-carrossel-img"
              style={{
                backgroundImage: `url(${img5})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="plano-promo-carrossel-img"
              style={{
                backgroundImage: `url(${img6})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="plano-promo-carrossel-img"
              style={{
                backgroundImage: `url(${img7})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="plano-promo-carrossel-img"
              style={{
                backgroundImage: `url(${img8})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        </div>
        <div className="plano-local">
          <div className="plano-promo-titulo">
            <h1>Como nos encontrar</h1>
          </div>
          <div className="plano-local-info">
            <div
              className="plano-map"
              style={{
                backgroundImage: `url(${map})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="plano-local-funcionamento">
              <h1>Aberto agora</h1>
              <div className="hr"></div>
              <div className="plano-local-funcionamento-text">
                <div className="plano-contatos-contato">
                  <i className="bi bi-calendar-check"></i>
                  <p>{dia}</p>
                </div>
                <div className="plano-contatos-contato">
                  <i className="bi bi-clock"></i>
                  <p>{hora}</p>
                </div>
                <div className="plano-contatos-contato">
                  <i className="bi bi-airplane-engines"></i>
                  <p>{feriado}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="plano-gallery">
          <div className="plano-gallery-carrossel">
            <div
              className="plano-promo-carrossel-img"
              style={{
                backgroundImage: `url(${img9})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="plano-promo-carrossel-img"
              style={{
                backgroundImage: `url(${img10})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="plano-promo-carrossel-img"
              style={{
                backgroundImage: `url(${img11})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
          <div className="plano-gallery-carrossel">
            <div
              className="plano-promo-carrossel-img"
              style={{
                backgroundImage: `url(${img12})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="plano-promo-carrossel-img"
              style={{
                backgroundImage: `url(${img13})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="plano-promo-carrossel-img"
              style={{
                backgroundImage: `url(${img14})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div onClick={handleUpdatePlanoFree} className="planoedit-botao">
        <button>Salvar alterações</button>
      </div>
    </div>
  );
}

export default Plano;
