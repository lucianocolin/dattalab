import React, { useState } from 'react';
import '../../css/Sections/WhatWeDo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faChartSimple } from '@fortawesome/free-solid-svg-icons';
import ContactImg from '../../imgs/contact.jpg'
import { Button } from 'react-bootstrap';
import ContactModal from '../Modals/ContactModal';
import amexLogo from '../../imgs/american-express-logo.png';
import santanderSerfinLogo from '../../imgs/santander-serfin-logo.jpg';
import leonAlperovichLogo from '../../imgs/leon-alperovich-logo.jpg';
import gremioPetrolerosLogo from '../../imgs/gremio-petroleros-logo.jpg';

const WhatWeDo = () => {

  const [showModal, setShowModal] = useState(false);

/*   useEffect(()=>{
    Aos.init({ duration: 1000 })
  },[]) */

  return (<>
    <div className='wwd-cover'>
    </div>
    <div className='company-values'>
      <p>
        Experiencia <br />
        Dedicación <br />
        Compromiso <br />
        Rapidéz <br />
        Eficacia <br />
      </p>
    </div>
    <h2 className='wwd-title'>¿Qué Hacemos?</h2>
    <div className='to-who' data-aos='fade-up'>
      <p>
      Dattalab	es	una	consultora	dedicada	a	estrategias	de	Marketing,	Comunicación,	Encuestas	
      y Sondeos	Telefónicos,	con	mas	de	15 años	de	experiencia	en	campañas de	publicidad,
      políticas	e	imagen	de	candidatos	y	gobiernos. <br />
      Nuestra	experiencia	abarca	países	como	México y	Argentina,	participando	en	diferentes	
      campañas	 publicitarias,	 políticas y	 programas	 de	 Radio	 y	Televisión con	 encuestas	 en	
      vivo. <br />
      Nuestro	compromiso	con	los	clientes	es	de	24	horas	los	7	días de	la	semana	brindando	un	
      servicio	100%	garantizado	y	profesional. <br />
      Contamos	 con	 servidores	 propios	 para	 encuestas	 telefónicas	 y	 mensajes	 de	 voz	 con	
      respuestas	en	tiempo	real, garantizando	al	cliente	rapidez	y	eficacia	a	la	hora	de	hacer	sus	
      mediciones,	con	bases	de	datos	actualizadas	tanto	de	celulares	como	de	teléfonos	fijos	y	
      segmentadas	por	ciudad,	municipio	y	en	algunos	casos	por	distrito	electoral. <br />
      Con	 nuestros	 sistemas	podrá	medir	en	menos	de	 24	 horas:	intención	 de	 voto,	imagen,	
      estado	 de	 la	 competencia,	 necesidades	 de	 la	 población,	 anunciar	 nuevas	 obras,	
      convocatorias	de	eventos,	lanzamiento	de	nuevos	productos etc. <br />
      Garantizamos efectividad,	 transparencia	 y	 confidencialidad	 a	 nuestros	 clientes	
      sumándonos	 a	 sus	 equipos	 de	 trabajo	 brindando	 asesoramiento	 en	 el	 caso	 que	 se	
      requiera.
      </p>
    </div>
    <div className='cards-container'>
      <div className='consulting-card' data-aos='flip-down'>
        <h5>Consultoría</h5>
        <p>
          • Posicionamiento e imagen. <br />
          • Diseño y ejecución de campañas electorales. <br />
          • Comunicación de gestión. <br />
          • Comunicación de crisis. <br />
          • Diseño de discursos <br />
          • Storytelling
        </p>
        <div className='consulting-icon-container'>
          <FontAwesomeIcon icon={faUserTie} className='consulting-icon' />
        </div>
      </div>
      <div className='surveys-card' data-aos='flip-down'>
        <h5>Encuestas en vivo</h5>
        <p>
          • Resultados reales. <br />
          • Bases de datos actualizadas. <br />
          • Preguntas diseñadas en base a los
           requerimientos del cliente. <br />
          • Medición en vivo de los resultados. <br />
          • Gráficos con imágenes. <br />
          • Análisis posterior de resultados.
        </p>
        <FontAwesomeIcon icon={faChartSimple} className='survey-icon' />
      </div>
    </div>
    <div className='wwd-clients-section'>
      <h2>Algunos de nuestros clientes</h2>
      <div className='clients-cards-container' data-aos='fade-up'>
        <div className='individual-client-card-container'>
          <div className='client-card'>
            <img src={amexLogo} alt="amex logo" className='clients-logos' />
          </div>
          <p>American Express (México)</p>
        </div>
        <div className='individual-client-card-container'>
          <div className='client-card'>
            <img src={santanderSerfinLogo} alt="santander logo" className='clients-logos' />
          </div>
          <p>
            Santander Serfin <br />
            (Capital Federal)
            </p>
        </div>
        <div className='individual-client-card-container'>
          <div className='client-card'>
            <img src={leonAlperovichLogo} alt="leon alperovich logo" className='clients-logos' />
          </div>
          <p>León Alperovich (Tucumán)</p>
        </div>
        <div className='individual-client-card-container'>
          <div className='client-card'>
            <img src={gremioPetrolerosLogo} alt="gremio de petroleros logo" className='clients-logos' />
          </div>
          <p>
            Gremio de Petroleros <br />
            (Neuquén)
          </p>
        </div>
      </div>
    </div>
    <div className='contact-img'>
      <p>Contamos con amplia experiencia asesorando políticos, empresarios,
      líderes y aquellos interesados en desarrollar una comunicación efectiva</p>
      <Button 
      variant='success' 
      className='contact-img-btn'
      onClick={() => setShowModal(true)} >Contactanos</Button>
      <img src={ContactImg} alt="Contact" />
    </div>

    <ContactModal 
    show={showModal}
    onHide={()=> setShowModal(false)} />
    </>
  )
}

export default WhatWeDo;