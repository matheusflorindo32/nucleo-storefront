const itensPadrao = [
  {
    id: 1,
    icone: "🎯",
    titulo: "Curadoria técnica",
    texto: "Cada produto é avaliado pela equipe do Núcleo TADS antes de entrar na vitrine.",
  },
  {
    id: 2,
    icone: "🚚",
    titulo: "Frete grátis Brasil",
    texto: "Em pedidos selecionados acima de R$ 299, com rastreio em tempo real.",
  },
  {
    id: 3,
    icone: "🛡️",
    titulo: "Garantia estendida",
    texto: "Suporte e troca facilitada em até 12 meses nos itens da categoria Dev.",
  },
  {
    id: 4,
    icone: "💬",
    titulo: "Suporte por devs",
    texto: "Atendimento especializado por estudantes e profissionais de TADS.",
  },
];

function Diferenciais({ itens = itensPadrao }) {
  return (
    <section className="diferenciais" aria-labelledby="diferenciais-titulo">
      <div className="diferenciais-header">
        <span className="diferenciais-eyebrow">Por que comprar aqui</span>
        <h2 id="diferenciais-titulo" className="diferenciais-titulo">
          Autoridade técnica, curadoria de quem entende
        </h2>
      </div>

      <div className="diferenciais-grid">
        {itens.map((item) => (
          <article key={item.id} className="diferencial-card">
            <span className="diferencial-icone" aria-hidden="true">
              {item.icone}
            </span>
            <h3 className="diferencial-titulo">{item.titulo}</h3>
            <p className="diferencial-texto">{item.texto}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Diferenciais;
