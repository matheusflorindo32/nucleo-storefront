# Plano — Vitrine premium (apenas visual dos cards)

Sem mexer em estrutura, lógica ou regras da Semana 12. Apenas CSS + pequenos ajustes JSX de apresentação no `ProdutoCard`.

## 1. `src/components/Vitrine.jsx`
- Trocar as URLs do Unsplash por imagens estáticas mais limpas e consistentes (fundo claro/produto isolado) usando a CDN do Unsplash com `?auto=format&fit=crop&w=800&q=80`:
  - Notebook, mouse, teclado, monitor, headset e webcam — manter mesmos IDs e categorias, só substituir as URLs que não destacam bem o produto.
- Manter array fixo, `.map()`, `key={produto.id}`, sem API.

## 2. `src/components/ProdutoCard.jsx`
- Garantir `<img src={produto.imagem} alt={produto.nome} />` com `loading="lazy"`.
- Reorganizar a ordem do conteúdo (já está correta — só revisar nomes de classe):
  1. `.card-image-wrap` com selo de destaque sobreposto e a imagem com halo CSS atrás.
  2. `.card-body`: categoria → nome → descrição → selos (frete grátis condicional + categoria) → footer com preço + botão "Ver produto".
- Sem novos hooks, sem props extras. Continua recebendo `produto` e usando `Selo` + `Botao`.

## 3. `src/App.css`
- **Grid responsivo**:
  - `.vitrine-grid` → `grid-template-columns: repeat(3, 1fr)` no desktop.
  - `@media (max-width: 960px)` → 2 colunas.
  - `@media (max-width: 600px)` → 1 coluna.
  - `gap: 28px`.
- **Card premium**:
  - `border-radius: 22px`, fundo branco, borda `1px solid var(--borda)`.
  - Sombra suave em duas camadas + linha interior branca (`inset`).
  - Hover: `translateY(-6px)` + sombra mais forte com glow azul/verde-água sutil.
- **Área da imagem (`.card-image-wrap`)**:
  - Altura 240px, fundo `radial-gradient` claro (#ffffff → #eaf4f7).
  - Moldura interna arredondada (`border-radius: 16px` num wrapper interno), borda 1px clara.
  - Halo radial atrás da imagem (azul-tech + verde-água, blur).
  - Anel decorativo discreto (círculo `::after` com `border: 1px dashed`).
  - `.card-image` com `object-fit: contain`, `max-width: 78%`, `max-height: 88%`, leve `perspective` para efeito 3D, sombra própria.
  - Selo de destaque posicionado top-left com `z-index: 2`.
- **Tipografia e espaçamento**:
  - Categoria: 0.7rem, uppercase, letter-spacing, azul-tech.
  - Nome: 1.1rem, peso 700, marinho.
  - Descrição: 0.9rem, texto-2, line-height 1.55, `min-height` para alinhar cards de tamanhos diferentes.
  - Selos: linha própria com gap.
  - Footer: borda tracejada superior, preço grande à esquerda, botão à direita.
- **Selo**: refinar com gradiente sutil por cor, sombra interna `inset` e uppercase.
- **Botão "Ver produto"**: já tem gradiente azul→verde-água + seta; manter, só garantir consistência.

## 4. Não muda
`Layout.jsx`, `Cabecalho.jsx`, `Rodape.jsx`, `Botao.jsx`, `Selo.jsx`, `App.jsx`, `main.jsx`, `package.json`, `vite.config.js`. Sem novas dependências. Sem useState/useEffect/Router/API/Tailwind/TS.
