// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">Thrones App</Link>
      <div className="navbar-nav">
        <Link to="/search" className="nav-item nav-link">
          Search Characters
        </Link>
        <Link to="/houses" className="nav-item nav-link">
          View Houses
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
