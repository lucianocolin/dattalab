import React from "react";
import "../../css/Sections/Surveys.css";
import Cards from "../Cards/Cards";
import pregunta1 from "../../imgs/pregunta-1.jpg";
import pregunta2 from "../../imgs/pregunta-2.jpg";
import pregunta3 from "../../imgs/pregunta-3.jpg";
import pregunta4 from "../../imgs/pregunta-4.jpg";

const Surveys = () => {
  const cardsData = [
    {
      id: 1,
      header: pregunta1,
      year: 2022,
      name: "Encuesta 1",
      title: "¿Cómo crees que va a ser tu situación económica el próximo año?",
    },
    {
      id: 2,
      header: pregunta2,
      year: 2022,
      name: "Encuesta 2",
      title: "¿Cómo es su situación económica comparada al año pasado?",
    },
    {
      id: 3,
      header: pregunta3,
      year: 2022,
      name: "Encuesta 3",
      title:
        "¿Cómo ve a Tucumán con respecto a las otras provincias del Norte?",
    }, 
    {
      id: 4,
      header: pregunta4,
      year: 2022,
      name: "Encuesta 3",
      title: "¿Qué fuerza política te gustaría que gobierne la provincia?",
    }
  ];

  return (
    <div className="all-container">
      <div className="surveys-cover"></div>
      <div className='company-values-surveys'>
        <p>
          Experiencia <br />
          Dedicación <br />
          Compromiso <br />
          Rapidéz <br />
          Eficacia <br />
        </p>
      </div>
      <h2 data-aos="fade-up">Encuestas realizadas</h2>
      <div className="cards2-container" data-aos="fade-up">
        {cardsData.map((card) => (
          <div key={card.title}>
            <Cards title={card.title} year={card.year} header={card.header} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Surveys;
