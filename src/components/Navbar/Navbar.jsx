import React from 'react';
import "../Navbar/Navbar.css";

function Navbar() {
    return (
        <header className='header'>
            <nav className='header-nav'>
                <a href="/">Encontre Negócios</a>
                <a href="/#">Categorias</a>
                <a href="/#">Sobre-nós</a>
            </nav>
            <a href="/" className="logo">
                <span className="local">Local</span>
                <span className="info2">info</span>
            </a>
            <nav className='header-conect'>
                <a href="/#">Conecte-se</a>
                <span className="point">.</span>
                <button className='header-btn   '>Inscreva-se</button>
            </nav>
        </header>
    );
}

export default Navbar;
