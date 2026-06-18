import { useEffect } from "react";
import { Link } from "react-router-dom";

const sugestoes = [
  { label: "Smartphones", cat: "smartphones" },
  { label: "Notebooks", cat: "laptops" },
  { label: "Tablets", cat: "tablets" },
];

function NaoEncontrado() {
  useEffect(() => {
    document.title = "Página não encontrada — Núcleo TADS Store";
  }, []);

  return (
    <section className="nao-encontrado">
      <span className="nao-encontrado-codigo">404</span>
      <h1 className="nao-encontrado-titulo">Página não encontrada</h1>
      <p className="nao-encontrado-texto">
        O endereço acessado não existe ou foi movido. Que tal explorar uma das
        nossas categorias?
      </p>

      <ul className="nao-encontrado-sugestoes" aria-label="Sugestões de categorias">
        {sugestoes.map((s) => (
          <li key={s.cat}>
            <Link to={`/?categoria=${s.cat}`} className="nao-encontrado-chip">
              {s.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link to="/" className="nao-encontrado-cta">
        Voltar para a loja
      </Link>
    </section>
  );
}

export default NaoEncontrado;
