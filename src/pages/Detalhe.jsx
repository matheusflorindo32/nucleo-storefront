import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Selo from "../components/Selo.jsx";

const rotulosCategoria = {
  smartphones: "Smartphones",
  laptops: "Notebooks",
  tablets: "Tablets",
  "mobile-accessories": "Áudio & Acessórios",
};

function rotular(cat) {
  return rotulosCategoria[cat] || cat;
}

function Estrelas({ nota }) {
  const cheias = Math.round(nota || 0);
  return (
    <span className="detalhe-estrelas" aria-label={`Nota ${nota}`}>
      {"★".repeat(cheias)}
      <span className="detalhe-estrelas-vazias">{"★".repeat(5 - cheias)}</span>
    </span>
  );
}

function Detalhe() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [imagemAtiva, setImagemAtiva] = useState(0);
  const [tentativa, setTentativa] = useState(0);

  useEffect(() => {
    async function carregar() {
      try {
        setCarregando(true);
        setErro(null);
        setImagemAtiva(0);

        const resposta = await fetch(`https://dummyjson.com/products/${id}`);
        if (!resposta.ok) throw new Error("Falha na requisição");
        const dados = await resposta.json();
        setProduto(dados);
        document.title = `${dados.title} — Núcleo TADS Store`;
      } catch (e) {
        setErro(
          "Não foi possível carregar os detalhes do produto. Tente novamente mais tarde."
        );
        document.title = "Produto — Núcleo TADS Store";
      } finally {
        setCarregando(false);
      }
    }

    carregar();
  }, [id, tentativa]);

  if (carregando) {
    return (
      <section className="detalhe-page">
        <Link to="/" className="detalhe-voltar">← Voltar para a loja</Link>
        <div className="detalhe-grid">
          <div className="detalhe-galeria">
            <div className="detalhe-imagem-principal skeleton skeleton--img" />
            <div className="detalhe-thumbs">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="detalhe-thumb skeleton" />
              ))}
            </div>
          </div>
          <div className="detalhe-infos">
            <div className="skeleton skeleton--line skeleton--line-short" />
            <div className="skeleton skeleton--line skeleton--line-title" />
            <div className="skeleton skeleton--line" />
            <div className="skeleton skeleton--line" />
            <div className="skeleton skeleton--line skeleton--line-short" />
            <div className="skeleton skeleton--line skeleton--line-price" />
          </div>
        </div>
      </section>
    );
  }

  if (erro) {
    return (
      <section className="detalhe-page">
        <Link to="/" className="detalhe-voltar">← Voltar para a loja</Link>
        <div className="detalhe-erro-box">
          <p className="detalhe-estado detalhe-estado--erro">{erro}</p>
          <button
            type="button"
            className="detalhe-retry"
            onClick={() => setTentativa((t) => t + 1)}
          >
            Tentar novamente
          </button>
        </div>
      </section>
    );
  }

  if (!produto) return null;

  const precoFormatado = produto.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const imagens =
    produto.images && produto.images.length > 0
      ? produto.images
      : [produto.thumbnail];

  const categoriaPt = rotular(produto.category);

  return (
    <section className="detalhe-page">
      <Link to="/" className="detalhe-voltar">← Voltar para a loja</Link>

      <nav className="detalhe-breadcrumb" aria-label="Caminho da página">
        <Link to="/">Loja</Link>
        <span aria-hidden="true">›</span>
        <Link to={`/?categoria=${produto.category}`}>{categoriaPt}</Link>
        <span aria-hidden="true">›</span>
        <span className="detalhe-breadcrumb-atual">{produto.title}</span>
      </nav>

      <div className="detalhe-grid">
        <div className="detalhe-galeria">
          <div className="detalhe-imagem-principal">
            <img
              key={imagemAtiva}
              src={imagens[imagemAtiva]}
              alt={`${produto.title} — imagem ${imagemAtiva + 1}`}
              className="detalhe-img-fade"
            />
          </div>

          {imagens.length > 1 && (
            <div className="detalhe-thumbs">
              {imagens.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  className={
                    "detalhe-thumb" +
                    (i === imagemAtiva ? " detalhe-thumb--ativa" : "")
                  }
                  onClick={() => setImagemAtiva(i)}
                  aria-label={`Imagem ${i + 1}`}
                >
                  <img src={img} alt={`${produto.title} - miniatura ${i + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="detalhe-infos">
          <span className="detalhe-categoria">{categoriaPt}</span>
          <h1 className="detalhe-titulo">{produto.title}</h1>

          {produto.brand && (
            <p className="detalhe-marca">
              Marca: <strong>{produto.brand}</strong>
            </p>
          )}

          {produto.tags && produto.tags.length > 0 && (
            <ul className="detalhe-tags" aria-label="Tags">
              {produto.tags.slice(0, 6).map((t) => (
                <li key={t} className="detalhe-tag">#{t}</li>
              ))}
            </ul>
          )}

          <div className="detalhe-selos">
            {produto.rating >= 4.5 && (
              <Selo texto="Produto destaque" cor="#16A34A" />
            )}
            {produto.stock > 0 ? (
              <Selo texto={`Em estoque (${produto.stock})`} cor="#14B8A6" />
            ) : (
              <Selo texto="Indisponível" cor="#9CA3AF" />
            )}
            {typeof produto.rating === "number" && (
              <Selo texto={`★ ${produto.rating.toFixed(2)}`} cor="#0A2342" />
            )}
          </div>

          {produto.description && (
            <p className="detalhe-descricao">{produto.description}</p>
          )}

          <div className="detalhe-preco-bloco">
            <div className="detalhe-preco-col">
              <span className="detalhe-preco-eyebrow">À vista</span>
              <span className="detalhe-preco">{precoFormatado}</span>
            </div>
            {produto.discountPercentage > 0 && (
              <span className="detalhe-desconto">
                -{produto.discountPercentage.toFixed(0)}%
              </span>
            )}
          </div>

          {(produto.sku || produto.weight || produto.dimensions) && (
            <div className="detalhe-bloco">
              <h2 className="detalhe-bloco-titulo">Especificações</h2>
              <dl className="detalhe-specs">
                {produto.sku && (
                  <>
                    <dt>SKU</dt>
                    <dd>{produto.sku}</dd>
                  </>
                )}
                {produto.weight && (
                  <>
                    <dt>Peso</dt>
                    <dd>{produto.weight} kg</dd>
                  </>
                )}
                {produto.dimensions && (
                  <>
                    <dt>Dimensões</dt>
                    <dd>
                      {produto.dimensions.width} × {produto.dimensions.height} ×{" "}
                      {produto.dimensions.depth} cm
                    </dd>
                  </>
                )}
              </dl>
            </div>
          )}

          {(produto.warrantyInformation ||
            produto.shippingInformation ||
            produto.returnPolicy) && (
            <div className="detalhe-bloco">
              <h2 className="detalhe-bloco-titulo">Garantia, envio e trocas</h2>
              <div className="detalhe-policies">
                {produto.warrantyInformation && (
                  <div className="detalhe-policy">
                    <span className="detalhe-policy-icon" aria-hidden="true">🛡️</span>
                    <div>
                      <strong>Garantia</strong>
                      <p>{produto.warrantyInformation}</p>
                    </div>
                  </div>
                )}
                {produto.shippingInformation && (
                  <div className="detalhe-policy">
                    <span className="detalhe-policy-icon" aria-hidden="true">🚚</span>
                    <div>
                      <strong>Envio</strong>
                      <p>{produto.shippingInformation}</p>
                    </div>
                  </div>
                )}
                {produto.returnPolicy && (
                  <div className="detalhe-policy">
                    <span className="detalhe-policy-icon" aria-hidden="true">↩️</span>
                    <div>
                      <strong>Trocas</strong>
                      <p>{produto.returnPolicy}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {produto.reviews && produto.reviews.length > 0 && (
            <div className="detalhe-bloco">
              <h2 className="detalhe-bloco-titulo">Avaliações de clientes</h2>
              <ul className="detalhe-reviews">
                {produto.reviews.slice(0, 3).map((r, i) => (
                  <li key={i} className="detalhe-review">
                    <div className="detalhe-review-head">
                      <strong>{r.reviewerName}</strong>
                      <Estrelas nota={r.rating} />
                    </div>
                    <p>{r.comment}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <p className="detalhe-aviso">
            Vitrine acadêmica — produto exibido a partir de dados públicos da
            API DummyJSON.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Detalhe;
