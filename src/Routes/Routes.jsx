import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Pages/Home/Home";
import AboutUs from "../components/Pages/AboutUs/AboutUs";
import FindBusiness from "./components/Pages/FindBusiness/FindBusiness";
import Plan from "./components/Pages/Plan/Plan";
import Register from "./components/Pages/UserRegister/RegisterPf_Pj/RegisterPj";
import SucessRegister from "./components/Pages/UserRegister/SucessRegister/SucessRegister";
import Free from "../components/Pages/Plan/Free/Free";
import Premium from "../components/Pages/Plan/Premium/Premium";
import Categories from "../components/Pages/Categories/Categories";
import Login from "../components/Pages/Login/Login";
import NewPassword from "../components/Pages/Login/NewPassword";
import Search from "./components/Pages/Search/search";
import EditarPerfil from "../components/EditarPerfil/EditarPerfil";

const Rotas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/findbusiness" element={<FindBusiness />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sucessregister" element={<SucessRegister />} />
        <Route path="/free" element={<Free />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newpassword" element={<NewPassword />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/search/:categoria" element={<Search/>} />
        <Route path="/editarperfil" element={<EditarPerfil/>} />
      </Routes>
    </Router>
  );
};

export default Rotas;
