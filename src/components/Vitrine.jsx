import { useSearchParams } from "react-router-dom";
import ProdutoCard from "./ProdutoCard.jsx";
import SkeletonProduto from "./SkeletonProduto.jsx";
import MensagemErro from "./MensagemErro.jsx";
import EstadoVazio from "./EstadoVazio.jsx";
import { useProdutos } from "../hooks/useProdutos.js";
import { useCategorias } from "../hooks/useCategorias.js";

function Vitrine() {
  const { produtos, carregando, erro, recarregar } = useProdutos();
  const { categorias, rotular } = useCategorias();

  // Filtros refletidos na URL (?busca=...&categoria=...&ordenar=...)
  const [searchParams, setSearchParams] = useSearchParams();
  const busca = searchParams.get("busca") || "";
  const categoria = searchParams.get("categoria") || "Todas";
  const ordenar = searchParams.get("ordenar") || "padrao";

  const filtrosAtivos =
    busca !== "" || categoria !== "Todas" || ordenar !== "padrao";

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

  function limparFiltros() {
    setSearchParams(new URLSearchParams(), { replace: true });
  }

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
          <option value="Todas">Todas as categorias</option>
          {categorias.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.label}
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

      {!carregando && !erro && (
        <div className="vitrine-contador" aria-live="polite">
          <span>
            <strong>{produtosFiltrados.length}</strong>{" "}
            {produtosFiltrados.length === 1
              ? "produto encontrado"
              : "produtos encontrados"}
            {categoria !== "Todas" && (
              <> em <strong>{rotular(categoria)}</strong></>
            )}
            {busca && (
              <> para “<strong>{busca}</strong>”</>
            )}
          </span>
          {filtrosAtivos && (
            <button
              type="button"
              className="vitrine-limpar"
              onClick={limparFiltros}
            >
              Limpar filtros
            </button>
          )}
        </div>
      )}

      {carregando && (
        <div className="vitrine-grid" aria-label="Carregando produtos">
          {Array.from({ length: 8 }).map((_, i) => (
            <SkeletonProduto key={i} />
          ))}
        </div>
      )}

      {!carregando && erro && (
        <MensagemErro mensagem={erro} onTentarNovamente={recarregar} />
      )}

      {!carregando && !erro && produtosFiltrados.length === 0 && (
        <EstadoVazio
          titulo="Nenhum produto encontrado"
          descricao="Tente ajustar a busca, escolher outra categoria ou limpar os filtros."
        >
          {filtrosAtivos && (
            <button
              type="button"
              className="botao botao-primario"
              onClick={limparFiltros}
            >
              Limpar filtros
            </button>
          )}
        </EstadoVazio>
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
