import React from "react";
import Slider1 from "../imgs/Slider1.jpg";
import Slider2 from "../imgs/Slider2.jpg";
import Slider3 from "../imgs/Slider3.jpg";
import "../css/Sections/Home.css";

const Home = () => {
  return (
    <main>
      <div className="main-title">
        <h1>Consultora especializada en comunicación política</h1>
        <h3>Asesoría. Encuestas en vivo. Consultoría en general</h3>
      </div>
      <div className="slider">
        <ul>
          <li>
            <img src={Slider1} alt="Slider 1" height="700px" width="100%" />
          </li>
          <li>
            <img src={Slider2} alt="Slider 2" height="700px" width="100%" />
          </li>
          <li>
            <img src={Slider3} alt="Slider 3" height="700px" width="100%" />
          </li>
        </ul>
      </div>
      <div className="us-section" data-aos="fade-up">
        <h2>Dattalab Consultora</h2>
        <p>
          Dattalab es una consultora dedicada a estrategias de Marketing,
          Comunicación, Encuestas y Sondeos Telefónicos, con mas de 15 años de
          experiencia en campañas de publicidad, políticas e imagen de
          candidatos y gobiernos. <br />
          Nuestra	experiencia	abarca	países	como	México y	Argentina,	participando	en	diferentes	
          campañas	 publicitarias,	 políticas y	 programas	 de	 Radio	 y	Televisión con	 encuestas	 en	
          vivo. <br />
        </p>
      </div>
    </main>
  );
};

export default Home;
