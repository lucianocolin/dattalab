import React from 'react';
import '../../css/Layout/Header.css';
import { Link } from 'react-router-dom';
//imgs and icons
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
            <li>
              <Link to='#home' className='link'>INICIO</Link>
            </li>
            <li>
              <Link to='#whatWeDo' className='link'>QUÉ HACEMOS</Link>
            </li>
            <li>
              <Link to='/' className='link'>ENCUESTAS EN VIVO</Link>
            </li>
            <li>
              <Link to='/' className='link'>NOSOTROS</Link>
            </li>
            <li>
              <a href='https://www.instagram.com/dattalab.consultora/' target='blank' className='link'>{igLogo}</a>
            </li>
            <li>
              <a href='https://www.facebook.com/dattalabtuc' target='blank' className='link'>{facebookLogo}</a>
            </li>
          </ul>
        </nav>
      </header>
  )
}

export default Header