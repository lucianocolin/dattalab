import React from 'react';
import Slider1 from '../imgs/Slider1.jpg';
import Slider2 from '../imgs/Slider2.jpg';
import Slider3 from '../imgs/Slider3.jpg';
import '../css/Sections/Home.css';

const Home = () => {
  return (
    <main>
      <div className='main-title'>
        <h1>Consultora especializada en comunicación política</h1>
        <h3>Asesoría. Encuestas en vivo. Consultoría en general</h3>
      </div>
      <div className='slider'>
        <ul>
          <li><img src={Slider1} alt="Slider 1" height='700px' width='100%' /></li>
          <li><img src={Slider2} alt="Slider 2" height='700px' width='100%' /></li>
          <li><img src={Slider3} alt="Slider 3" height='700px' width='100%' /></li>
        </ul>
      </div>
      <div className='us-section'>
        <h2>Dattalab Consultora</h2>
        <p  data-aos='fade-up'>Somos una consultora especializada en comunicación política con 10 años de trayectoría. 
          Nos dedicamos a la asesoría personalizada mediante consultoría privada, encuestas con un sistema 
          propio y bases de datos actualizadas para obtener resultados reales, orientando a nuestros clientes
          sobre su imágen pública, la de su equipo o partido político y sobre el pensamiento general sobre un 
          tema en específico. Estamos erradicados en San Miguel de Tucumán pero con representación en todo el país.
          Hemos trabajado a la par de candidatos a nivel presidencial. </p>
      </div>
    </main>
  )
}

export default Home;