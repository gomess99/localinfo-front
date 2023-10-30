import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom'
import Home from '../components/Pages/Home/Home'
import AboutUs from '../components/Pages/AboutUs/AboutUs'
import FindBusiness from './components/Pages/FindBusiness/FindBusiness';

const Rotas = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/findbusiness" element={<FindBusiness />} />
            </Routes>
        </Router>
    )
}

export default Rotas
