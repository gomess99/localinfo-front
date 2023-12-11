import React, { useEffect, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import "../Navbar/Navbar.css";
import Cookies from "js-cookie";
import { userLogged } from "../../services/pessoajuridicaServices";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navigate = useNavigate();


  const navToggle = () => {
    setActive(active === "nav__menu" ? "nav__menu nav__active" : "nav__menu");
    setIcon(icon === "nav__toggler" ? "nav__toggler toggle" : "nav__toggler");
  };

  const navigationItems = [
    { id: 1, text: "Encontre Negócios", link: "/findbusiness" },
    { id: 2, text: "Sobre-nós", link: "/aboutus" },
    { id: 3, text: "Planos", link: "/plan" },
    { id: 4, text: "Conecte-se", link: "/login" },
  ];

  const [user, setUser] = useState({});

  async function findUserLogged() {
    try {
      const response = await userLogged();
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function signout() {
    Cookies.remove("token");
    setUser(undefined);
    navigate("/");
  }

  async function findUserLogged() {
    try {
      const response = await userLogged();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

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
                className={`nav__item ${item.id === 4 ? "nav__item-4" : ""}`}
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

      {user ? (
        <div>
          <p>{user.name}</p>
          <i className="bi bi-box-arrow-right" onClick={signout}></i>
        </div>
      ) : (
        <nav className="nav__left">
          <RouterLink to="/login" className="nav__link" id="connect-btn">
            Conecte-se
          </RouterLink>
          <span className="point">.</span>
          <RouterLink to="/userregister">
            <button className="nav-btn">Inscreva-se</button>
          </RouterLink>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
