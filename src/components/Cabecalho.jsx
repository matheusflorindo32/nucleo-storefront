import LogoNTS from "./LogoNTS.jsx";
import MenuTopo from "./MenuTopo.jsx";

const itensMenu = [
  { label: "Início", href: "#inicio", ativo: true },
  { label: "Vitrine", href: "#vitrine" },
  { label: "Sobre", href: "#sobre" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
  { label: "Projeto", to: "/sobre-o-projeto" },
];

const chipsHero = [
  { id: 1, texto: "Smartphones de ponta" },
  { id: 2, texto: "Notebooks para produtividade" },
  { id: 3, texto: "Áudio & acessórios" },
];

function Cabecalho({ mostrarHero = false }) {
  return (
    <header className="cabecalho" id="inicio">
      <div className="cabecalho-top">
        <LogoNTS className="logo-img" />
        <MenuTopo itens={itensMenu} />
      </div>

      {mostrarHero && (
      <section className="hero">
        <div className="hero-content">
          <div className="hero-left">
            <span className="hero-badge">Tecnologia em destaque</span>

            <h1 className="hero-title">
              Tecnologia premium para o seu{" "}
              <span className="hero-accent">núcleo de produtividade</span>.
            </h1>

            <p className="hero-sub">
              Smartphones, notebooks, tablets e acessórios selecionados para
              quem vive conectado a estudo, trabalho e criação.
            </p>

            <ul className="hero-chips" aria-label="Destaques da loja">
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

            <div className="dot dot-1" />
            <div className="dot dot-2" />
            <div className="dot dot-3" />
            <div className="dot dot-4" />

            {/* Núcleo central — orbe tech em SVG puro (inspirado em serafim/splite, sem dependências) */}
            <div className="orb">
              <svg
                className="orb-svg"
                viewBox="0 0 320 320"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient id="orbCore" cx="50%" cy="40%" r="60%">
                    <stop offset="0%" stopColor="#7DD3FC" stopOpacity="1" />
                    <stop offset="35%" stopColor="#14B8A6" stopOpacity="0.95" />
                    <stop offset="75%" stopColor="#1E5AA8" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#0A2342" stopOpacity="1" />
                  </radialGradient>
                  <radialGradient id="orbGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#14B8A6" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="orbCircuit" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#7DD3FC" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#C8A24A" stopOpacity="0.7" />
                  </linearGradient>
                </defs>

                {/* glow externo */}
                <circle cx="160" cy="160" r="155" fill="url(#orbGlow)" />

                {/* esfera */}
                <circle
                  cx="160"
                  cy="160"
                  r="110"
                  fill="url(#orbCore)"
                  stroke="#14B8A6"
                  strokeOpacity="0.45"
                  strokeWidth="1.5"
                />

                {/* highlight superior */}
                <ellipse
                  cx="135"
                  cy="115"
                  rx="55"
                  ry="32"
                  fill="#FFFFFF"
                  fillOpacity="0.18"
                />

                {/* trilhas de circuito (animadas por CSS) */}
                <g
                  className="orb-circuit"
                  fill="none"
                  stroke="url(#orbCircuit)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                >
                  <path d="M70 160 Q160 60 250 160" strokeOpacity="0.55" />
                  <path d="M70 160 Q160 260 250 160" strokeOpacity="0.45" />
                  <path d="M160 50 Q260 160 160 270" strokeOpacity="0.4" />
                  <path d="M160 50 Q60 160 160 270" strokeOpacity="0.35" />
                </g>

                {/* pontos de conexão */}
                <g className="orb-nodes">
                  <circle cx="70" cy="160" r="3.2" fill="#7DD3FC" />
                  <circle cx="250" cy="160" r="3.2" fill="#C8A24A" />
                  <circle cx="160" cy="50" r="3.2" fill="#14B8A6" />
                  <circle cx="160" cy="270" r="3.2" fill="#7DD3FC" />
                </g>

                {/* logo central — letra N */}
                <text
                  x="160"
                  y="178"
                  textAnchor="middle"
                  fontFamily="system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
                  fontWeight="900"
                  fontSize="72"
                  fill="#FFFFFF"
                  fillOpacity="0.95"
                >
                  N
                </text>
              </svg>

              {/* partículas orbitando (CSS) */}
              <span className="orb-particle p1" />
              <span className="orb-particle p2" />
              <span className="orb-particle p3" />
              <span className="orb-particle p4" />
              <span className="orb-particle p5" />
              <span className="orb-particle p6" />
            </div>

            <div className="float-card float-card-1">
              <span className="float-icon">📱</span>
              <div>
                <strong>Mobilidade</strong>
                <small>Smartphones premium</small>
              </div>
            </div>

            <div className="float-card float-card-2">
              <span className="float-icon">💻</span>
              <div>
                <strong>Produtividade</strong>
                <small>Notebooks e tablets</small>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}
    </header>
  );
}

export default Cabecalho;
