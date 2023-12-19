import { motion } from "framer-motion";
import React from 'react';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import "../free/free.css";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";
import imgLike from "../../../../img/icons/favorite.png";
import { findPlanoFreeById } from "../../../../services/planofreeServices";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

function Free() {
  const { id } = useParams();
  const [planofreeById, setPlanoFree] = useState({});

  async function findPlanoById() {
    try {
      const planofreeresponse = await findPlanoFreeById(id); // Adicione o id como parâmetro
      setPlanoFree(planofreeresponse.data.planofreeById);
    } catch (error) {
      console.error('Erro ao buscar dados do plano:', error);
    }
  }

  useEffect(() => {
    findPlanoById();
  }, [id]);

  const {
    categoria,
    descricao,
    likes,
    galeria,
    funcionamento,
    redessociais,
    contatos,
    name,
    email,
    avatar
  } = planofreeById;

  const img1 = galeria ? galeria.img1 : null;
  const img2 = galeria ? galeria.img2 : null;
  const img3 = galeria ? galeria.img3 : null;
  const img4 = galeria ? galeria.img4 : null;
  const img5 = galeria ? galeria.img5 : null;
  const img6 = galeria ? galeria.img6 : null;
  const img7 = galeria ? galeria.img7 : null;
  const img8 = galeria ? galeria.img8 : null;
  const img9 = galeria ? galeria.img9 : null;
  const img10 = galeria ? galeria.img10 : null;
  const img11 = galeria ? galeria.img11 : null;
  const img12 = galeria ? galeria.img12 : null;
  const img13 = galeria ? galeria.img13 : null;
  const img14 = galeria ? galeria.img14 : null;
  const { celular, telefone } = contatos || {};
  const { dia, hora, feriado } = funcionamento || {};
  const { instagram, facebook, twitter } = redessociais || {};

  const containerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: -12.231857,
    lng: -38.970061,
  };


  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyClYvOFH5TS3gEJbu_-VH8ydwLcOivnnms',
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="free-info">
        <div className="free-perfil">
          <div className="frame1-perfil">
            <div
              className="perfil-img"
              style={{ backgroundImage: `url(${avatar})` }}
            ></div>
            <div className="perfil-name">
              <div className="text-name">
                <h1>{name}</h1>
                <p>{categoria}</p>
              </div>
              <i>
                <img src={imgLike} alt="Icone like" />
                {likes}
              </i>
            </div>
          </div>
        </div>

        <div className="free-contatos-position">
          <div className="free-contatos">
            <div className="free-contatos-contato">
              <i className="bi bi-whatsapp"></i>
              <p>{celular}</p>
            </div>

            <div className="free-contatos-contato">
              <i className="bi bi-telephone"></i>
              <p>{telefone}</p>
            </div>

            <div className="free-contatos-contato">
              <i className="bi bi-envelope-at"></i>
              <p>{email}</p>
            </div>
          </div>
          <div className="free-contatos-position-barra"></div>

          <div className="free-redes">
            <div className="free-contatos-contato">
              <i className="bi bi-instagram"></i>
              <p>{instagram}</p>
            </div>
            <div className="free-contatos-contato">
              <i className="bi bi-facebook"></i>
              <p>{facebook}</p>
            </div>
            <div className="free-contatos-contato">
              <i className="bi bi-twitter-x"></i>
              <p>{twitter}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="free-aboutus">
        <div
          className="free-aboutus-img"
          style={{
            backgroundImage: `url(${img1})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div className="free-aboutus-text-carrossel">
          <p>
            {descricao}
          </p>

          <motion.div className="free-aboutus-carrossel">
            <motion.div className="inner-carrousel"
              whileTap={{ cursor: "grabbing" }}
              drag="x"
              dragConstraints={{ right: 0, left: -630 }}
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div
                className="free-aboutus-carrossel-img"
                style={{
                  backgroundImage: `url(${img2})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div
                className="free-aboutus-carrossel-img"
                style={{
                  backgroundImage: `url(${img3})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div
                className="free-aboutus-carrossel-img"
                style={{
                  backgroundImage: `url(${img4})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="free-promo">
        <div className="free-promo-titulo">
          <h1>Promoções do Dia</h1>
        </div>

        <motion.div className="free-promo-carrossel">
          <motion.div className="inner-carrousel2"
            whileTap={{ cursor: "grabbing" }}
            drag="x"
            dragConstraints={{ right: 0, left: 0 }}
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="free-promo-carrossel-img"
              style={{
                backgroundImage: `url(${img5})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="free-promo-carrossel-img"
              style={{
                backgroundImage: `url(${img6})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="free-promo-carrossel-img"
              style={{
                backgroundImage: `url(${img7})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="free-promo-carrossel-img"
              style={{
                backgroundImage: `url(${img8})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </motion.div>
        </motion.div>
      </div>
      <div className="free-local">
        <div className="free-promo-titulo">
          <h1>Como nos encontrar</h1>
        </div>
        <div className="free-local-info">
          <div className=" free-map">
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={13}
                onLoad={onLoad}
                onUnmount={onUnmount}
              >
                {/* Componentes filhos, como marcadores, janelas de informação, etc. */}
                <></>
                {map && (
                  <Marker
                    position={center}
                    map={map}
                    title="Localização do Plano"
                  // Adicione mais propriedades do marcador conforme necessário
                  />
                )}
              </GoogleMap>
            ) : (
              <div>Loading...</div>
            )}
          </div>
          <div className="free-local-funcionamento">
            <h1>Aberto agora</h1>
            <div className="hr"></div>
            <div className="free-local-funcionamento-text">
              <div className="free-contatos-contato">
                <i className="bi bi-calendar-check"></i>
                <p>{dia}</p>
              </div>
              <div className="free-contatos-contato">
                <i className="bi bi-clock"></i>
                <p>{hora}</p>
              </div>
              <div className="free-contatos-contato">
                <i className="bi bi-airplane-engines"></i>
                <p>{feriado}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="free-gallery">
        <motion.div className="free-gallery-carrossel">
          <motion.div className="inner-carrousel3"
            whileTap={{ cursor: "grabbing" }}
            drag="x"
            dragConstraints={{ right: 0, left: -1135 }}
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="free-promo-carrossel-img"
              style={{
                backgroundImage: `url(${img9})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="free-promo-carrossel-img"
              style={{
                backgroundImage: `url(${img10})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="free-promo-carrossel-img"
              style={{
                backgroundImage: `url(${img11})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="free-promo-carrossel-img"
              style={{
                backgroundImage: `url(${img12})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="free-promo-carrossel-img"
              style={{
                backgroundImage: `url(${img13})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="free-promo-carrossel-img"
              style={{
                backgroundImage: `url(${img14})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}


export default Free;
