# Plano — Upgrade visual Semana 12

Apenas CSS e JSX de apresentação. Sem mexer em lógica, sem novas libs, sem useState/useEffect/router/API. Estrutura de componentes mantida (Layout, Cabecalho, Vitrine, ProdutoCard, Selo, Botao, Rodape).

## 1. `src/components/Cabecalho.jsx`
- Manter `<header className="cabecalho">` com a logo no topo (já está como `<img>`).
- Refazer a seção `.hero` em duas colunas:
  - **Esquerda (`.hero-left`)**:
    - Badge pequena: "Clean Tech · Vitrine acadêmica"
    - H1: "Equipamentos inteligentes para quem estuda, desenvolve e cria."
    - Subtítulo: "Produtos selecionados para estudantes, desenvolvedores e pesquisadores que transformam ideias em sistemas."
    - Frase de apoio com destaque dourado discreto: "Tecnologia, ciência e inovação em um só núcleo."
    - Lista de indicadores (`.hero-chips`): "React + Vite", "Componentes reutilizáveis", "Clean Tech".
  - **Direita (`.hero-visual`)**: composição 100% CSS simulando produto 3D:
    - Anéis concêntricos (`.ring`, `.ring-2`)
    - Halo radial azul/verde (`.halo`)
    - Pontos de circuito (`.dot` x4)
    - Hexágono decorativo (`.hex`)
    - 2 mini-cards flutuantes (`.float-card`) com ícone unicode + texto curto (ex: "⚡ Performance", "🧠 Foco em devs")
    - Card central (`.product-mock`) simulando notebook/tela com gradiente
- Sem useState, sem libs — apenas JSX + classes.

## 2. `src/App.css`
- Manter tokens da paleta já definidos (já batem com o pedido).
- Reescrever bloco `.hero` para layout grid 2 colunas (`grid-template-columns: 1.1fr 1fr`), gap generoso, padding maior.
- Adicionar estilos:
  - `.hero-left`, `.hero-chips`, `.hero-chip`
  - `.hero-apoio` (frase com borda lateral dourada)
  - `.hero-visual`, `.ring`, `.ring-2`, `.halo`, `.dot`, `.hex`, `.float-card`, `.product-mock`
  - Pequenas animações CSS puras (`@keyframes float`, `pulse`) — animação CSS é permitida (não é Framer Motion).
- Refinar `.card`:
  - Maior border-radius, sombra em camadas, hover com leve tilt via `transform`.
  - `.card-image-wrap` com moldura interna (`inset` border + halo glow azul/verde mais visível).
  - `.card-image` com leve perspectiva (`transform: rotateX(2deg)`).
- Refinar `.selo`: gradientes sutis, sombra interna, tipografia mais firme.
- Refinar `.botao-primario`: gradiente azul→verde-água, ícone "→" via `::after`, hover com elevação.
- Melhorar responsividade:
  - `@media (max-width: 900px)`: hero vira 1 coluna, `.hero-visual` reduzido.
  - `@media (max-width: 540px)`: ajustes já existentes + chips em wrap.

## 3. Arquivos NÃO tocados
- `App.jsx`, `Layout.jsx`, `Vitrine.jsx`, `ProdutoCard.jsx`, `Selo.jsx`, `Botao.jsx`, `Rodape.jsx`, `main.jsx`, `index.html`, `package.json`, `vite.config.js`.
- Array de produtos, `.map()`, `key={produto.id}`, uso de Selo/Botao dentro do ProdutoCard — tudo preservado.

## Regras respeitadas
Sem API · sem useState · sem useEffect · sem Router · sem login · sem Tailwind · sem TS · sem Framer Motion · sem Spline · sem fundo escuro. Apenas HTML + CSS puro melhorando o visual.
