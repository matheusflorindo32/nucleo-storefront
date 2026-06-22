import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EstadoVazio from "../components/EstadoVazio.jsx";
import { useCart } from "../contexts/CartContext.jsx";
import { formatarPreco } from "../utils/formatadores.js";

const FRETE_GRATIS_ACIMA = 299;
const VALOR_FRETE = 29.9;

function Carrinho() {
  const { itens, subtotal, quantidadeTotal, mudarQtd, remover, limpar } =
    useCart();
  const [pedido, setPedido] = useState(null);

  useEffect(() => {
    document.title = "Carrinho — Núcleo TADS Store";
  }, []);

  const freteGratis = subtotal >= FRETE_GRATIS_ACIMA;
  const frete = itens.length === 0 ? 0 : freteGratis ? 0 : VALOR_FRETE;
  const total = subtotal + frete;

  function finalizar() {
    const codigo = "NTS-" + Date.now().toString().slice(-6);
    setPedido({ codigo, total });
    limpar();
  }

  if (pedido) {
    return (
      <section className="carrinho-wrap">
        <div className="carrinho-sucesso">
          <span className="carrinho-sucesso-icone" aria-hidden="true">✓</span>
          <h1>Pedido simulado realizado!</h1>
          <p>
            Código <strong>{pedido.codigo}</strong> · Total{" "}
            <strong>{formatarPreco(pedido.total)}</strong>
          </p>
          <p className="carrinho-sucesso-aviso">
            Esta é uma loja acadêmica — nenhum pagamento foi processado.
          </p>
          <Link to="/" className="botao botao-primario">
            Continuar comprando
          </Link>
        </div>
      </section>
    );
  }

  if (itens.length === 0) {
    return (
      <section className="carrinho-wrap">
        <nav className="carrinho-breadcrumb" aria-label="Navegação">
          <Link to="/">Início</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Carrinho</span>
        </nav>
        <EstadoVazio
          icone="🛒"
          titulo="Seu carrinho está vazio"
          descricao="Adicione produtos da vitrine para começar."
        >
          <Link to="/" className="botao botao-primario">
            Explorar vitrine
          </Link>
        </EstadoVazio>
      </section>
    );
  }

  return (
    <section className="carrinho-wrap">
      <nav className="carrinho-breadcrumb" aria-label="Navegação">
        <Link to="/">Início</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">Carrinho</span>
      </nav>

      <header className="carrinho-head">
        <div>
          <span className="carrinho-eyebrow">Sacola</span>
          <h1 className="carrinho-titulo">Seu carrinho</h1>
          <p className="carrinho-sub">
            {quantidadeTotal} {quantidadeTotal === 1 ? "item" : "itens"} ·{" "}
            persistência via <code>localStorage</code>
          </p>
        </div>
        <button
          type="button"
          className="carrinho-limpar"
          onClick={limpar}
          aria-label="Esvaziar carrinho"
        >
          Esvaziar
        </button>
      </header>

      <div className="carrinho-grid">
        <ul className="carrinho-lista">
          {itens.map((item) => (
            <li key={item.id} className="carrinho-item">
              <Link to={`/produto/${item.id}`} className="carrinho-item-img">
                <img src={item.thumbnail} alt={item.title} />
              </Link>

              <div className="carrinho-item-info">
                <Link
                  to={`/produto/${item.id}`}
                  className="carrinho-item-titulo"
                >
                  {item.title}
                </Link>
                <span className="carrinho-item-preco">
                  {formatarPreco(item.price)} <small>/ un.</small>
                </span>

                <div className="carrinho-item-acoes">
                  <div
                    className="carrinho-stepper"
                    role="group"
                    aria-label={`Quantidade de ${item.title}`}
                  >
                    <button
                      type="button"
                      onClick={() => mudarQtd(item.id, item.qtd - 1)}
                      aria-label="Diminuir quantidade"
                      disabled={item.qtd <= 1}
                    >
                      −
                    </button>
                    <span aria-live="polite">{item.qtd}</span>
                    <button
                      type="button"
                      onClick={() => mudarQtd(item.id, item.qtd + 1)}
                      aria-label="Aumentar quantidade"
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    className="carrinho-remover"
                    onClick={() => remover(item.id)}
                    aria-label={`Remover ${item.title}`}
                  >
                    Remover
                  </button>
                </div>
              </div>

              <div className="carrinho-item-subtotal" aria-label="Subtotal">
                {formatarPreco(item.price * item.qtd)}
              </div>
            </li>
          ))}
        </ul>

        <aside className="carrinho-resumo" aria-label="Resumo do pedido">
          <h2>Resumo do pedido</h2>

          <dl className="carrinho-resumo-lista">
            <div>
              <dt>Subtotal</dt>
              <dd>{formatarPreco(subtotal)}</dd>
            </div>
            <div>
              <dt>Frete</dt>
              <dd>
                {freteGratis ? (
                  <span className="carrinho-frete-gratis">Grátis</span>
                ) : (
                  formatarPreco(frete)
                )}
              </dd>
            </div>
            {!freteGratis && (
              <p className="carrinho-frete-dica">
                Faltam {formatarPreco(FRETE_GRATIS_ACIMA - subtotal)} para frete
                grátis.
              </p>
            )}
            <div className="carrinho-resumo-total">
              <dt>Total</dt>
              <dd>{formatarPreco(total)}</dd>
            </div>
          </dl>

          <button
            type="button"
            className="botao botao-primario carrinho-finalizar"
            onClick={finalizar}
          >
            Finalizar compra
          </button>

          <p className="carrinho-aviso">
            Checkout simulado — projeto acadêmico Núcleo TADS Store.
          </p>
        </aside>
      </div>
    </section>
  );
}

export default Carrinho;
