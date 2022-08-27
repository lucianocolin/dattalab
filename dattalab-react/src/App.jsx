import Layout from "./components/Layout/Layout";
import Surveys from "./components/Sections/Surveys";
import WhatWeDo from "./components/Sections/WhatWeDo";
import Home from "./pages/Home";

function App() {
  return (
      <Layout>
        <Home />
        <WhatWeDo />
        <Surveys />
      </Layout>
  );
}

export default App;
