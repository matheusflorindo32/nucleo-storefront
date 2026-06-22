import { Link } from "react-router-dom";
import Botao from "./Botao.jsx";
import Selo from "./Selo.jsx";
import { formatarPreco } from "../utils/formatadores.js";
import { useCart } from "../contexts/CartContext.jsx";

const rotulosCategoria = {
  smartphones: "Smartphones",
  laptops: "Notebooks",
  tablets: "Tablets",
  "mobile-accessories": "Áudio & Acessórios",
};

function rotular(cat) {
  return rotulosCategoria[cat] || cat;
}

function ProdutoCard({ produto }) {
  const { adicionar } = useCart();
  const precoFormatado = formatarPreco(produto.price);
  const categoriaPt = rotular(produto.category);
  const qtdImagens = (produto.images && produto.images.length) || 1;
  const linkProduto = `/produto/${produto.id}`;

  function aoAdicionar(e) {
    e.preventDefault();
    e.stopPropagation();
    adicionar(produto, 1);
  }

  return (
    <article className="card">
      <Link
        to={linkProduto}
        className="card-link"
        aria-label={`Ver detalhes de ${produto.title}`}
      >
        <div className="card-image-wrap">
          <div className="card-image-halo" />
          <img
            className="card-image"
            src={produto.thumbnail}
            alt={produto.title}
          />
          <div className="card-selo-destaque">
            <Selo texto={categoriaPt} cor="#0A2342" />
          </div>
          {qtdImagens > 1 && (
            <span className="card-galeria-badge" aria-hidden="true">
              📷 {qtdImagens}
            </span>
          )}
        </div>

        <div className="card-body">
          <span className="card-categoria">{categoriaPt}</span>
          <h3 className="card-nome">{produto.title}</h3>

          {produto.description && (
            <p className="card-descricao">{produto.description}</p>
          )}

          <div className="card-selos">
            {produto.rating >= 4.5 && (
              <Selo texto="Produto destaque" cor="#16A34A" />
            )}
            {produto.stock > 0 && <Selo texto="Disponível" cor="#14B8A6" />}
          </div>

          <div className="card-footer">
            <div className="card-preco-bloco">
              <span className="card-preco">{precoFormatado}</span>
            </div>
            <div className="card-cta">
              <button
                type="button"
                className="card-add"
                onClick={aoAdicionar}
                aria-label={`Adicionar ${produto.title} ao carrinho`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>
                Carrinho
              </button>
              <Botao texto="Ver produto" />
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default ProdutoCard;
