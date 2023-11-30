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
          <a href="/findbusiness">Encontre Negócios</a>
          <a href="/aboutus">Sobre-nós</a>
          <a href="/#">Contate-nos</a>
          <a href="/#">Ajuda</a>
        </nav>
        
        <nav className="footer-nav-redes">
          <a href="/#"><i className="bi bi-instagram"></i></a>
          <a href="/#"><i className="bi bi-facebook"></i></a>
          <a href="/#"><i className="bi bi-linkedin"></i></a>
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
