const linksInstitucionais = [
  { label: "Sobre o Núcleo", href: "#sobre" },
  { label: "Vitrine", href: "#vitrine" },
  { label: "Contato", href: "#contato" },
  { label: "Políticas", href: "#politicas" },
  { label: "FAQ", href: "#faq" },
];

const redes = [
  {
    nome: "Instagram",
    href: "#instagram",
    svg: (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.9.3 2.3.4.6.2 1 .5 1.5 1s.8.9 1 1.5c.2.5.4 1.1.4 2.3.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 1.9-.4 2.3-.2.6-.5 1-1 1.5s-.9.8-1.5 1c-.5.2-1.1.4-2.3.4-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.9-.3-2.3-.4-.6-.2-1-.5-1.5-1s-.8-.9-1-1.5c-.2-.5-.4-1.1-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.3-1.9.4-2.3.2-.6.5-1 1-1.5s.9-.8 1.5-1c.5-.2 1.1-.4 2.3-.4C8.4 2.2 8.8 2.2 12 2.2zm0 5.3a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm0 7.4a2.9 2.9 0 1 1 0-5.8 2.9 2.9 0 0 1 0 5.8zm5.7-7.6a1.1 1.1 0 1 1-2.1 0 1.1 1.1 0 0 1 2.1 0z"
        />
      </svg>
    ),
  },
  {
    nome: "LinkedIn",
    href: "#linkedin",
    svg: (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path
          fill="currentColor"
          d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3 9.5h4V21H3V9.5zm6.5 0h3.8v1.6h.1c.5-1 1.9-2 3.9-2 4.2 0 5 2.8 5 6.4V21h-4v-5c0-1.2 0-2.7-1.7-2.7-1.7 0-2 1.3-2 2.6V21h-4V9.5z"
        />
      </svg>
    ),
  },
  {
    nome: "GitHub",
    href: "#github",
    svg: (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2z"
        />
      </svg>
    ),
  },
];

function Rodape() {
  return (
    <footer className="rodape">
      <div className="rodape-grid">
        <div className="rodape-col">
          <span className="rodape-marca">Núcleo TADS Store</span>
          <p className="rodape-tagline">
            Tecnologia, ciência e inovação em um só núcleo.
          </p>
          <span className="rodape-selo">Curadoria acadêmica TADS</span>
        </div>

        <div className="rodape-col">
          <h4 className="rodape-titulo">Institucional</h4>
          <ul className="rodape-links">
            {linksInstitucionais.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="rodape-col">
          <h4 className="rodape-titulo">Conecte-se</h4>
          <div className="rodape-redes">
            {redes.map((r) => (
              <a
                key={r.nome}
                href={r.href}
                aria-label={r.nome}
                className="rodape-rede"
              >
                {r.svg}
              </a>
            ))}
          </div>
          <p className="rodape-mini">contato@nucleotads.store</p>
        </div>
      </div>

      <div className="rodape-bar">
        <span>© 2026 Núcleo TADS Store · Todos os direitos reservados.</span>
        <span className="rodape-credito">
          Desenvolvido por Matheus Florindo de Deus — Projeto acadêmico TADS
        </span>
      </div>
    </footer>
  );
}

export default Rodape;
