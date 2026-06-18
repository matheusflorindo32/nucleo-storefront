import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
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

  // Filtro/busca refletidos na URL (?busca=...&categoria=...&ordenar=...)
  const [searchParams, setSearchParams] = useSearchParams();
  const busca = searchParams.get("busca") || "";
  const categoria = searchParams.get("categoria") || "Todas";
  const ordenar = searchParams.get("ordenar") || "padrao";

  function atualizarParam(chave, valor) {
    const novo = new URLSearchParams(searchParams);
    if (
      !valor ||
      (chave === "categoria" && valor === "Todas") ||
      (chave === "ordenar" && valor === "padrao")
    ) {
      novo.delete(chave);
    } else {
      novo.set(chave, valor);
    }
    setSearchParams(novo, { replace: true });
  }

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

  let produtosFiltrados = produtos.filter((p) => {
    const correspondeBusca = p.title
      .toLowerCase()
      .includes(busca.toLowerCase());
    const correspondeCategoria =
      categoria === "Todas" || p.category === categoria;
    return correspondeBusca && correspondeCategoria;
  });

  if (ordenar === "preco-asc") {
    produtosFiltrados = [...produtosFiltrados].sort((a, b) => a.price - b.price);
  } else if (ordenar === "preco-desc") {
    produtosFiltrados = [...produtosFiltrados].sort((a, b) => b.price - a.price);
  } else if (ordenar === "rating") {
    produtosFiltrados = [...produtosFiltrados].sort((a, b) => b.rating - a.rating);
  }

  return (
    <section className="vitrine" id="vitrine">
      <div className="vitrine-header">
        <span className="vitrine-eyebrow">Catálogo</span>
        <h2 className="vitrine-title">Vitrine de Produtos</h2>
        <p className="vitrine-sub">
          Smartphones, notebooks, tablets e acessórios — busque pelo nome,
          filtre por categoria e ordene como preferir.
        </p>
      </div>

      <div className="vitrine-controles">
        <input
          type="search"
          className="vitrine-busca"
          placeholder="Buscar produtos pelo nome..."
          value={busca}
          onChange={(e) => atualizarParam("busca", e.target.value)}
          aria-label="Buscar produtos"
        />
        <select
          className="vitrine-select"
          value={categoria}
          onChange={(e) => atualizarParam("categoria", e.target.value)}
          aria-label="Filtrar por categoria"
        >
          {categorias.map((cat) => (
            <option key={cat} value={cat}>
              {cat === "Todas" ? "Todas as categorias" : rotular(cat)}
            </option>
          ))}
        </select>
        <select
          className="vitrine-select"
          value={ordenar}
          onChange={(e) => atualizarParam("ordenar", e.target.value)}
          aria-label="Ordenar produtos"
        >
          <option value="padrao">Ordem padrão</option>
          <option value="preco-asc">Menor preço</option>
          <option value="preco-desc">Maior preço</option>
          <option value="rating">Melhor avaliados</option>
        </select>
      </div>

      {carregando && (
        <div className="vitrine-grid" aria-label="Carregando produtos">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="card card--skeleton" aria-hidden="true">
              <div className="skeleton skeleton--img" />
              <div className="card-body">
                <div className="skeleton skeleton--line skeleton--line-short" />
                <div className="skeleton skeleton--line" />
                <div className="skeleton skeleton--line skeleton--line-price" />
              </div>
            </div>
          ))}
        </div>
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

