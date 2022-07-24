import React from 'react';
import Slider1 from '../imgs/Slider1.jpg';
import Slider2 from '../imgs/Slider2.jpg';
import Slider3 from '../imgs/Slider3.jpg';
import '../css/Pages/Home.css';

const Home = () => {
  return (
    <main>
      <div className='slider'>
        <ul>
          <li><img src={Slider1} alt="Slider 1" height='700px' width='100%' /></li>
          <li><img src={Slider2} alt="Slider 2" height='700px' width='100%' /></li>
          <li><img src={Slider3} alt="Slider 3" height='700px' width='100%' /></li>
        </ul>
      </div>
    </main>
  )
}

export default Home;