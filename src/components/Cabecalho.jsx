import logoNts from "../assets/logo-nts-clean.png.asset.json";
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

function Cabecalho() {
  return (
    <header className="cabecalho" id="inicio">
      <div className="cabecalho-top">
        <img
          src={logoNts.url}
          alt="Núcleo TADS Store — Tecnologia, ciência e inovação em um só núcleo"
          className="logo-img"
        />
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
                  <img src={logoNts.url} alt="" />
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
