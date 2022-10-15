import React from "react";
import dattaLabLogo from "../../imgs/logo-dattalab-png.png";
import "../../css/Layout/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={dattaLabLogo}
          alt="Dattalab Logo"
          width="250px"
          height="65px"
        />
      </div>
      <div className="rights">Todos los derechos reservados ©</div>
    </footer>
  );
};

export default Footer;
