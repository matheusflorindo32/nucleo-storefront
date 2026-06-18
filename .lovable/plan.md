## Plano — Fortalecer a Núcleo TADS Store sem sair do escopo da atividade

Objetivo: deixar o projeto visivelmente superior ao do colega — densidade de vitrine, navegação, identidade — **sem** romper nenhuma das regras da Semana 12 (componentes React + props + `.map()` em lista, sem `useState`, sem Router, sem backend, sem libs externas, sem TypeScript/Tailwind). Tudo continua em JSX puro + CSS já existente no `App.css`, com componentização limpa.

Inspirações de linguagem visual (referência, **não** cópia de código): padrões de product card, glow hero e bento de e-commerce do 21st.dev (autores como beratberkay, dhiluxui, dhileepkumargm, thanh).

---

### 1. Barra de navegação no cabeçalho (componente novo `MenuTopo`)

Componente puro de apresentação, recebe links por **prop** (array) e renderiza com `.map()` — reforça os conceitos da atividade.

- `src/components/MenuTopo.jsx` — recebe `props.itens = [{ label, href, ativo }]`
- Renderiza ao lado da logo no `Cabecalho.jsx`
- Itens: Início · Vitrine · Categorias · Sobre · Contato
- Estilo: hairline inferior, item ativo com sublinhado dourado, hover suave (CSS)

### 2. Vitrine mais densa e crível (continua dentro de `Vitrine.jsx`)

- Dobrar o catálogo: de 6 para **10–12 produtos reais** (notebooks, periféricos, áudio, imagem, acessórios dev, livros técnicos), preços variados e coerentes, descrições curtas autorais.
- Adicionar 2 props novas opcionais ao `ProdutoCard`: `parcelas` (ex.: "10x R$ 89,90") e `avaliacao` (ex.: 4.8 ⭐) — exibidas só quando vierem na prop, mostrando uso condicional de props.
- Manter `Selo` e `Botao` como já estão (não quebrar nada).

### 3. Filtro visual de categorias (sem `useState`, 100% apresentação)

Componente `FiltroCategorias.jsx` que recebe `props.categorias = []` e renderiza chips com `.map()`. Decorativo (não filtra de fato, pois `useState` está fora do escopo da semana) — funciona como "tabs" visuais acima da vitrine, igual aos sites de referência. Marca uma como ativa via prop `ativa`.

### 4. Seção "Por que comprar no Núcleo TADS" (novo componente `Diferenciais`)

3–4 cards horizontais com ícone + título + descrição, renderizados com `.map()` sobre uma lista de objetos passada por prop. Reforça autoridade ("Curadoria técnica", "Frete grátis acima de X", "Garantia estendida", "Suporte por devs").

### 5. Rodapé profissional (refatorar `Rodape.jsx`)

Atualmente é uma linha só. Vira um rodapé em 3 colunas (puro CSS grid):
- Coluna 1: marca + tagline + selo "Tecnologia, ciência e inovação"
- Coluna 2: links institucionais (Sobre, Contato, FAQ, Políticas) — array + `.map()`
- Coluna 3: redes (Instagram, LinkedIn, GitHub) — ícones SVG inline
- Barra inferior: copyright + curso/instituição

### 6. Polimento do hero existente

- Manter mockup 3D animado (já é nosso diferencial).
- Adicionar 3 "chips de confiança" abaixo do subtítulo (`✓ Curadoria técnica` · `✓ Frete grátis` · `✓ Suporte dev`) — array + `.map()`.
- Ajustar contraste do título em telas claras.

### 7. SEO e meta básicos (no `index.html`)

- `<title>` descritivo (<60 chars), `<meta description>` (<160), Open Graph com a logo, favicon. Tudo estático, sem libs.

---

### Arquivos afetados

**Novos:**
- `src/components/MenuTopo.jsx`
- `src/components/FiltroCategorias.jsx`
- `src/components/Diferenciais.jsx`

**Editados:**
- `src/components/Cabecalho.jsx` — inclui `<MenuTopo itens={...} />`
- `src/components/Vitrine.jsx` — mais produtos + render do filtro
- `src/components/ProdutoCard.jsx` — props opcionais `parcelas` e `avaliacao`
- `src/components/Rodape.jsx` — rodapé em 3 colunas
- `src/App.jsx` — inclui `<Diferenciais />` entre hero e vitrine
- `src/App.css` — estilos novos (menu, chips, filtro, diferenciais, rodapé)
- `index.html` — título, meta description, OG

### Regras da atividade — checklist

- [x] Componentes React funcionais com **props**
- [x] Renderização de listas com `.map()` e `key`
- [x] Composição/`children` (Layout, Cabecalho, Rodape continuam)
- [x] CSS próprio em `App.css` (sem Tailwind)
- [x] **Sem** `useState`, `useEffect`, Router, fetch, backend
- [x] **Sem** libs externas novas (sem Motion, sem Three, sem shadcn)
- [x] JSX puro (sem TypeScript)

### Ordem de execução sugerida

1. MenuTopo + chips do hero (impacto visual imediato no topo)
2. Vitrine expandida + props novas no ProdutoCard
3. FiltroCategorias acima da grid
4. Diferenciais entre hero e vitrine
5. Rodapé profissional
6. SEO no index.html
7. Tirar 3 prints finais para entrega

Posso seguir com tudo? Se preferir, executo por etapas e mostro print após cada uma.
