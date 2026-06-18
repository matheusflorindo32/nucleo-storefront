import { useState } from "react";
import Botao from "./Botao.jsx";
import Selo from "./Selo.jsx";
import ModalProduto from "./ModalProduto.jsx";

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
  const [aberto, setAberto] = useState(false);

  const precoFormatado = produto.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const categoriaPt = rotular(produto.category);
  const qtdImagens = (produto.images && produto.images.length) || 1;

  function abrir() {
    setAberto(true);
  }

  function aoTeclar(e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      abrir();
    }
  }

  return (
    <>
      <article
        className="card card--clicavel"
        onClick={abrir}
        onKeyDown={aoTeclar}
        role="button"
        tabIndex={0}
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
            <span onClick={(e) => e.stopPropagation()}>
              <Botao texto="Ver produto" onClick={abrir} />
            </span>
          </div>
        </div>
      </article>

      {aberto && (
        <ModalProduto produto={produto} aoFechar={() => setAberto(false)} />
      )}
    </>
  );
}

export default ProdutoCard;
