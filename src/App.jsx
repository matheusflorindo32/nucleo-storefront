import Layout from "./components/Layout.jsx";
import Vitrine from "./components/Vitrine.jsx";
import Diferenciais from "./components/Diferenciais.jsx";
import SobreContato from "./components/SobreContato.jsx";
import FAQ from "./components/FAQ.jsx";
import Politicas from "./components/Politicas.jsx";

function App() {
  return (
    <Layout>
      <Diferenciais />
      <Vitrine />
      <SobreContato />
      <FAQ />
      <Politicas />
    </Layout>
  );
}

export default App;
