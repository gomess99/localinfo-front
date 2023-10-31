import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import AboutUs from './components/Pages/AboutUs/AboutUs';
import FindBusiness from './components/Pages/FindBusiness/FindBusiness';
import Plan from './components/Pages/Plan/Plan';
import UserRegister from './components/Pages/UserRegister/UserRegister';

const App = () => {
  return (
    <div>
      
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs/>} />
            <Route path="/findbusiness" element={<FindBusiness/>} />
            <Route path="/plan" element={<Plan/>} />
            <Route path="/userregister" element={<UserRegister/>} />
          </Routes>
        </Router>
      
    </div>
  );
}

export default App;
