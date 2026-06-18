## Plano — Preencher o card do hero (mockup de janela)

Hoje o card à direita do hero (`.product-mock`) tem só barrinhas cinzas genéricas. Vou transformá-lo em uma mini "vitrine" visual coerente com a marca, sem mexer em lógica nem violar nenhuma regra da Semana 12.

### O que vai aparecer dentro do card

Topo (barra da "janela") — mantém os 3 pontinhos (vermelho/amarelo/verde) já existentes.

Conteúdo do card (puro HTML + CSS, estático):
1. **Selo NTS** no topo — o emblema hexagonal da logo (mesmo PNG `logo-nts-clean`) em tamanho pequeno + texto curto "Núcleo TADS Store" ao lado. Reforça a marca dentro do mock.
2. **Mini "produto em destaque"** — um bloco com:
   - Ícone (emoji `💻` ou `⚙️`) num quadrado com gradiente azul→teal
   - Nome fake: "Kit Dev Starter"
   - Linha de "preço" estilizada: `R$ 0,00` (apenas visual, sem lógica)
   - Uma tag verde "Em destaque" (puro CSS, não é o componente `Selo` — é decorativo do hero)
3. **3 mini-thumbs** embaixo (quadradinhos com gradientes diferentes: azul-marinho, teal, dourado) simulando outros produtos da vitrine.

Tudo isso é **decorativo, estático, dentro do `Cabecalho.jsx`** — não é uma vitrine funcional, não usa `.map`, não duplica a Vitrine real abaixo.

### Arquivos alterados

**`src/components/Cabecalho.jsx`**
- Dentro de `.product-mock-screen`, substituir as 3 `.mock-line` + 1 `.mock-block` por:
  - `<div class="mock-brand">` com `<img>` da logo (mesmo asset) + texto
  - `<div class="mock-featured">` com ícone, título, preço, tag
  - `<div class="mock-thumbs">` com 3 `<span>` coloridos

**`src/App.css`**
- Remover/aposentar regras `.mock-line` e `.mock-block` (ou manter sem uso).
- Adicionar regras novas: `.mock-brand`, `.mock-brand img`, `.mock-featured`, `.mock-featured-icon`, `.mock-featured-info`, `.mock-price`, `.mock-tag`, `.mock-thumbs`, `.mock-thumb` (com 3 variações de gradiente usando a paleta já definida: azul-marinho `#0A2342`, teal `#14B8A6`, dourado `#C8A24A`).
- Ajustar `.product-mock-screen` para `display: flex; flex-direction: column; gap` adequado.

### O que NÃO muda

- Logo no cabeçalho **continua** onde está (usuário disse "ou até a logo se achar que fica melhor" — vou **manter** no header e **também** colocar uma versão pequena dentro do card como selo de marca; assim não tira nada do que já está aprovado).
- Nada de `useState`, `useEffect`, API, Router, login, Spline, Framer Motion, Tailwind, TypeScript.
- Vitrine real, ProdutoCard, Selo, Botao, Layout, children, `.map()` — **intactos**.
- Sem componente novo: tudo dentro do `Cabecalho.jsx` existente, só HTML + CSS.

Quer que eu siga com esse plano?
