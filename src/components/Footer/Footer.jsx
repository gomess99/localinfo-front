import React from "react";
import "../Footer/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container1">
        <a href="/" className="logo">
          <span className="local-footer">Local</span>
          <span className="info-footer">info</span>
        </a>
        <nav className="footer-nav">
          <a href="/">Encontre Negócios</a>
          <a href="/#">Sobre-nós</a>
          <a href="/#">Ajuda</a>
          <a href="/#">Suporte</a>
        </nav>
        
        <nav className="footer-nav-redes">
          <a href="/#">Icon Insta</a>
          <a href="/#">Icon Face</a>
          <a href="/#">Icon Twiter</a>
        </nav>
      </div>
      <div className="container2">
        <nav className="footer-nav">
        <a href="/">&copy; 2023 Localinfo</a>
          <a href="/#">Termos</a>
          <a href="/#">Privacidades</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
