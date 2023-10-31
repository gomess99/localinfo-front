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
import RegisterPf from './components/Pages/UserRegister/RegisterPf/RegisterPf';

const Rotas = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/findbusiness" element={<FindBusiness />} />
                <Route path="/plan" element={<Plan />} />
                <Route path="/registerpf" element={<RegisterPf />} />
            </Routes>
        </Router>
    )
}

export default Rotas;
