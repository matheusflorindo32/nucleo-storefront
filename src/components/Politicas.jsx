const politicas = [
  {
    titulo: "Política de Privacidade",
    conteudo:
      "A Núcleo TADS Store é um projeto acadêmico e não coleta, armazena ou compartilha dados pessoais dos visitantes. Nenhum formulário do site grava informações em banco de dados. Cookies não são utilizados para rastreamento.",
  },
  {
    titulo: "Política de Trocas e Devoluções",
    conteudo:
      "Como esta é uma vitrine demonstrativa, não há transações comerciais reais. Em um cenário real, trocas seriam aceitas em até 7 dias após o recebimento, conforme o Código de Defesa do Consumidor.",
  },
  {
    titulo: "Termos de Uso",
    conteudo:
      "O conteúdo deste site é disponibilizado para fins educacionais. O código-fonte está sob licença MIT e pode ser reutilizado mediante atribuição ao autor. Imagens e dados de produtos pertencem à API pública DummyJSON.",
  },
];

function Politicas() {
  return (
    <section className="bloco-politicas" id="politicas">
      <div className="bloco-faq-header">
        <span className="bloco-eyebrow">Políticas</span>
        <h2 className="bloco-titulo">Transparência e termos</h2>
        <p className="bloco-sub">
          Diretrizes do projeto acadêmico Núcleo TADS Store.
        </p>
      </div>

      <div className="bloco-faq-lista">
        {politicas.map((p, i) => (
          <details key={i} className="bloco-faq-item">
            <summary>{p.titulo}</summary>
            <p>{p.conteudo}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default Politicas;
