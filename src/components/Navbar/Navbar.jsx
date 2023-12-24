import React, { useEffect, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import "../Navbar/Navbar.css";
import Cookies from "js-cookie";
import { userLogged } from "../../services/pessoajuridicaServices";

function Navbar() {
  const [state, setState] = useState({
    active: "nav__menu",
    icon: "nav__toggler",
    user: null,
  });
  const navigate = useNavigate();

  const navToggle = () => {
    setState((prev) => ({
      ...prev,
      active:
        prev.active === "nav__menu" ? "nav__menu nav__active" : "nav__menu",
      icon:
        prev.icon === "nav__toggler" ? "nav__toggler toggle" : "nav__toggler",
    }));
  };

  const navigationItems = [
    { id: 1, text: "Encontre Negócios", link: "/findbusiness" },
    { id: 2, text: "Sobre-nós", link: "/aboutus" },
    { id: 3, text: "Planos", link: "/plan" },
    { id: 4, text: "Conecte-se", link: "/login" },
    { id: 5, text: "Sair", onClick: signout },
  ];

  const { active, icon, user } = state;

  useEffect(() => {
    const checkAuthentication = async () => {
      if (Cookies.get("token")) {
        try {
          const response = await userLogged();
          setState((prev) => ({ ...prev, user: response.data }));
        } catch (error) {
          console.log(error);
          setState((prev) => ({ ...prev, user: undefined }));
        }
      } else {
        setState((prev) => ({ ...prev, user: undefined }));
      }
    };

    checkAuthentication();
  }, []);

  function signout() {
    Cookies.remove("token");
    setState((prev) => ({ ...prev, user: undefined }));
    navigate("/");
  }

  return (
    <header className="header">
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <RouterLink to="/" className="logo">
        <span className="local-nav">Local</span>
        <span className="info-nav">info</span>
      </RouterLink>

      <nav className="nav">
        <div className="nav-v2">
          <ul className={active}>
            {navigationItems.map((item) => (
              <li
                key={item.id}
                className={`nav__item ${item.id === 4 ? "nav__item-4" : ""}`}
              >
                {item.onClick ? (
        <div className="nav__link" onClick={item.onClick}>
          {item.text}
        </div>
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

      {user !== null && (
        <>
          {user ? (
            <div className="logado">
              <RouterLink
                to="/editarperfil"
                className="nav__link logado-name"
                id="connect-btn"
              >
                <img src={user.avatar} alt="" />

                <p className="perfillogado">Olá, {user.name}</p>
              </RouterLink>
              <i className="bi bi-box-arrow-right" onClick={signout}></i>
            </div>
          ) : (
            <nav className="nav__left">
              <RouterLink to="/login" className="nav__link" id="connect-btn">
                Conecte-se
              </RouterLink>
              <span className="point">.</span>
              <RouterLink to="/register">
                <button className="nav-btn">Inscreva-se</button>
              </RouterLink>
            </nav>
          )}
        </>
      )}
    </header>
  );
}

export default Navbar;
