//Pages
import Layout from "./components/Layout/Layout";
import Surveys from "./components/Sections/Surveys";
import WhatWeDo from "./components/Sections/WhatWeDo";
import Home from "./pages/Home";
//Hooks
import { useEffect } from "react";
//Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Resources
import Aos from 'aos';
import 'aos/dist/aos.css';
import Us from "./components/Sections/Us";

function App() {

  useEffect(()=>{
    Aos.init({ duration: 1000 })
  },[])

  return (
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/que-hacemos" element={<WhatWeDo/>} />
            <Route path="/encuestas" element={<Surveys/>} />
            <Route path="/nosotros" element={<Us/>} />
          </Routes>
        </Layout>
      </Router>
  );
}

export default App;
