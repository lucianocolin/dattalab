import React from "react";
//Css
import "../../css/Sections/Us.css";
//resources
import juanColin from "../../imgs/juan-colin.jpg";
import rodiDurba from '../../imgs/rodi-durba.jpg';

const Us = () => {
  return (
    <>
      <div className="us-section-cover"></div>
      <div className="company-values">
        <p>
          Experiencia <br />
          Dedicación <br />
          Compromiso <br />
          Rapidéz <br />
          Eficacia <br />
        </p>
      </div>
      <h2>NUESTROS MIEMBROS</h2>
      <div data-aos='fade-up' className="members-section">
        <div className="member-card">
          <img src={juanColin} alt="dattalab-ceo" />
          <div className="member-card-body">
            <h3>Juan Ignacio Colin</h3>
            <h5>Asesor y consultor político, productor agropecuario y fundador de Dattalab</h5>
            <p>
              Cel: +54 3815351530 <br />
              Correo electrónico: jicolin29@gmail.com <br />
            </p>
          </div>
        </div>
        <div className="member-card">
          <img src={rodiDurba} alt="dattalab-ceo" />
          <div className="member-card-body">
            <h3>Rodolfo Esteban Durbá</h3>
            <h5>Consultor, técnico en comercialización y socio de Dattalab</h5>
            <p>
              Cel: +54 3816812422 <br />
              Correo electrónico: rodidurba@gmail.com <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Us;
