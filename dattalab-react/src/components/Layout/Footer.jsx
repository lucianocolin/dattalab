import React from 'react';
import dattaLabLogo from '../../imgs/logo-dattalab-png.png';
import '../../css/Layout/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={dattaLabLogo} alt="Dattalab Logo" width='150px' height='150px'/>
      </div>
      <div>
        Todos los derechos reservados
      </div>
    </footer>
  )
}

export default Footer