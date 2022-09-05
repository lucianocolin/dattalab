import React, { useState, useEffect } from 'react';
import '../../css/Sections/WhatWeDo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faChartSimple } from '@fortawesome/free-solid-svg-icons';
import ContactImg from '../../imgs/contact.jpg'
import { Button } from 'react-bootstrap';
import ContactModal from '../Modals/ContactModal';
import Aos from 'aos';
import 'aos/dist/aos.css';

const WhatWeDo = () => {

  const [showModal, setShowModal] = useState(false);

  useEffect(()=>{
    Aos.init({ duration: 1000 })
  },[])

  return (<>
    <h2 className='wwd-title'>¿Qué Hacemos?</h2>
    <div className='to-who' data-aos='fade-up'>
      <p>Propuestas dirigidas a dirigentes políticos y sociales, funcionarios, directivos de ONG, empresarios de mandos medios y superiores</p>
    </div>
    <div className='cards-container'>
      <div className='consulting-card' data-aos='flip-down'>
        <h5>Consultoría Política</h5>
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
          • Preguntas diseñadas en conjunto con el cliente. <br />
          • Medición en vivo de los resultados. <br />
          • Gráficos con imágenes. <br />
          • Análisis posterior de resultados.
        </p>
        <FontAwesomeIcon icon={faChartSimple} className='survey-icon' />
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