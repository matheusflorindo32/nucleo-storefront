import MenuTopo from "./MenuTopo.jsx";

const itensMenu = [
  { label: "Início", href: "#inicio", ativo: true },
  { label: "Vitrine", href: "#vitrine" },
  { label: "Categorias", href: "#categorias" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const chipsHero = [
  { id: 1, texto: "Curadoria técnica" },
  { id: 2, texto: "Frete grátis Brasil" },
  { id: 3, texto: "Suporte por devs" },
];

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
      <polygon
        points="60,12 102,36 102,84 60,108 18,84 18,36"
        fill="url(#hexGrad)"
        stroke="#14B8A6"
        strokeWidth="2"
      />
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

function Cabecalho() {
  return (
    <header className="cabecalho" id="inicio">
      <div className="cabecalho-top">
        <div className="logo-area">
          <LogoNTS />
          <div className="logo-text">
            <h1 className="logo-title">Núcleo TADS Store</h1>
            <p className="logo-tagline">Tecnologia, ciência e inovação em um só núcleo.</p>
          </div>
        </div>
        <MenuTopo itens={itensMenu} />
      </div>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-left">
            <span className="hero-badge">Vitrine de Produtos</span>

            <h1 className="hero-title">
              Equipamentos inteligentes para quem{" "}
              <span className="hero-accent">estuda, desenvolve e cria</span>.
            </h1>

            <p className="hero-sub">
              Produtos selecionados para estudantes, desenvolvedores e
              pesquisadores que transformam ideias em sistemas.
            </p>

            <ul className="hero-chips" aria-label="Diferenciais">
              {chipsHero.map((chip) => (
                <li key={chip.id} className="hero-chip">
                  <span aria-hidden="true">✓</span> {chip.texto}
                </li>
              ))}
            </ul>

            <p className="hero-apoio">
              Tecnologia, ciência e inovação em um só núcleo.
            </p>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="ring ring-1" />
            <div className="ring ring-2" />
            <div className="ring ring-3" />
            <div className="halo" />

            <div className="hex" />

            <div className="dot dot-1" />
            <div className="dot dot-2" />
            <div className="dot dot-3" />
            <div className="dot dot-4" />

            <div className="product-mock">
              <div className="product-mock-bar">
                <span />
                <span />
                <span />
              </div>
              <div className="product-mock-screen">
                <div className="mock-brand">
                  <LogoNTS />
                  <div className="mock-brand-text">
                    <strong>Núcleo TADS Store</strong>
                    <small>Vitrine acadêmica</small>
                  </div>
                </div>

                <div className="mock-featured">
                  <div className="mock-featured-icon">💻</div>
                  <div className="mock-featured-info">
                    <strong>Kit Dev Starter</strong>
                    <span className="mock-price">Curadoria técnica</span>
                  </div>
                  <span className="mock-tag">Destaque</span>
                </div>

                <div className="mock-thumbs">
                  <span className="mock-thumb t1" />
                  <span className="mock-thumb t2" />
                  <span className="mock-thumb t3" />
                </div>
              </div>
            </div>

            <div className="float-card float-card-1">
              <span className="float-icon">⚡</span>
              <div>
                <strong>Performance</strong>
                <small>Pronto para devs</small>
              </div>
            </div>

            <div className="float-card float-card-2">
              <span className="float-icon">🧪</span>
              <div>
                <strong>Ciência</strong>
                <small>Curadoria técnica</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Cabecalho;
