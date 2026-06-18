import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const sugestoesCategorias = [
  { label: "Smartphones", cat: "smartphones" },
  { label: "Notebooks", cat: "laptops" },
  { label: "Tablets", cat: "tablets" },
];

function NaoEncontrado() {
  const [sugeridos, setSugeridos] = useState([]);

  useEffect(() => {
    document.title = "Página não encontrada — Núcleo TADS Store";

    async function carregarSugestoes() {
      const categorias = ["smartphones", "laptops", "tablets"];
      try {
        const respostas = await Promise.all(
          categorias.map((cat) =>
            fetch(
              `https://dummyjson.com/products/category/${cat}?limit=1&select=id,title,thumbnail,category,price`
            ).then((r) => (r.ok ? r.json() : null))
          )
        );
        const itens = respostas
          .filter(Boolean)
          .map((d) => d.products?.[0])
          .filter(Boolean);
        if (itens.length) setSugeridos(itens);
      } catch (_) {
        // se falhar, a página continua funcional com os atalhos de categoria
      }
    }
    carregarSugestoes();
  }, []);

  return (
    <section className="nao-encontrado">
      <span className="nao-encontrado-codigo">404</span>
      <h1 className="nao-encontrado-titulo">Página não encontrada</h1>
      <p className="nao-encontrado-texto">
        O endereço acessado não existe ou foi movido. Que tal explorar uma das
        nossas categorias ou conferir alguns destaques?
      </p>

      <ul
        className="nao-encontrado-sugestoes"
        aria-label="Sugestões de categorias"
      >
        {sugestoesCategorias.map((s) => (
          <li key={s.cat}>
            <Link to={`/?categoria=${s.cat}`} className="nao-encontrado-chip">
              {s.label}
            </Link>
          </li>
        ))}
      </ul>

      {sugeridos.length > 0 && (
        <div className="nao-encontrado-destaques">
          <h2 className="nao-encontrado-destaques-titulo">
            Talvez você goste destes
          </h2>
          <div className="nao-encontrado-destaques-grid">
            {sugeridos.map((p) => (
              <Link
                key={p.id}
                to={`/produto/${p.id}`}
                className="nao-encontrado-destaque"
              >
                <img src={p.thumbnail} alt={p.title} />
                <div>
                  <strong>{p.title}</strong>
                  <span>
                    {p.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <Link to="/" className="nao-encontrado-cta">
        Voltar para a loja
      </Link>
    </section>
  );
}

export default NaoEncontrado;
