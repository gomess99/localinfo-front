import React from "react";
import "../Premium/Premium.css";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";

function Premium() {
  return (
    <div>
      <Navbar />
      <div className="premium-info">
        <div className="premium-perfil">
          <div className="premium-perfil-foto"></div>
          <div className="premium-perfil-info">
            <div className="premium-perfil-text">
              <div className="premium-perfil-text-name">
                <h1>Nome do Estabelecimento</h1>
                <div className="verificado"></div>
              </div>
              <p>Categoria</p>
            </div>
            <div className="premium-perfil-avaliacao">
              <h1>Curtidas</h1>
              <p>100</p>
            </div>
          </div>
        </div>

        <div className="premium-contatos">
          <div className="premium-contatos-contato">
            <div className="verificado"></div>
            <p>75 98206-5448</p>
          </div>

          <div className="premium-contatos-contato">
            <div className="verificado"></div>
            <p>75 3242-5448</p>
          </div>

          <div className="premium-contatos-contato">
            <div className="verificado"></div>
            <p>loja@gmail.com</p>
          </div>
        </div>

        <div className="premium-redes">
          <div className="premium-contatos-contato">
            <div className="verificado"></div>
            <p>@loja01</p>
          </div>
          <div className="premium-contatos-contato">
            <div className="verificado"></div>
            <p>@loja01</p>
          </div>
          <div className="premium-contatos-contato">
            <div className="verificado"></div>
            <p>@loja01</p>
          </div>
        </div>
      </div>
      <div className="premium-aboutus">
        <div className="premium-aboutus-img"></div>

        <div className="premium-aboutus-text-carrossel">
          <p>
            O estabelecimento X oferece o melhor atendimento e os melhores
            pratos da cidade. Desde 1980, trazendo os sabores da França para a
            região, confira agora nosso restaurante e as promoções do dia. Seja
            bem-vindo
          </p>

          <div className="premium-aboutus-carrossel">
            <div className="premium-aboutus-carrossel-img"></div>
            <div className="premium-aboutus-carrossel-img"></div>
            <div className="premium-aboutus-carrossel-img"></div>
          </div>
        </div>
      </div>
      <div className="premium-promo">
        <div className="premium-promo-titulo">
          <h1>Promoções do Dia</h1>
        </div>

        <div className="premium-promo-carrossel">
          <div className="premium-promo-carrossel-img"></div>
          <div className="premium-promo-carrossel-img"></div>
          <div className="premium-promo-carrossel-img"></div>
          <div className="premium-promo-carrossel-img"></div>
        </div>
      </div>
      <div className="premium-local">
        <div className="premium-promo-titulo">
          <h1>Como nós encontrar</h1>
        </div>
        <div className="premium-local-info">
          <div className="premium-map"></div>
          <div className="premium-local-funcionamento">
            <div className="premium-contatos-contato">
              <div className="verificado"></div>
              <p>De Segunda a Sábado</p>
            </div>
            <div className="premium-contatos-contato">
              <div className="verificado"></div>
              <p>Aberto das 08h - 12h e das 14h - 18h</p>
            </div>
            <div className="premium-contatos-contato">
              <div className="verificado"></div>
              <p>Fechado aos feriados</p>
            </div>
          </div>
        </div>
      </div>
      <div className="premium-gallery">
        <div className="premium-gallery-carrossel">
          <div className="premium-promo-carrossel-img"></div>
          <div className="premium-promo-carrossel-img"></div>
          <div className="premium-promo-carrossel-img"></div>
        </div>
        <div className="premium-gallery-carrossel">
          <div className="premium-promo-carrossel-img"></div>
          <div className="premium-promo-carrossel-img"></div>
          <div className="premium-promo-carrossel-img"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Premium;
