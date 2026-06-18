import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Detalhe from "./pages/Detalhe.jsx";
import SobreProjeto from "./pages/SobreProjeto.jsx";
import NaoEncontrado from "./pages/NaoEncontrado.jsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto/:id" element={<Detalhe />} />
        <Route path="/sobre-o-projeto" element={<SobreProjeto />} />
        <Route path="*" element={<NaoEncontrado />} />
      </Routes>
    </Layout>
  );
}

export default App;
