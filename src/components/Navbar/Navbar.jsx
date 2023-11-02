import React, { useState } from "react";
import "../Navbar/Navbar.css";

function Navbar() {
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
        if (active === "nav__menu") {
            setActive("nav__menu nav__active");
        } else setActive("nav__menu");

        // Icon Toggler
        if (icon === "nav__toggler") {
            setIcon("nav__toggler toggle");
        } else setIcon("nav__toggler");
    };
    return (
        <header className="header">
            <div onClick={navToggle} className={icon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>

            <nav className="nav">
                <div className="nav-v2">
                    <ul className={active}>
                        <li className="nav__item">
                            <a href="/findbusiness" className="nav__link">
                                Encontre Negócios
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="/categories" className="nav__link">
                                Categorias
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="/aboutus" className="nav__link">
                                Sobre-nós
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="/plan" className="nav__link">
                                Planos
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <a href="/" className="logo">
                <span className="local-nav">Local</span>
                <span className="info-nav">info</span>
            </a>
            <nav className="nav__left">
                <a href="#" className="nav__link">
                    Conecte-se
                </a>
                <span className="point">.</span>
                <button href="#" className='nav-btn'>Inscreva-se</button>
            </nav>
        </header>
    );
}

export default Navbar;
