import React from "react";
import "../../css/Layout/Header.css";
import { Link } from "react-router-dom";
//imgs and icons
import dattaLabLogo from "../../imgs/logo-dattalab-png.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const igLogo = <FontAwesomeIcon icon={faInstagram} />;
  const fbLogo = <FontAwesomeIcon icon={faFacebook} />;
  const twLogo = <FontAwesomeIcon icon={faTwitter} />;

  return (
    <header>
      <img
        src={dattaLabLogo}
        alt="Dattalab Logo"
        className="header-dattalab-logo"
      />
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/" className="link">
              INICIO
            </Link>
          </li>
          <li>
            <Link to="/que-hacemos" className="link">
              QUÉ HACEMOS
            </Link>
          </li>
          <li>
            <Link to="/encuestas" className="link">
              ENCUESTAS
            </Link>
          </li>
          <li>
            <Link to="/" className="link">
              NOSOTROS
            </Link>
          </li>
          <li>
            <a
              href="https://www.instagram.com/dattalab.consultora/"
              target="blank"
              className="link"
            >
              {igLogo}
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/search/top?q=dattalab"
              target="blank"
              className="link"
            >
              {fbLogo}
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/dattalab_"
              target="blank"
              className="link"
            >
              {twLogo}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
