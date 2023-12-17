import React, { useEffect, useState } from "react";
import "../CardPlan/CardPlan.css";
import { userLogged } from "../../services/pessoajuridicaServices";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { createPlanoFree } from "../../services/planofreeServices";
import { useNavigate } from "react-router-dom";

function CardPlan() {

  const navigate = useNavigate();

  const [state, setState] = useState({
    user: null,
  });

  useEffect(() => {
    const checkAuthentication = async () => {
      if (Cookies.get("token")) {
        try {
          const response = await userLogged();
          setState((prev) => ({ ...prev, user: response.data }));
        } catch (error) {
          console.log(error);
          setState((prev) => ({ ...prev, user: undefined }));
        }
      } else {
        setState((prev) => ({ ...prev, user: undefined }));
      }
    };

    checkAuthentication();
  }, []);

  const handleAuthenticationError = () => {
    Swal.fire({
      title: "Você precisa estar logado",
      text: "Para adquirir um plano, faça o login primeiro.",
      icon: "warning",
      showCancelButton: false,
      confirmButtonColor: "#0DCE8E",
      confirmButtonText: "OK",
    }).then(() => {
    });
  };

  const handleAdquirirClick = (plano) => {
    if (!state.user) {
      handleAuthenticationError();
      return;
    }

    Swal.fire({
      title: "Confirmação",
      text: `Você confirma a adição do plano ${plano}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#0DCE8E",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, adquirir!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Lógica para prosseguir com a adição do plano
        // Isso pode incluir redirecionar o usuário para a página de pagamento ou realizar outras ações necessárias
        Swal.fire({
          title: "Adquirido!",
          text: `Seu plano ${plano} foi adquirido com sucesso.`,
          icon: "success",
        });
        handleCreatePlanoFree();
        return;
      }
    });
  };

  const handleCreatePlanoFree = async (data) => {
    try {
      const token = Cookies.get("token");
      const response = await createPlanoFree(data, { headers: { Authorization: `Bearer ${token}` } });
      Cookies.set("token", response.data, { expires: 1 });
      navigate("/editarperfil");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="cardplan">
      <div className="plano-titulo-principal">
        <div className="plano-texto">
          <h1 className="plano-texto-titulo">
            O <span>melhor plano</span> para você
          </h1>
          <h2 className="plano-texto-subtitulo">
            Traga o seu negócio para nossa plataforma, faça o mesmo ser
            <span> reconhecido</span> por muito mais pessoas!
          </h2>
        </div>
      </div>

      <div className="container-planos">
        <div className="plano-card">
          <div className="plano-titulo">
            <h3>Free</h3>
          </div>
          <div className="plano-price">
            <p>
              <span>R$ 0,00</span>/ mês
            </p>
          </div>
          <div className="plano-inclui">
            <p>Inclui</p>
            <li>
              <i className="bi bi-check-circle-fill"></i>Divulgação Gratuita
            </li>
            <li>
              <i className="bi bi-check-circle-fill"></i>Promoções e Cardápios
            </li>
            <li>
              <i className="bi bi-check-circle-fill"></i>+ 20 fotos adicionais
            </li>
            <li>
              <i className="bi bi-check-circle-fill"></i>+ informações para seu negócio
            </li>
          </div>
          <a className="plano-btn" onClick={() => handleAdquirirClick("Free")}>
            Adquirir
          </a>
        </div>

        <div className="plano-card">
          <div className="plano-titulo">
            <h3>Premium</h3>
          </div>
          <div className="plano-price">
            <p>
              <span>R$ 99,90</span>/ mês
            </p>
          </div>
          <div className="plano-inclui">
            <p>Inclui</p>
            <li>
              <i className="bi bi-check-circle-fill"></i>Plano Premium
            </li>
            <li>
              <i className="bi bi-check-circle-fill"></i>Site exclusivo
            </li>
          </div>
          <a className="plano-btn" onClick={() => handleAdquirirClick("Premium")}>
            Adquirir
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardPlan;
