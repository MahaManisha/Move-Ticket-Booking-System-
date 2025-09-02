import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>🎬 CinemaBook</h1>
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/theaters">Theaters</Link></li>
            <li><Link to="/mybookings">My Bookings</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="user-actions">
          <Link to="/signin" className="btn-secondary">Sign In</Link>
          <Link to="/signup" className="btn-primary">Sign Up</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
