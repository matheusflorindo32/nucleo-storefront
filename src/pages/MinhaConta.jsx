import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";

const cardsConta = [
  {
    id: "pedidos",
    titulo: "Meus pedidos",
    descricao: "Acompanhe o status das suas compras recentes.",
    icone: "📦",
    badge: "0 em aberto",
  },
  {
    id: "favoritos",
    titulo: "Favoritos",
    descricao: "Produtos que você salvou para comprar depois.",
    icone: "⭐",
    badge: "Lista vazia",
  },
  {
    id: "dados",
    titulo: "Dados da conta",
    descricao: "Endereço, contato e preferências de comunicação.",
    icone: "👤",
    badge: "Atualizado",
  },
];

function MinhaConta() {
  const { usuario, sair } = useAuth();

  useEffect(() => {
    document.title = "Minha conta — Núcleo TADS Store";
  }, []);

  return (
    <section className="conta-wrap">
      <header className="conta-header">
        <div>
          <span className="conta-eyebrow">Área protegida</span>
          <h1 className="conta-title">
            Olá, <span className="conta-nome">{usuario || "aluno"}</span> 👋
          </h1>
          <p className="conta-sub">
            Sessão ativa · login simulado para o projeto acadêmico.
          </p>
        </div>
        <button type="button" className="botao botao-secundario" onClick={sair}>
          Sair da conta
        </button>
      </header>

      <div className="conta-grid">
        {cardsConta.map((c) => (
          <article key={c.id} className="conta-card">
            <span className="conta-card-icone" aria-hidden="true">
              {c.icone}
            </span>
            <h2 className="conta-card-titulo">{c.titulo}</h2>
            <p className="conta-card-desc">{c.descricao}</p>
            <span className="conta-card-badge">{c.badge}</span>
          </article>
        ))}
      </div>

      <div className="conta-rodape">
        <Link to="/" className="conta-link">
          ← Voltar para a vitrine
        </Link>
      </div>
    </section>
  );
}

export default MinhaConta;
