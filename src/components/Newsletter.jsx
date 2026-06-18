import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState("");

  function aoEnviar(e) {
    e.preventDefault();
    const valor = email.trim();
    if (!valor) {
      setErro("Informe um e-mail válido.");
      return;
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(valor)) {
      setErro("Formato de e-mail inválido.");
      return;
    }
    if (valor.length > 255) {
      setErro("E-mail muito longo.");
      return;
    }
    setErro("");
    setEnviado(true);
    setEmail("");
  }

  return (
    <section className="newsletter" id="newsletter">
      <div className="newsletter-inner">
        <div className="newsletter-texto">
          <span className="newsletter-eyebrow">Receba primeiro</span>
          <h2 className="newsletter-titulo">
            Promoções tech direto no seu e-mail
          </h2>
          <p className="newsletter-sub">
            Lançamentos, cupons exclusivos e ofertas-relâmpago em smartphones,
            notebooks, tablets e áudio. Sem spam — só o que importa para o seu
            setup.
          </p>
        </div>

        {enviado ? (
          <div className="newsletter-sucesso" role="status">
            <strong>Inscrição confirmada!</strong>
            <p>
              Em breve você receberá as próximas ofertas da Núcleo TADS Store.
            </p>
            <button
              type="button"
              className="newsletter-novamente"
              onClick={() => setEnviado(false)}
            >
              Cadastrar outro e-mail
            </button>
          </div>
        ) : (
          <form className="newsletter-form" onSubmit={aoEnviar} noValidate>
            <label htmlFor="newsletter-email" className="newsletter-label">
              Seu melhor e-mail
            </label>
            <div className="newsletter-row">
              <input
                id="newsletter-email"
                type="email"
                className="newsletter-input"
                placeholder="voce@exemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength={255}
                autoComplete="email"
                required
              />
              <button type="submit" className="newsletter-botao">
                Quero receber
              </button>
            </div>
            {erro && <span className="newsletter-erro">{erro}</span>}
            <span className="newsletter-aviso">
              Ao se inscrever você concorda em receber e-mails da Núcleo TADS
              Store. Cancele quando quiser.
            </span>
          </form>
        )}
      </div>
    </section>
  );
}

export default Newsletter;
