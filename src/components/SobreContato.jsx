function SobreContato() {
  return (
    <section className="bloco-info" id="sobre">
      <div className="bloco-info-grid">
        <div className="bloco-info-col">
          <span className="bloco-eyebrow">Sobre o Núcleo</span>
          <h2 className="bloco-titulo">Tecnologia com propósito acadêmico</h2>
          <p className="bloco-texto">
            A Núcleo TADS Store é uma vitrine digital criada como projeto
            integrador do curso de Tecnologia em Análise e Desenvolvimento de
            Sistemas do IFES. Reunimos equipamentos pensados para estudantes,
            desenvolvedores e pesquisadores que transformam ideias em sistemas.
          </p>
          <p className="bloco-texto">
            Cada produto é selecionado com curadoria técnica para sustentar
            estudos, código e experimentação científica no dia a dia da
            comunidade TADS.
          </p>
        </div>

        <div className="bloco-info-col" id="contato">
          <span className="bloco-eyebrow">Contato</span>
          <h2 className="bloco-titulo">Fale com a gente</h2>
          <ul className="bloco-contato">
            <li>
              <strong>E-mail</strong>
              <a href="mailto:matheusdideusf@gmail.com">
                matheusdideusf@gmail.com
              </a>
            </li>
            <li>
              <strong>Instituição</strong>
              <span>IFES — Tecnologia em Análise e Desenvolvimento de Sistemas</span>
            </li>
            <li>
              <strong>Responsável</strong>
              <span>Matheus Florindo de Deus</span>
            </li>
          </ul>
          <a
            className="bloco-cta"
            href="mailto:matheusdideusf@gmail.com?subject=Contato%20Núcleo%20TADS%20Store"
          >
            Enviar mensagem
          </a>
        </div>
      </div>
    </section>
  );
}

export default SobreContato;
