import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Detalhe from "./pages/Detalhe.jsx";
import NaoEncontrado from "./pages/NaoEncontrado.jsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto/:id" element={<Detalhe />} />
        <Route path="*" element={<NaoEncontrado />} />
      </Routes>
    </Layout>
  );
}

export default App;
