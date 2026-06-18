import Botao from "./Botao.jsx";
import Selo from "./Selo.jsx";

function ProdutoCard({ produto }) {
  const precoFormatado = produto.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <article className="card">
      <div className="card-image-wrap">
        <div className="card-image-halo" />
        <img
          className="card-image"
          src={produto.thumbnail}
          alt={produto.title}
        />
        <div className="card-selo-destaque">
          <Selo texto={produto.category} cor="#0A2342" />
        </div>
      </div>

      <div className="card-body">
        <span className="card-categoria">{produto.category}</span>
        <h3 className="card-nome">{produto.title}</h3>

        {typeof produto.rating === "number" && (
          <span
            className="card-avaliacao"
            aria-label={`Avaliação ${produto.rating}`}
          >
            ★ {produto.rating.toFixed(1)}
            <small>· avaliações verificadas</small>
          </span>
        )}

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
          <Botao texto="Ver produto" />
        </div>
      </div>
    </article>
  );
}

export default ProdutoCard;
