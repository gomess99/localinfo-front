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
                <ul className={active}>
                    <li className="nav__item">
                        <a href="/findbusiness" className="nav__link">
                            Encontre Negócios
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="" className="nav__link">
                            Categorias
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="/aboutus" className="nav__link">
                            Sobre-nós
                        </a>
                    </li>
                </ul>
            </nav>
            <a href="/" className="logo">
                <span className="local">Local</span>
                <span className="info2">info</span>
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
