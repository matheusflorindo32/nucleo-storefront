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
          <span className="hero-badge">Vitrine acadêmica · Clean Tech</span>
          <h2 className="hero-title">
            Equipamentos para quem{" "}
            <span className="hero-accent">estuda, desenvolve e cria</span>.
          </h2>
          <p className="hero-sub">
            Produtos inteligentes para quem estuda, desenvolve e transforma
            ideias em sistemas.
          </p>
        </div>
      </section>
    </header>
  );
}

export default Cabecalho;
