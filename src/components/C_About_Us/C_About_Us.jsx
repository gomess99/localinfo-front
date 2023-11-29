import React from "react";
import "./C_About_Us.css";

import imgresponsivo from "../../img/imgAboutUs/imgresponsivo.png"
import imgaboutus from "../../img/imgAboutUs/imgaboutus.png"
import alvo from "../../img/imgAboutUs/alvo.png"
import coracao from "../../img/imgAboutUs/coracao.png"

import olho from "../../img/imgAboutUs/olho.png"
import pc from "../../img/imgAboutUs/pc.png"
import foguete from "../../img/imgAboutUs/foguete.png"
import comprimento from "../../img/imgAboutUs/comprimento.png"
import mapa from "../../img/imgAboutUs/mapa.png"

function C_About_Us() {
  return (
    <div className="aboutus">
      <div className="aboutus-card1">
        <div className="aboutus-card1-text">
          <h1>O melhor site de buscas comerciais da sua região</h1>
          <p>Se informe sempre onde há um negócio perto de você, acesse nosso site de onde estiver, sempre adaptado ao seu aparelho</p>
        </div>
        <div className="aboutus-card1-img">
          <img src={imgresponsivo} alt="Imagens das telas responsivas." />
        </div>
      </div>

      <div className="aboutus-card2">
        <div className="aboutus-card2-titulo">
          <h1>Cultura e Progresso</h1>
        </div>
        <div className="aboutus-card2-catoes">
          <div className="card2-cartoes">
            <h1>Empoderamento Empresarial</h1>
            <p>Se o objetivo é promover a visibilidade e o crescimento dos pequenos negócios, é provável que a cultura valorize o empoderamento dos empreendedores locais, oferecendo-lhes ferramentas e recursos para se desenvolverem.</p>
          </div>
          <div className="card2-cartoes">
            <h1>Conexão com a Comunidade</h1>
            <p>Se o site se concentra em negócios locais, a cultura pode valorizar a conexão e o envolvimento com a comunidade, priorizando o apoio mútuo e o desenvolvimento loca.</p>
            </div>
          <div className="card2-cartoes">
            <h1>Transparência e Confiança</h1>
            <p>Se o site fornece informações sobre negócios, a cultura pode valorizar a transparência e a confiança, priorizando a precisão e a confiabilidade das informações compartilhadas.</p>
          </div>
        </div>
      </div>

      <div className="aboutus-card3">
        <div className="aboutus-card3-img">
          <img src={imgaboutus} alt="Ilustração de pessoas e um quebra-cabeça" />
        </div>
        <div className="aboutus-card3-text">
          <h1>Afinal, quem somos?</h1>
          <p>Somos uma equipe de estudante que ampliaram o olhar empreendedor que alcançou o Trabalho de Conclusão de Curso. Temos o objetivo de expandi o alcance dos pequenos negócios locais.</p>
        </div>
      </div>

      <div className="aboutus-card4">
        <div className="aboutus-card4-cartao">
          <img src={alvo} alt="Icone de Missão" />
          <h1>Missão</h1>
          <p>Promovemos o crescimento dos pequenos empreendedores ao facilitar o acesso e promover suas empresas locais, reunindo informações valiosas para aumentar sua visibilidade e desenvolvimento na comunidade.</p>
        </div>

        <div className="aboutus-card4-cartao">
          <img src={coracao} alt="Icone de Valores" />
          <h1>Valores</h1>
          <p>Valorizamos a inclusão, transparência e empoderamento, promovendo a diversidade nos pequenos negócios. Fornecemos informações confiáveis, capacitamos empreendedores locais e fortalecemos conexões na comunidade.</p>
        </div>

        <div className="aboutus-card4-cartao">
          <img src={olho} alt="Icone de Visão" />
          <h1>Visão</h1>
          <p>Nosso objetivo é ser a plataforma líder em conectar e fortalecer a comunidade de pequenos negócios, oferecendo ferramentas eficazes para impulsionar a presença e o sucesso dos empreendedores locais em um mercado competitivo.</p>
        </div>
      </div>

      <div className="aboutus-card5">
        <h1>Planos Futuros</h1>
        <div className="aboutus-card5-elementos">
          <div className="aboutus-card5-elemento">
            <hr />
            <div className="aboutus-card5-text">
              <img src={foguete} alt="Icone de Foguete" />
              <p>Desenvolver e implementar novos recursos no sistema, como filtros de busca avançados, sistema de acessibilidade, avaliações de usuários, integração com outras plataformas, chat para interação entre usuários e empresas, entre outros.</p>
            </div>
          </div>

          <div className="aboutus-card5-elemento">
            <hr />
            <div className="aboutus-card5-text">
              <img src={pc} alt="Icone de Foguete" />
              <p>Aproveitar tecnologias emergentes, como inteligência artificial, realidade aumentada, ou blockchain, para inovar e melhorar os serviços oferecidos.</p>
            </div>
          </div>

          <div className="aboutus-card5-elemento">
            <hr />
            <div className="aboutus-card5-text">
              <img src={comprimento} alt="Icone de Foguete" />
              <p>Estabelecer parcerias com outras empresas ou entidades para oferecer serviços complementares ou ampliar a gama de recursos disponíveis na plataforma.</p>
            </div>
          </div>

          <div className="aboutus-card5-elemento">
            <hr />
            <div className="aboutus-card5-text">
              <img src={mapa} alt="Icone de Mapa" />
              <p>Ampliar a área de atuação, adicionando mais regiões geográficas ou cidades para incluir mais empreendedores e negócios locais.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default C_About_Us;
