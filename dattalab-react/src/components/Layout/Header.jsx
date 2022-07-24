import React from 'react';
import '../../css/Layout/Header.css';
import dattaLabLogo from '../../imgs/logo-dattalab-png.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram, faFacebook} from '@fortawesome/free-brands-svg-icons';

const Header = () => {

  const igLogo = <FontAwesomeIcon icon={faInstagram} />
  const facebookLogo = <FontAwesomeIcon icon={faFacebook} />

  return (
      <header>
        <img src={dattaLabLogo} alt="Dattalab Logo" width='100px' height='100px' />
        <nav className='navbar'>
          <ul>
            <li>INICIO</li>
            <li>QUÉ HACEMOS</li>
            <li>ENCUESTAS EN VIVO</li>
            <li>NOSOTROS</li>
            <li>{igLogo}</li>
            <li>{facebookLogo}</li>
          </ul>
        </nav>
      </header>
  )
}

export default Header