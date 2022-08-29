import React from 'react';
import '../../css/Sections/Surveys.css';
import Cards from '../Cards/Cards';
import pregunta1 from '../../imgs/pregunta-1.jpg';
import pregunta2 from '../../imgs/pregunta-2.jpg';
import pregunta3 from '../../imgs/pregunta-3.jpg';

const Surveys = () => {

  const cardsData = [
    {
      id: 1,
      header: pregunta1 ,
      year: 2018,
      name: "Encuesta 1",
      title: "¿Qué opinión tiene de la gestión del gobierno provincial?"
    },
    {
      id: 2,
      header: pregunta2 ,
      year: 2018,
      name: "Encuesta 2",
      title: "¿A quién votaría como senador/a de la provincia?"
    },
    {
      id: 3,
      header: pregunta3 ,
      year: 2017,
      name: "Encuesta 3",
      title: "¿Quién le gustaría que sea el reemplazo de Roberto Sánchez como concejal?"
    }];
    
  return (
    <div className='all-container'>
      <h2>Encuestas realizadas</h2>
      <div className='cards2-container'>
        {cardsData.map((card)=> <div key={card.title}> 
          <Cards 
          title={card.title}
          year={card.year}
          header={card.header} /> 
          </div>)}
      </div>
    </div>
  )
}

export default Surveys