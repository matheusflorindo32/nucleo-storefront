import { useEffect } from "react";
import Diferenciais from "../components/Diferenciais.jsx";
import Vitrine from "../components/Vitrine.jsx";
import Newsletter from "../components/Newsletter.jsx";
import Leads from "../components/Leads.jsx";
import SobreContato from "../components/SobreContato.jsx";
import FAQ from "../components/FAQ.jsx";
import Politicas from "../components/Politicas.jsx";

function Home() {
  useEffect(() => {
    document.title = "Núcleo TADS Store — Tecnologia premium";
  }, []);

  return (
    <>
      <Diferenciais />
      <Vitrine />
      <Newsletter />
      <Leads />
      <SobreContato />
      <FAQ />
      <Politicas />
    </>
  );
}

export default Home;
