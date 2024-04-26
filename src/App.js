import './App.css';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Landingpage from './components/pages/Landingpage';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Aboutus from './components/pages/Aboutus';
import Contact from './components/pages/Contact';
import Loginpage from './components/pages/Loginpage';
import Footer from './components/pages/Footer';
import Signup from './components/pages/Signup';
import Pharmacydashboard from './components/dashboards/pharmacy/Pharmacydashboard';
import Doctordashboard from './components/dashboards/doctor/Doctordashboard';
import Mrdashboard from './components/dashboards/mr/Mrdashboard';
import Products from './components/pages/Products';
import Admindashboard from './components/dashboards/admin/Admindashboard';

function App() {
  const navigateTo = useNavigate();
  // eslint-disable-next-line
  const [user, setUser] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("Authorization");
    if (token != null) {
      axios.get(`http://localhost:8765/auth-service/auth/validate/${token}`)
        .then((res) => {
          if (res.data.success === true) {
            setUser(res.data.data);
            sessionStorage.setItem("role", res.data.data.role);
            sessionStorage.setItem("username", res.data.data.username);
            setLoggedIn(true);
          } else {
            navigateTo("/login");
          }
        })
        .catch((err) => {
          console.error(err);
          localStorage.removeItem("Authorization");
        })
    } else {
      setLoggedIn(false);
    }
  }, [loggedIn]);

  const handleLogout = () => {
    localStorage.removeItem("Authorization");
    sessionStorage.removeItem("username");
    if (sessionStorage.getItem("role")) {
      sessionStorage.removeItem("role");
    }
    if (sessionStorage.getItem("mrId")) sessionStorage.removeItem("mrId");
    if (sessionStorage.getItem("pharmaId")) sessionStorage.removeItem("pharmaId");
    if (sessionStorage.getItem("doctorId")) sessionStorage.removeItem("doctorId");
    setLoggedIn(false);
    navigateTo("/login");
  }

  return (
    <div className="App container-fluid">
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={loggedIn ? <Navigate to="/" /> : <Loginpage setLoggedIn={setLoggedIn} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/pharmacy/dashboard" element={<Pharmacydashboard handleLogout={handleLogout} />} />
        <Route path="/doctor/dashboard" element={<Doctordashboard handleLogout={handleLogout} />} />
        <Route path="/mr/dashboard" element={<Mrdashboard handleLogout={handleLogout} />} />
        <Route path="/admin/dashboard" element={<Admindashboard handleLogout={handleLogout} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
