function LogoNTS() {
  return (
    <svg
      className="logo-svg"
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Logo Núcleo TADS Store"
    >
      <defs>
        <linearGradient id="hexGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0A2342" />
          <stop offset="100%" stopColor="#1E5AA8" />
        </linearGradient>
        <linearGradient id="circuitGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C8A24A" />
          <stop offset="100%" stopColor="#16A34A" />
        </linearGradient>
      </defs>
      {/* Circuitos decorativos */}
      <g stroke="url(#circuitGrad)" strokeWidth="2" fill="none" strokeLinecap="round">
        <path d="M14 40 L26 40 L32 34" />
        <path d="M14 80 L26 80 L32 86" />
        <path d="M106 40 L94 40 L88 34" />
        <path d="M106 80 L94 80 L88 86" />
      </g>
      <g fill="#16A34A">
        <circle cx="12" cy="40" r="3" />
        <circle cx="12" cy="80" r="3" />
        <circle cx="108" cy="40" r="3" />
        <circle cx="108" cy="80" r="3" />
      </g>
      {/* Hexágono */}
      <polygon
        points="60,12 102,36 102,84 60,108 18,84 18,36"
        fill="url(#hexGrad)"
        stroke="#14B8A6"
        strokeWidth="2"
      />
      {/* Monograma NTS */}
      <text
        x="60"
        y="72"
        textAnchor="middle"
        fontFamily="system-ui, sans-serif"
        fontWeight="800"
        fontSize="32"
        fill="#FFFFFF"
        letterSpacing="1"
      >
        NTS
      </text>
    </svg>
  );
}

function Cabecalho({ titulo }) {
  return (
    <header className="cabecalho">
      <div className="cabecalho-top">
        <div className="logo-area">
          <LogoNTS />
          <div className="logo-text">
            <h1 className="logo-title">{titulo}</h1>
            <p className="logo-tagline">
              Tecnologia, ciência e inovação em um só núcleo.
            </p>
          </div>
        </div>
      </div>

      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">Vitrine acadêmica · Clean Tech</span>
          <h2 className="hero-title">
            Equipamentos para quem <span className="hero-accent">estuda, desenvolve e cria</span>.
          </h2>
          <p className="hero-sub">
            Produtos inteligentes para quem estuda, desenvolve e transforma ideias em sistemas.
          </p>
        </div>
      </section>
    </header>
  );
}

export default Cabecalho;
