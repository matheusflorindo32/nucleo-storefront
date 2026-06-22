// Ícones lineares inline (sem libs) — mesmo padrão premium da página Minha Conta
const Icon = {
  Alvo: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  ),
  Caminhao: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7h11v9H3z" /><path d="M14 10h4l3 3v3h-7" /><circle cx="7" cy="18" r="1.8" /><circle cx="17" cy="18" r="1.8" />
    </svg>
  ),
  Escudo: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" /><path d="M9 12l2 2 4-4" />
    </svg>
  ),
  Codigo: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 7l-5 5 5 5" /><path d="M16 7l5 5-5 5" /><path d="M14 4l-4 16" />
    </svg>
  ),
};

const itensPadrao = [
  {
    id: 1,
    icone: <Icon.Alvo />,
    eyebrow: "Curadoria",
    titulo: "Curadoria técnica",
    texto: "Cada produto é avaliado pela equipe do Núcleo TADS antes de entrar na vitrine.",
    metricaLabel: "Aprovação",
    metricaValor: "100%",
  },
  {
    id: 2,
    icone: <Icon.Caminhao />,
    eyebrow: "Logística",
    titulo: "Frete grátis Brasil",
    texto: "Em pedidos selecionados acima de R$ 299, com rastreio em tempo real.",
    metricaLabel: "A partir de",
    metricaValor: "R$ 299",
  },
  {
    id: 3,
    icone: <Icon.Escudo />,
    eyebrow: "Proteção",
    titulo: "Garantia estendida",
    texto: "Suporte e troca facilitada em até 12 meses nos itens da categoria Dev.",
    metricaLabel: "Cobertura",
    metricaValor: "12 meses",
  },
  {
    id: 4,
    icone: <Icon.Codigo />,
    eyebrow: "Atendimento",
    titulo: "Suporte por devs",
    texto: "Atendimento especializado por estudantes e profissionais de TADS.",
    metricaLabel: "Resposta",
    metricaValor: "< 24h",
  },
];

function Diferenciais({ itens = itensPadrao }) {
  return (
    <section className="dif" aria-labelledby="dif-titulo">
      <div className="dif-header">
        <span className="dif-eyebrow">Por que comprar aqui</span>
        <h2 id="dif-titulo" className="dif-titulo">
          Autoridade técnica, <span className="dif-titulo-grad">curadoria de quem entende</span>
        </h2>
        <p className="dif-sub">
          Quatro pilares que diferenciam a Núcleo TADS Store de uma loja qualquer.
        </p>
      </div>

      <div className="dif-grid">
        {itens.map((item, i) => (
          <article
            key={item.id}
            className="dif-card"
            style={{ "--i": i }}
            tabIndex={0}
            aria-label={`${item.titulo}: ${item.texto}`}
          >
            <div className="dif-card-glow" aria-hidden="true" />
            <div className="dif-card-grid" aria-hidden="true" />

            <div className="dif-card-top">
              <span className="dif-icone" aria-hidden="true">{item.icone}</span>
              <span className="dif-pilar">0{item.id} · {item.eyebrow}</span>
            </div>

            <h3 className="dif-card-titulo">{item.titulo}</h3>
            <p className="dif-card-texto">{item.texto}</p>

            <div className="dif-card-rodape">
              <div className="dif-metrica">
                <span className="dif-metrica-label">{item.metricaLabel}</span>
                <strong className="dif-metrica-valor">{item.metricaValor}</strong>
              </div>
              <span className="dif-seta" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
                </svg>
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Diferenciais;
