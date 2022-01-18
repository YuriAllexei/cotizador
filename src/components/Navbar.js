import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="container home">
          <Link className="navbar-brand" to="/">
            <h1 className="skere">Home</h1>
          </Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="navbar-brand" to="/aspectos">
                <h2 className="skere">Aspectos técnicos</h2>
              </Link>
            </li>
            <li className="nav-item" style={{ color: "#009AFF" }}>
              <Link className="navbar-brand" to="/cotizador">
                <h2 className="skere">Cotizador</h2>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
