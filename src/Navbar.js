import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="logo">LOGO</h2>
      </div>
      <div className="navbar-center">
        <ul>
          <li><Link to="/">Ana Sayfa</Link></li>
          <li><Link to="/profile">Profil</Link></li>
          <li><Link to="/about">Hakkımızda</Link></li>
          <li><Link to="/news">Haberler</Link></li>
        </ul>
      </div>
      <div className="navbar-right">
        <Link to="/login"><button className="login-btn">Giriş Yap</button></Link>
        <Link to="/signup"><button className="signup-btn">Kayıt Ol</button></Link>
      </div>
    </nav>
  );
};

export default Navbar;
