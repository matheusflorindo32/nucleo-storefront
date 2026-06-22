import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";

function formatarData(iso) {
  if (!iso) return "—";
  try {
    return new Date(iso).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return "—";
  }
}

function formatarHora(iso) {
  if (!iso) return "—";
  try {
    return new Date(iso).toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return "—";
  }
}

// Ícones inline (lineares, sem libs)
const Icone = {
  Pacote: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7l9-4 9 4-9 4-9-4z" /><path d="M3 7v10l9 4 9-4V7" /><path d="M12 11v10" />
    </svg>
  ),
  Estrela: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l2.9 6.1 6.6.6-5 4.6 1.5 6.7L12 17.8 5.9 21l1.5-6.7-5-4.6 6.6-.6L12 3z" />
    </svg>
  ),
  Olho: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" />
    </svg>
  ),
  Escudo: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" /><path d="M9 12l2 2 4-4" />
    </svg>
  ),
  Vitrine: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l1.5-4h15L21 9" /><path d="M3 9v11h18V9" /><path d="M9 13h6" />
    </svg>
  ),
  Info: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" /><path d="M12 8h.01M11 12h1v5h1" />
    </svg>
  ),
  Pergunta: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" /><path d="M9.5 9a2.5 2.5 0 015 0c0 1.7-2.5 2-2.5 4M12 17h.01" />
    </svg>
  ),
  Sair: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 4h4v16h-4" /><path d="M10 8l-4 4 4 4" /><path d="M6 12h12" />
    </svg>
  ),
};

function MinhaConta() {
  const { usuario, sair } = useAuth();
  const nome = usuario || "aluno";
  const inicial = nome.charAt(0).toUpperCase();

  const loginTs = useMemo(() => localStorage.getItem("nts-login-ts"), []);
  const membroDesde = useMemo(() => localStorage.getItem("nts-membro-desde"), []);

  const [visitas, setVisitas] = useState(1);

  useEffect(() => {
    document.title = "Minha conta — Núcleo TADS Store";
    const atual = Number(sessionStorage.getItem("nts-visitas") || 0) + 1;
    sessionStorage.setItem("nts-visitas", String(atual));
    setVisitas(atual);
  }, []);

  const stats = [
    { id: "pedidos", valor: "0", label: "Pedidos em aberto", icone: <Icone.Pacote />, hint: "Loja didática" },
    { id: "favoritos", valor: "0", label: "Itens favoritos", icone: <Icone.Estrela />, hint: "Lista vazia" },
    { id: "visitas", valor: String(visitas), label: "Visitas nesta sessão", icone: <Icone.Olho />, hint: "sessionStorage" },
    { id: "credito", valor: "∞", label: "Crédito acadêmico", icone: <Icone.Escudo />, hint: "Projeto TADS" },
  ];

  const atalhos = [
    { id: "vitrine", to: "/", titulo: "Voltar à vitrine", desc: "Explorar produtos da DummyJSON", icone: <Icone.Vitrine /> },
    { id: "sobre", to: "/sobre-o-projeto", titulo: "Sobre o projeto", desc: "Rubrica, etapas e tecnologias", icone: <Icone.Info /> },
    { id: "faq", to: "/faq", titulo: "Perguntas frequentes", desc: "Dúvidas sobre a loja", icone: <Icone.Pergunta /> },
  ];

  const atividade = [
    { titulo: "Sessão iniciada", desc: `Login simulado como "${nome}"`, quando: formatarHora(loginTs) || "agora" },
    { titulo: "Acesso à área protegida", desc: "Rota /minha-conta liberada via Context API", quando: "agora" },
    { titulo: "Conta criada", desc: "Primeiro login registrado neste navegador", quando: formatarData(membroDesde) },
  ];

  return (
    <section className="mc-wrap">
      <nav className="mc-breadcrumb" aria-label="Navegação">
        <Link to="/">Início</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">Minha conta</span>
      </nav>

      <div className="mc-grid-topo">
        {/* PERFIL HERO */}
        <article className="mc-card mc-perfil">
          <span className="mc-eyebrow">Área protegida</span>
          <div className="mc-perfil-linha">
            <div className="mc-avatar" aria-hidden="true">{inicial}</div>
            <div className="mc-perfil-texto">
              <h1 className="mc-titulo">
                Olá, <span className="mc-nome">{nome}</span>
              </h1>
              <p className="mc-sub">Bem-vindo de volta à Núcleo TADS Store.</p>
            </div>
          </div>

          <dl className="mc-meta">
            <div>
              <dt>Membro desde</dt>
              <dd>{formatarData(membroDesde)}</dd>
            </div>
            <div>
              <dt>Plano</dt>
              <dd>Estudante TADS</dd>
            </div>
            <div>
              <dt>Sessão iniciada</dt>
              <dd>{formatarHora(loginTs)}</dd>
            </div>
          </dl>
        </article>

        {/* SESSÃO */}
        <article className="mc-card mc-sessao">
          <span className="mc-eyebrow mc-eyebrow-verde">Status</span>
          <div className="mc-pill" aria-label="Sessão ativa">
            <span className="mc-dot" aria-hidden="true" />
            Sessão ativa
          </div>
          <ul className="mc-sessao-lista">
            <li><span>Usuário</span><strong>{nome}</strong></li>
            <li><span>Origem</span><strong>Login simulado</strong></li>
            <li><span>Persistência</span><strong>localStorage</strong></li>
            <li><span>Proteção</span><strong>Context API</strong></li>
          </ul>
          <button
            type="button"
            className="mc-btn-sair"
            onClick={sair}
            aria-label="Encerrar sessão e sair da conta"
          >
            <Icone.Sair /> Encerrar sessão
          </button>
        </article>
      </div>

      {/* STATS */}
      <div className="mc-stats">
        {stats.map((s) => (
          <article key={s.id} className="mc-stat">
            <span className="mc-stat-icone" aria-hidden="true">{s.icone}</span>
            <div className="mc-stat-valor">{s.valor}</div>
            <div className="mc-stat-label">{s.label}</div>
            <div className="mc-stat-hint">{s.hint}</div>
          </article>
        ))}
      </div>

      {/* ATIVIDADE + ATALHOS */}
      <div className="mc-grid-baixo">
        <article className="mc-card mc-atividade">
          <header className="mc-card-head">
            <h2>Atividade recente</h2>
            <span className="mc-tag">localStorage</span>
          </header>
          <ol className="mc-timeline">
            {atividade.map((a, i) => (
              <li key={i}>
                <span className="mc-tl-dot" aria-hidden="true" />
                <div>
                  <strong>{a.titulo}</strong>
                  <p>{a.desc}</p>
                  <time>{a.quando}</time>
                </div>
              </li>
            ))}
          </ol>
        </article>

        <article className="mc-card mc-atalhos">
          <header className="mc-card-head">
            <h2>Atalhos rápidos</h2>
            <span className="mc-tag">React Router</span>
          </header>
          <ul className="mc-atalhos-lista">
            {atalhos.map((a) => (
              <li key={a.id}>
                <Link to={a.to}>
                  <span className="mc-atalho-icone" aria-hidden="true">{a.icone}</span>
                  <span className="mc-atalho-texto">
                    <strong>{a.titulo}</strong>
                    <span>{a.desc}</span>
                  </span>
                  <span className="mc-atalho-seta" aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

export default MinhaConta;
