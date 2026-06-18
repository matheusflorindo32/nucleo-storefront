import { useEffect, useState } from "react";
import Selo from "./Selo.jsx";
import Botao from "./Botao.jsx";

const rotulosCategoria = {
  smartphones: "Smartphones",
  laptops: "Notebooks",
  tablets: "Tablets",
  "mobile-accessories": "Áudio & Acessórios",
};

function ModalProduto({ produto, aoFechar }) {
  const imagens =
    produto.images && produto.images.length > 0
      ? produto.images
      : [produto.thumbnail];

  const [indice, setIndice] = useState(0);

  // Trava o scroll do body apenas enquanto o modal está montado
  useEffect(() => {
    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflowAnterior || "";
    };
  }, []);

  // Atalhos de teclado (ESC + setas)
  useEffect(() => {
    function aoApertarTecla(e) {
      if (e.key === "Escape") aoFechar();
      if (e.key === "ArrowRight") avancar();
      if (e.key === "ArrowLeft") voltar();
    }
    document.addEventListener("keydown", aoApertarTecla);
    return () => document.removeEventListener("keydown", aoApertarTecla);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imagens.length]);


  function avancar() {
    setIndice((i) => (i + 1) % imagens.length);
  }
  function voltar() {
    setIndice((i) => (i - 1 + imagens.length) % imagens.length);
  }

  const precoFormatado = produto.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const categoriaPt = rotulosCategoria[produto.category] || produto.category;

  return (
    <div
      className="modal-overlay"
      onClick={aoFechar}
      role="dialog"
      aria-modal="true"
      aria-label={`Detalhes do produto ${produto.title}`}
    >
      <div
        className="modal-conteudo"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-fechar"
          onClick={aoFechar}
          aria-label="Fechar"
          type="button"
        >
          ×
        </button>

        <div className="modal-galeria">
          <div className="modal-galeria-principal">
            <img
              src={imagens[indice]}
              alt={`${produto.title} — imagem ${indice + 1}`}
              className="modal-galeria-img"
            />
            {imagens.length > 1 && (
              <>
                <button
                  type="button"
                  className="modal-galeria-nav modal-galeria-nav--prev"
                  onClick={voltar}
                  aria-label="Imagem anterior"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="modal-galeria-nav modal-galeria-nav--next"
                  onClick={avancar}
                  aria-label="Próxima imagem"
                >
                  ›
                </button>
                <span className="modal-galeria-contador">
                  {indice + 1} / {imagens.length}
                </span>
              </>
            )}
          </div>

          {imagens.length > 1 && (
            <div className="modal-thumbs">
              {imagens.map((src, i) => (
                <button
                  key={src + i}
                  type="button"
                  className={
                    "modal-thumb" +
                    (i === indice ? " modal-thumb--ativa" : "")
                  }
                  onClick={() => setIndice(i)}
                  aria-label={`Ver imagem ${i + 1}`}
                >
                  <img src={src} alt="" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="modal-info">
          <span className="modal-categoria">{categoriaPt}</span>
          <h2 className="modal-titulo">{produto.title}</h2>

          {produto.brand && (
            <p className="modal-marca">
              Marca: <strong>{produto.brand}</strong>
            </p>
          )}

          <div className="modal-selos">
            {produto.rating >= 4.5 && (
              <Selo texto={`★ ${produto.rating.toFixed(1)} destaque`} cor="#16A34A" />
            )}
            {produto.stock > 0 ? (
              <Selo texto={`Em estoque (${produto.stock})`} cor="#14B8A6" />
            ) : (
              <Selo texto="Indisponível" cor="#94A3B8" />
            )}
          </div>

          <p className="modal-descricao">{produto.description}</p>

          <div className="modal-preco-bloco">
            <span className="modal-preco">{precoFormatado}</span>
            {produto.discountPercentage > 0 && (
              <span className="modal-desconto">
                {produto.discountPercentage.toFixed(0)}% OFF
              </span>
            )}
          </div>

          <Botao texto="Adicionar ao carrinho" />
          <p className="modal-aviso">
            Demonstração acadêmica — sem fluxo de compra real.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ModalProduto;
