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

function Detalhe() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [imagemAtiva, setImagemAtiva] = useState(0);

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
      } catch (e) {
        setErro(
          "Não foi possível carregar os detalhes do produto. Tente novamente mais tarde."
        );
      } finally {
        setCarregando(false);
      }
    }

    carregar();
  }, [id]);

  if (carregando) {
    return (
      <section className="detalhe-page">
        <p className="detalhe-estado">Carregando produto...</p>
      </section>
    );
  }

  if (erro) {
    return (
      <section className="detalhe-page">
        <p className="detalhe-estado detalhe-estado--erro">{erro}</p>
        <Link to="/" className="detalhe-voltar">
          ← Voltar para a loja
        </Link>
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

  return (
    <section className="detalhe-page">
      <Link to="/" className="detalhe-voltar">
        ← Voltar para a loja
      </Link>

      <div className="detalhe-grid">
        <div className="detalhe-galeria">
          <div className="detalhe-imagem-principal">
            <img src={imagens[imagemAtiva]} alt={produto.title} />
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
                  <img src={img} alt={`${produto.title} - imagem ${i + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="detalhe-infos">
          <span className="detalhe-categoria">{rotular(produto.category)}</span>
          <h1 className="detalhe-titulo">{produto.title}</h1>

          {produto.brand && (
            <p className="detalhe-marca">
              Marca: <strong>{produto.brand}</strong>
            </p>
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
              <Selo
                texto={`★ ${produto.rating.toFixed(2)}`}
                cor="#0A2342"
              />
            )}
          </div>

          {produto.description && (
            <p className="detalhe-descricao">{produto.description}</p>
          )}

          <div className="detalhe-preco-bloco">
            <span className="detalhe-preco">{precoFormatado}</span>
            {produto.discountPercentage > 0 && (
              <span className="detalhe-desconto">
                -{produto.discountPercentage.toFixed(0)}%
              </span>
            )}
          </div>

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
