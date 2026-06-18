const perguntas = [
  {
    q: "O que é a Núcleo TADS Store?",
    a: "É uma vitrine digital de tecnologia criada como projeto integrador do curso de Tecnologia em Análise e Desenvolvimento de Sistemas (TADS) do IFES.",
  },
  {
    q: "Quais produtos vocês oferecem?",
    a: "Smartphones, notebooks, tablets e acessórios de áudio — uma curadoria voltada para estudo, trabalho e criação.",
  },
  {
    q: "Como funciona a busca e o filtro?",
    a: "A busca filtra os produtos pelo nome em tempo real. O filtro por categoria mostra apenas os itens da categoria escolhida. Os dois recursos podem ser usados juntos.",
  },
  {
    q: "Os preços estão em Real?",
    a: "Sim, todos os valores são apresentados em Real brasileiro (BRL) e formatados no padrão nacional.",
  },
  {
    q: "Como acompanhar o desenvolvimento do projeto?",
    a: "O código-fonte está disponível publicamente no GitHub do autor. O link está no rodapé desta página.",
  },
  {
    q: "Posso usar este projeto como referência?",
    a: "Sim. Trata-se de material acadêmico aberto, sob licença MIT. Basta dar os créditos ao autor.",
  },
];

function FAQ() {
  return (
    <section className="bloco-faq" id="faq">
      <div className="bloco-faq-header">
        <span className="bloco-eyebrow">FAQ</span>
        <h2 className="bloco-titulo">Perguntas frequentes</h2>
        <p className="bloco-sub">
          Tudo o que você precisa saber sobre a Núcleo TADS Store.
        </p>
      </div>

      <div className="bloco-faq-lista">
        {perguntas.map((item, i) => (
          <details key={i} className="bloco-faq-item">
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
