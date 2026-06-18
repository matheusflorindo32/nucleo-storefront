import { useEffect, useState } from "react";
import ProdutoCard from "./ProdutoCard.jsx";

// Mapa de rótulos em português (chaves da API são preservadas para o filtro)
const rotulosCategoria = {
  smartphones: "Smartphones",
  laptops: "Notebooks",
  tablets: "Tablets",
  "mobile-accessories": "Áudio & Acessórios",
};

function rotular(cat) {
  return rotulosCategoria[cat] || cat;
}

function Vitrine() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("Todas");

  useEffect(() => {
    async function carregarProdutos() {
      try {
        setCarregando(true);
        setErro(null);

        const categoriasTech = [
          "smartphones",
          "laptops",
          "tablets",
          "mobile-accessories",
        ];

        const respostas = await Promise.all(
          categoriasTech.map((cat) =>
            fetch(`https://dummyjson.com/products/category/${cat}`).then((r) => {
              if (!r.ok) throw new Error("Falha na requisição");
              return r.json();
            })
          )
        );

        const variados = respostas.flatMap((r) =>
          (r.products || []).slice(0, 5)
        );
        setProdutos(variados.slice(0, 20));
      } catch (e) {
        setErro(
          "Não foi possível carregar os produtos. Tente novamente mais tarde."
        );
      } finally {
        setCarregando(false);
      }
    }

    carregarProdutos();
  }, []);

  const categorias = ["Todas", ...new Set(produtos.map((p) => p.category))];

  const produtosFiltrados = produtos.filter((p) => {
    const correspondeBusca = p.title
      .toLowerCase()
      .includes(busca.toLowerCase());
    const correspondeCategoria =
      categoria === "Todas" || p.category === categoria;
    return correspondeBusca && correspondeCategoria;
  });

  return (
    <section className="vitrine" id="vitrine">
      <div className="vitrine-header">
        <span className="vitrine-eyebrow">Catálogo</span>
        <h2 className="vitrine-title">Vitrine de Produtos</h2>
        <p className="vitrine-sub">
          Smartphones, notebooks, tablets e acessórios — busque pelo nome ou
          filtre por categoria.
        </p>
      </div>

      <div className="vitrine-controles">
        <input
          type="search"
          className="vitrine-busca"
          placeholder="Buscar produtos pelo nome..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          aria-label="Buscar produtos"
        />
        <select
          className="vitrine-select"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          aria-label="Filtrar por categoria"
        >
          {categorias.map((cat) => (
            <option key={cat} value={cat}>
              {cat === "Todas" ? "Todas as categorias" : rotular(cat)}
            </option>
          ))}
        </select>
      </div>

      {carregando && (
        <p className="vitrine-estado">Carregando produtos...</p>
      )}

      {!carregando && erro && (
        <p className="vitrine-estado vitrine-erro">{erro}</p>
      )}

      {!carregando && !erro && produtosFiltrados.length === 0 && (
        <p className="vitrine-estado">Nenhum produto encontrado.</p>
      )}

      {!carregando && !erro && produtosFiltrados.length > 0 && (
        <div className="vitrine-grid">
          {produtosFiltrados.map((produto) => (
            <ProdutoCard key={produto.id} produto={produto} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Vitrine;
