const perguntas = [
  {
    q: "O que é a Núcleo TADS Store?",
    a: "É uma vitrine digital acadêmica desenvolvida como projeto integrador do curso TADS do IFES. Os produtos vêm de uma API pública (DummyJSON) e simulam um e-commerce real.",
  },
  {
    q: "Os produtos estão realmente à venda?",
    a: "Não. Este é um projeto educacional. Os produtos exibidos servem para demonstrar componentização, integração com API, busca e filtros em React.",
  },
  {
    q: "Como funciona a busca e o filtro?",
    a: "A busca filtra os produtos pelo nome em tempo real. O filtro por categoria mostra apenas itens da categoria selecionada. Ambos operam sobre os dados carregados da API.",
  },
  {
    q: "De onde vêm os produtos exibidos?",
    a: "Os produtos são obtidos via fetch da API pública DummyJSON, restritos às categorias de tecnologia (smartphones, laptops, tablets e acessórios).",
  },
  {
    q: "Como posso acompanhar o projeto?",
    a: "O código-fonte está disponível no GitHub do autor. Os links estão no rodapé da página.",
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
          Tudo o que você precisa saber sobre o projeto e a vitrine.
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
