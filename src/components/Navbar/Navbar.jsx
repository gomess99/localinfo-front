import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import "../Navbar/Navbar.css";
import Cookies from "js-cookie";
import { userLogged } from "../../services/pessoajuridicaServices";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");

  const navToggle = () => {
    setActive(active === "nav__menu" ? "nav__menu nav__active" : "nav__menu");
    setIcon(icon === "nav__toggler" ? "nav__toggler toggle" : "nav__toggler");
  };

  const navigationItems = [
    { id: 1, text: "Encontre Negócios", link: "/findbusiness" },
    { id: 2, text: "Categorias", link: "/categories" },
    { id: 3, text: "Sobre-nós", link: "/aboutus" },
    { id: 4, text: "Planos", link: "/plan" },
    { id: 5, text: "Conecte-se", link: "/login" },
  ];

  const [user, setUser] = useState({})

  async function findUserLogged() {
    try {
      const response = await userLogged();
      setUser(response.data);
      // setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  // function signout() {
  //   Cookies.remove("token");
  //   setUser(undefined);
  //   navigate("/");
  // }

  useEffect(() => {
    if (Cookies.get("token")) findUserLogged();
  }, []);

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
            {navigationItems.map((item) => (
              <li
                key={item.id}
                className={`nav__item ${item.id === 5 ? "nav__item-5" : ""}`}
              >
                <RouterLink to={item.link} className="nav__link">
                  {item.text}
                </RouterLink>
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
        <p>{user.name}</p>
        <RouterLink to="/login" className="nav__link" id="connect-btn">
          Conecte-se
        </RouterLink>
        <span className="point">.</span>
        <RouterLink to="/userregister">
          <button className="nav-btn">Inscreva-se</button>
        </RouterLink>
      </nav>
    </header>
  );
}

export default Navbar;
