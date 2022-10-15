import Layout from "./components/Layout/Layout";
import Surveys from "./components/Sections/Surveys";
import WhatWeDo from "./components/Sections/WhatWeDo";
import Home from "./pages/Home";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

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
          </Routes>
        </Layout>
      </Router>
  );
}

export default App;
