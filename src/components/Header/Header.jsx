import React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <header className="site-header">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">DJ Paul</Link>
        </div>

        {/* Navigation */}
        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/#musica">Música</Link>
            </li>
            <li>
              <Link to="/#shows">Shows</Link>
            </li>
            <li>
              <Link to="/#tour">Tour</Link>
            </li>
            <li>
              <Link to="/#servicios">Servicios</Link>
            </li>
            <li>
              <Link to="/#contacto">Contacto</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
