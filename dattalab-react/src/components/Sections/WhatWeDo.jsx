import React from 'react';
import '../../css/Pages/WhatWeDo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faChartSimple } from '@fortawesome/free-solid-svg-icons';

const WhatWeDo = () => {
  return (<>
    <h2>¿Qué Hacemos?</h2>
    <div className='cards-container'>
      <div className='consulting-card'>
        <h5>Consultoría Política</h5>
        <p>
          • Posicionamiento e imagen. <br />
          • Diseño y ejecución de campañas electorales. <br />
          • Comunicación de gestión. <br />
          • Comunicación de crisis. <br />
          • Diseño de discursos <br />
          • Storytelling
        </p>
        <FontAwesomeIcon icon={faUserTie} className='consulting-icon' />
      </div>
      <div className='surveys-card'>
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
    </>
  )
}

export default WhatWeDo;