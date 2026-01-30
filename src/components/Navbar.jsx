// src/components/Navbar.jsx
import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isLoggedIn = localStorage.getItem("currentUser") !== null;

  const isActive = (path) => location.pathname === path;

  const handleAiClick = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      navigate("/datascience");
    } else {
      navigate("/login");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#000" }}>
      <div className="container">

        <Link className="navbar-brand d-flex align-items-center fw-bold" to="/home">
          <img src={logo} alt="Logo" width="50" height="50" className="me-2 rounded-circle" />
          PowerForge
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className={`nav-link ${isActive("/home") ? "active-link" : ""}`} to="/home">Home</Link>
            </li>

            <li className="nav-item">
              <Link className={`nav-link ${isActive("/about") ? "active-link" : ""}`} to="/about">AboutUs</Link>
            </li>

            {/* 🔥 OurAi — login check */}
            <li className="nav-item">
              <a href="#" className={`nav-link ${isActive("/datascience") ? "active-link" : ""}`} onClick={handleAiClick}>
                OurAi
              </a>
            </li>

            <li className="nav-item">
              <Link className={`nav-link ${isActive("/contact") ? "active-link" : ""}`} to="/contact">ContactUs</Link>
            </li>

            {!isLoggedIn && (
              <li className="nav-item">
                <Link className={`nav-link ${isActive("/login") ? "active-link" : ""}`} to="/login">Login</Link>
              </li>
            )}

            {isLoggedIn && (
              <li className="nav-item ms-3">
                <button className="btn btn-danger px-4 py-2" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
