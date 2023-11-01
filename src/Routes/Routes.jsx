import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom'
import Home from '../components/Pages/Home/Home';
import AboutUs from '../components/Pages/AboutUs/AboutUs';
import FindBusiness from './components/Pages/FindBusiness/FindBusiness';
import Plan from './components/Pages/Plan/Plan';
import RegisterPj from './components/Pages/UserRegister/RegisterPf_Pj/RegisterPj';
import RegisterPf from './components/Pages/UserRegister/RegisterPf_Pf/RegisterPf';
import PerfilPf from './components/Pages/UserRegister/PerfilPf_Pj/PerfilPf';
import PerfilPj from './components/Pages/UserRegister/PerfilPf_Pj/PerfilPj';

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
            </Routes>
        </Router>
    )
}

export default Rotas;
