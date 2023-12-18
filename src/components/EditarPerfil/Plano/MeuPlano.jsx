import React from "react";
import "./MeuPlano.css";
import Swal from "sweetalert2";
import { deletePlanoFreeById } from "../../../services/planofreeServices";

function MeuPlano(props) {

    const {
        id,
      } = props;
    
  const handleCancelarClick = (plano) => {
    Swal.fire({
      title: "Confirmação",
      text: `Você realmente deseja cancelar o plano ${plano}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#0DCE8E",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, cancelar.",
      cancelButtonText: "Não, manter.",
    }).then((result) => {
      if (result.isConfirmed) {
        // Lógica para prosseguir com o cancelamento do plano
        // Certifique-se de fornecer o ID do plano ao chamar handleDeletePlanoFree
        Swal.fire({
          title: "Assinatura cancelada!",
          text: `Seu plano ${plano} foi cancelado com sucesso.`,
          icon: "success",
        });
        handleDeletePlanoFree(); // Fornecer o ID do plano para a função
        return;
      }
    });
  };

  async function handleDeletePlanoFree() {
    try {
      if (!id) {
        console.error("ID do plano não disponível.");
        return;
      }
      const response = await deletePlanoFreeById(id);
      // Faça algo com a resposta, se necessário
    } catch (error) {
      console.log(error);
    }
  }
  

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
        <a
          className="meuplano-btn-cancelar"
          onClick={() => handleCancelarClick("Free")}
        >
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
        <a
          className="meuplano-btn"
          onClick={() => handleAdquirirClick("Premium")}
        >
          Adquirir
        </a>
      </div>
    </div>
  );
}

export default MeuPlano;
