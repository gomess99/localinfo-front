import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Pages/Home/Home.jsx";
import AboutUs from "../components/Pages/AboutUs/AboutUs.jsx";
import FindBusiness from "./components/Pages/FindBusiness/FindBusiness.jsx";
import Plan from "./components/Pages/Plan/Plan.jsx";
import RegisterPj from "./components/Pages/UserRegister/RegisterPf_Pj/RegisterPj.jsx";
import RegisterPf from "./components/Pages/UserRegister/RegisterPf_Pf/RegisterPf.jsx";
import PerfilPf from "./components/Pages/UserRegister/PerfilPf_Pj/PerfilPf.jsx";
import PerfilPj_PlanoFree from "./components/Pages/UserRegister/PerfilPf_Pj/PerfilPj_PlanoFree.jsx";
import PerfilPj from "./components/Pages/UserRegister/PerfilPf_Pj/PerfilPj.jsx";
import SucessRegisterPj from "./components/Pages/UserRegister/SucessRegister/SucessRegisterPj.jsx";
import SucessRegisterPf_Pj from "./components/Pages/UserRegister/SucessRegister/SucessRegisterPj_Pj.jsx";
import Free from "../components/Pages/Plan/Free/Free.jsx";
import Premium from "../components/Pages/Plan/Premium/Premium.jsx";
import Categories from "../components/Pages/Categories/Categories.jsx";
import Login from "../components/Pages/Login/Login.jsx";
import NewPassword from "../components/Pages/Login/NewPassword.jsx";
import UserRegister from "../components/Pages/UserRegister/UserRegister.jsx";
import SearchCategories from "./components/Pages/SearchCategories/searchCategories.jsx";

const Rotas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/findbusiness" element={<FindBusiness />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/registerpj" element={<RegisterPj />} />
        <Route path="/registerpf" element={<RegisterPf />} />
        <Route path="/perfilpf" element={<PerfilPf />} />
        <Route path="/perfilpj" element={<PerfilPj />} />
        <Route path="/perfil_pj_free" element={<PerfilPj_PlanoFree />} />
        <Route path="/sucessregister_pj" element={<SucessRegisterPj />} />
        <Route path="/sucessregister_pf_pj" element={<SucessRegisterPf_Pj />} />
        <Route path="/free" element={<Free />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userregister" element={<UserRegister />} />
        <Route path="/newpassword" element={<NewPassword />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/searchCategories/:categoria" element={<SearchCategories/>} />
      </Routes>
    </Router>
  );
};

export default Rotas;
