import React from 'react';
import "../Navbar/Navbar.css";

function Navbar() {
    return (
        <header>
            <nav>
                <a href="/">Encontre Negócios</a>
                <a href="/#">Categorias</a>
                <a href="/#">Sobre-nós</a>
            </nav>
            <a href="/" className="logo">
                <span className="local">Local</span>
                <span className="info">info</span>
            </a>
            <nav>
                <a href="/#">Conecte-se</a>
                <button id="nav-btn">Inscreva-se</button>
            </nav>
        </header>
    );
}

export default Navbar;
