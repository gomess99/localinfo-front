import React, { useState } from "react";
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import "../Navbar/Navbar.css";


function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");

  const navToggle = () => {
    setActive(active === "nav__menu" ? "nav__menu nav__active" : "nav__menu");
    setIcon(icon === "nav__toggler" ? "nav__toggler toggle" : "nav__toggler");
  };

  function scrollToCarousel() {
    scroll.scrollTo('carouselCategories', {
      smooth: true,
      offset: -50,
    });
  }

  const navigationItems = [
    { id: 1, text: 'Encontre Negócios', link: '/findbusiness' },
    { id: 2, text: 'Categorias', link: 'carouselCategories', onClick: scrollToCarousel },
    { id: 3, text: 'Sobre-nós', link: '/aboutus' },
    { id: 4, text: 'Planos', link: '/plan' },
    { id: 5, text: 'Conecte-se', link: '/login' },
  ];

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
            {navigationItems.map(item => (
              <li key={item.id} className={`nav__item ${item.id === 5 ? 'nav__item-5' : ''}`}>
                {item.onClick ? (
                  <ScrollLink
                    to={item.link}
                    className="nav__link"
                    smooth={true}
                    offset={-50}
                    onClick={item.onClick}
                  >
                    {item.text}
                  </ScrollLink>
                ) : (
                  <RouterLink to={item.link} className="nav__link">
                    {item.text}
                  </RouterLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <RouterLink to="/" className="logo">
        <span className="local-nav">Local</span>
        <span className="info-nav">info</span>
      </RouterLink>

      <nav className="nav__left">
        <RouterLink to="/login" className="nav__link" id="connect-btn">
          Conecte-se
        </RouterLink>
        <span className="point">.</span>
        <RouterLink to="/userregister">
          <button className='nav-btn'>Inscreva-se</button>
        </RouterLink>
      </nav>
    </header>
  );
}

export default Navbar;
