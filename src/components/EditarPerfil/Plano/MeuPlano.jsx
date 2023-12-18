import React, { useState } from "react";
import "./MeuPlano.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function MeuPlano() {
  const [state, setState] = useState({
    user: null,
  });

  const navigate = useNavigate();

  const handleCancelar = async () => {
    const confirmationResult = await Swal.fire({
      title: "Realmente deseja cancelar o plano?",
      text: "Essa ação não poderá ser desfeita.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#0DCE8E",
      confirmButtonText: "Sim, cancelar!",
    });

    if (confirmationResult.isConfirmed) {
      // Lógica para cancelar o plano (excluir o plano, ou qualquer outra lógica necessária)
      // Substitua a linha abaixo pela lógica real para cancelar o plano
      // await cancelarPlano();

      Swal.fire({
        title: "Cancelado!",
        text: "Seu plano foi cancelado com sucesso.",
        icon: "success",
      });
      navigate("/editarperfil");
    }
  };

  return (
    <div className="meuplano">
      <div className="meuplano-card">
        <div className="meuplano-titulo">
          <h3>Free</h3>
        </div>
        <div className="meuplano-price">
          <p>
            <span>R$ 0,00</span>/ mês
          </p>
        </div>
        <div className="meuplano-inclui">
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
            <i className="bi bi-check-circle-fill"></i>+ informações para seu
            negócio
          </li>
        </div>
        <a className="meuplano-btn-cancelar" onClick={handleCancelar}>
          Cancelar
        </a>
      </div>
      <div className="meuplano-card">
        <div className="meuplano-titulo">
          <h3>Premium</h3>
        </div>
        <div className="meuplano-price">
          <p>
            <span>R$ 99,90</span>/ mês
          </p>
        </div>
        <div className="meuplano-inclui">
          <p>Inclui</p>
          <li>
            <i className="bi bi-check-circle-fill"></i>Plano Free
          </li>
          <li>
            <i className="bi bi-check-circle-fill"></i>Perfil verificado
          </li>
          <li>
            <i className="bi bi-check-circle-fill"></i>+ fotos adicionais
          </li>
          <li>
            <i className="bi bi-check-circle-fill"></i>+ administração ao perfil
          </li>
        </div>
        <a className="meuplano-btn" onClick={() => handleAdquirirClick("Free")}>
          Adquirir
        </a>
      </div>
    </div>
  );
}

export default MeuPlano;
