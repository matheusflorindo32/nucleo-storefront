import Botao from "./Botao.jsx";
import Selo from "./Selo.jsx";

function ProdutoCard({ produto }) {
  const precoFormatado = produto.preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <article className="card">
      <div className="card-image-wrap">
        <div className="card-image-halo" />
        <img className="card-image" src={produto.imagem} alt={produto.nome} />
        <div className="card-selo-destaque">
          <Selo texto={produto.destaque} cor="#0A2342" />
        </div>
      </div>

      <div className="card-body">
        <span className="card-categoria">{produto.categoria}</span>
        <h3 className="card-nome">{produto.nome}</h3>

        {produto.avaliacao && (
          <span className="card-avaliacao" aria-label={`Avaliação ${produto.avaliacao}`}>
            ★ {produto.avaliacao.toFixed(1)}
            <small>· avaliações verificadas</small>
          </span>
        )}

        <p className="card-descricao">{produto.descricao}</p>

        <div className="card-selos">
          {produto.freteGratis && <Selo texto="Frete grátis" cor="#16A34A" />}
          <Selo texto={produto.categoria} cor="#14B8A6" />
        </div>

        <div className="card-footer">
          <div className="card-preco-bloco">
            <span className="card-preco">{precoFormatado}</span>
            {produto.parcelas && (
              <span className="card-parcelas">{produto.parcelas}</span>
            )}
          </div>
          <Botao texto="Ver produto" />
        </div>
      </div>
    </article>
  );
}

export default ProdutoCard;
