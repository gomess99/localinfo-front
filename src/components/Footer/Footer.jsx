import React from "react";
import "../Footer/Footer.css";

function Footer() {
  return (
    <footer>
      <div>
        <a href="/" className="logo">
          <span className="local">Local</span>
          <span className="info">info</span>
        </a>
        <nav>
          <a href="/">Encontre Negócios</a>
          <a href="/#">Categorias</a>
          <a href="/#">Sobre-nós</a>
        </nav>
        
        <nav>
          <a href="/#">Icon Insta</a>
          <a href="/#">Icon Face</a>
          <a href="/#">Icon Twiter</a>
        </nav>
      </div>
      <div className="container">
        <nav>
        <a href="/">&copy; 2023 Localinfo</a>
          <a href="/#">Termos</a>
          <a href="/#">Privacidades</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
