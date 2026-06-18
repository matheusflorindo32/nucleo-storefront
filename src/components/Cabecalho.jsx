import logoNts from "../assets/logo-nts.png.asset.json";

function Cabecalho() {
  return (
    <header className="cabecalho">
      <div className="cabecalho-top">
        <div className="logo-area">
          <img
            src={logoNts.url}
            alt="Núcleo TADS Store — Tecnologia, ciência e inovação em um só núcleo"
            className="logo-img"
          />
        </div>
      </div>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-left">
            <span className="hero-badge">Clean Tech · Vitrine acadêmica</span>

            <h1 className="hero-title">
              Equipamentos inteligentes para quem{" "}
              <span className="hero-accent">estuda, desenvolve e cria</span>.
            </h1>

            <p className="hero-sub">
              Produtos selecionados para estudantes, desenvolvedores e
              pesquisadores que transformam ideias em sistemas.
            </p>

            <p className="hero-apoio">
              Tecnologia, ciência e inovação em um só núcleo.
            </p>

            <ul className="hero-chips">
              <li className="hero-chip">React + Vite</li>
              <li className="hero-chip">Componentes reutilizáveis</li>
              <li className="hero-chip">Clean Tech</li>
            </ul>
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
                <div className="mock-line w-60" />
                <div className="mock-line w-40" />
                <div className="mock-line w-80" />
                <div className="mock-block" />
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
