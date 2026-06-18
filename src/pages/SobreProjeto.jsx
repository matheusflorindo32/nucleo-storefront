import { useEffect } from "react";
import { Link } from "react-router-dom";

function SobreProjeto() {
  useEffect(() => {
    document.title = "Sobre o projeto — Núcleo TADS Store";
  }, []);

  return (
    <section className="sobre-projeto">
      <Link to="/" className="detalhe-voltar">← Voltar para a loja</Link>

      <header className="sobre-projeto-header">
        <span className="sobre-projeto-eyebrow">Projeto Integrador TADS</span>
        <h1 className="sobre-projeto-titulo">
          Núcleo TADS Store — uma vitrine de tecnologia construída como SPA.
        </h1>
        <p className="sobre-projeto-sub">
          Projeto acadêmico do curso de Análise e Desenvolvimento de Sistemas
          (IFES), evoluído semana a semana. Esta página documenta a arquitetura
          de rotas implementada na Etapa 3.
        </p>
      </header>

      <div className="sobre-projeto-grid">
        <article className="sobre-card">
          <span className="sobre-card-num">01</span>
          <h2>Rota inicial · /</h2>
          <p>
            Renderiza a Home com hero, vitrine, newsletter e seções
            institucionais. A vitrine consome a API DummyJSON com
            <code>useState</code> e <code>useEffect</code>, e permite busca por
            nome e filtro por categoria.
          </p>
        </article>

        <article className="sobre-card">
          <span className="sobre-card-num">02</span>
          <h2>Rota dinâmica · /produto/:id</h2>
          <p>
            A página de detalhe lê o parâmetro <code>id</code> da URL com{" "}
            <code>useParams</code> e dispara um novo fetch sempre que ele muda,
            graças ao <code>useEffect</code> dependente de <code>[id]</code>.
            Inclui galeria, breadcrumb, especificações e avaliações reais.
          </p>
        </article>

        <article className="sobre-card">
          <span className="sobre-card-num">03</span>
          <h2>Rota curinga · *</h2>
          <p>
            Qualquer URL desconhecida cai na página 404, que sugere produtos
            reais consultados na API e oferece atalhos para as categorias mais
            populares — preservando o usuário dentro da loja.
          </p>
        </article>

        <article className="sobre-card">
          <span className="sobre-card-num">04</span>
          <h2>Rota institucional · /sobre-o-projeto</h2>
          <p>
            Esta página. Documenta a arquitetura SPA e reforça o tema da Semana
            14 — múltiplas rotas, navegação fluida sem reload e cabeçalho
            persistente entre telas.
          </p>
        </article>
      </div>

      <section className="sobre-projeto-bloco">
        <h2 className="sobre-projeto-bloco-titulo">Recursos da Etapa 3</h2>
        <ul className="sobre-projeto-lista">
          <li>BrowserRouter + Routes / Route declarativas em <code>App.jsx</code>.</li>
          <li><code>NavLink</code> destacando o item ativo do menu.</li>
          <li>URL persistindo busca e categoria com <code>useSearchParams</code>.</li>
          <li>Scroll automático para o topo ao trocar de rota.</li>
          <li>Loading com skeleton + botão "Tentar novamente" no erro.</li>
          <li><code>document.title</code> dinâmico por rota.</li>
        </ul>
      </section>

      <p className="sobre-projeto-credito">
        Desenvolvido por <strong>Matheus Florindo de Deus</strong> · IFES —
        Análise e Desenvolvimento de Sistemas.
      </p>
    </section>
  );
}

export default SobreProjeto;
