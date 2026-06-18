import { useState } from "react";

const interesses = [
  "Smartphones",
  "Notebooks",
  "Tablets",
  "Áudio & Acessórios",
];

function Leads() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [interesse, setInteresse] = useState(interesses[0]);
  const [erros, setErros] = useState({});
  const [enviado, setEnviado] = useState(false);

  function validar() {
    const novosErros = {};
    if (!nome.trim()) novosErros.nome = "Informe seu nome.";
    else if (nome.trim().length > 100) novosErros.nome = "Nome muito longo.";

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) novosErros.email = "Informe seu e-mail.";
    else if (!regex.test(email.trim()))
      novosErros.email = "E-mail inválido.";

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  }

  function aoEnviar(e) {
    e.preventDefault();
    if (!validar()) return;
    setEnviado(true);
    setNome("");
    setEmail("");
    setInteresse(interesses[0]);
  }

  return (
    <section className="leads" id="leads">
      <div className="leads-grid">
        <div className="leads-pitch">
          <span className="leads-eyebrow">Consultoria gratuita</span>
          <h2 className="leads-titulo">
            Monte o setup tech ideal para o seu núcleo
          </h2>
          <p className="leads-sub">
            Receba uma recomendação personalizada de produtos com base no seu
            uso — estudo, desenvolvimento, criação ou jogos. Sem custo, sem
            compromisso.
          </p>
          <ul className="leads-bullets">
            <li>Análise de necessidades em até 24h</li>
            <li>Comparativo entre 3 produtos da nossa curadoria</li>
            <li>Cupom de boas-vindas exclusivo</li>
          </ul>
        </div>

        <div className="leads-card">
          {enviado ? (
            <div className="leads-sucesso" role="status">
              <h3>Obrigado!</h3>
              <p>
                Recebemos seus dados. Em breve nosso time entrará em contato
                com a sua recomendação personalizada.
              </p>
              <button
                type="button"
                className="leads-novamente"
                onClick={() => setEnviado(false)}
              >
                Enviar outro pedido
              </button>
            </div>
          ) : (
            <form className="leads-form" onSubmit={aoEnviar} noValidate>
              <h3 className="leads-form-titulo">Quero minha consultoria</h3>

              <label className="leads-label" htmlFor="lead-nome">
                Nome
              </label>
              <input
                id="lead-nome"
                type="text"
                className="leads-input"
                placeholder="Como podemos te chamar?"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                maxLength={100}
                autoComplete="name"
                required
              />
              {erros.nome && <span className="leads-erro">{erros.nome}</span>}

              <label className="leads-label" htmlFor="lead-email">
                E-mail
              </label>
              <input
                id="lead-email"
                type="email"
                className="leads-input"
                placeholder="voce@exemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength={255}
                autoComplete="email"
                required
              />
              {erros.email && <span className="leads-erro">{erros.email}</span>}

              <label className="leads-label" htmlFor="lead-interesse">
                Principal interesse
              </label>
              <select
                id="lead-interesse"
                className="leads-input"
                value={interesse}
                onChange={(e) => setInteresse(e.target.value)}
              >
                {interesses.map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>

              <button type="submit" className="leads-botao">
                Receber minha recomendação
              </button>
              <span className="leads-aviso">
                Seus dados são usados apenas para esta consultoria — projeto
                acadêmico, sem armazenamento real.
              </span>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Leads;
