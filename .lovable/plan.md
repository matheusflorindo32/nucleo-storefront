## Etapa 3 — Semana 14: SPA com React Router

Evolução do projeto atual da Núcleo TADS Store para uma SPA com navegação entre vitrine, detalhe de produto e página 404. Tudo da Etapa 2 (fetch DummyJSON, useState, useEffect, loading, erro, busca, filtro) é preservado.

### Escopo (somente isto)

1. Instalar `react-router-dom` e envolver `<App />` com `<BrowserRouter>` em `main.jsx`.
2. Criar `src/pages/` com `Home.jsx`, `Detalhe.jsx`, `NaoEncontrado.jsx`.
3. Definir rotas em `App.jsx`, com `Layout` envolvendo todas as páginas.
4. Adaptar `ProdutoCard.jsx` para navegar via `<Link to="/produto/:id">`.
5. Atualizar CSS (`App.css`) só para acomodar página de detalhe e 404 — mantendo Clean Tech Premium.
6. Atualizar `README.md` com a seção da Etapa 3.

### Fora do escopo (não será feito)

Login, auth, rota protegida, Minha Conta, carrinho, checkout, deploy, Next.js, TypeScript, Tailwind, backend.

---

### Mudanças por arquivo

**`package.json`** — adicionar `react-router-dom`.

**`src/main.jsx`**
```jsx
import { BrowserRouter } from "react-router-dom";
// ...
<BrowserRouter><App /></BrowserRouter>
```

**`src/App.jsx`** — substituir composição atual por rotas. O `Layout` continua envolvendo tudo para preservar `Cabecalho` e `Rodape` em todas as telas.
```jsx
<Layout>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/produto/:id" element={<Detalhe />} />
    <Route path="*" element={<NaoEncontrado />} />
  </Routes>
</Layout>
```
A Home preserva a ordem visual atual: `Diferenciais`, `Vitrine`, `Newsletter`, `Leads`, `SobreContato`, `FAQ`, `Politicas`. Nas páginas Detalhe e 404, só aparece o conteúdo da página + header/footer (sem newsletter/FAQ/etc).

**`src/pages/Home.jsx`** — renderiza a composição atual da página inicial (mesmas seções de hoje). Mantém âncoras `#vitrine`, `#sobre`, etc.

**`src/pages/Detalhe.jsx`** — nova página:
- `useParams()` para ler `id`.
- `useState` para `produto`, `carregando`, `erro`.
- `useEffect(() => { ... }, [id])` chamando `https://dummyjson.com/products/${id}`.
- Estados: "Carregando produto..." / "Não foi possível carregar os detalhes do produto." / conteúdo.
- Renderiza: imagem principal + galeria simples (thumbnails clicáveis que trocam a imagem principal via state local), `title`, `brand`, `category` (em pt), `rating`, `stock`, `price` em BRL, `discountPercentage`, `description`.
- `<Link to="/">← Voltar para a loja</Link>`.
- Mantém a mesma lógica de tradução de categoria já usada nos componentes (`smartphones → Smartphones`, etc.).

**`src/pages/NaoEncontrado.jsx`** — página 404 amigável:
- Título: "Página não encontrada"
- Texto: "O endereço acessado não existe ou foi movido."
- `<Link to="/">Voltar para a loja</Link>`

**`src/components/ProdutoCard.jsx`** — remover o modal (`ModalProduto`) e substituir o clique por `<Link to={\`/produto/${produto.id}\`}>`. O card inteiro (ou ao menos imagem + botão "Ver produto") vira link. Sem `<a href>`, sem `onClick` de modal. O badge de "📷 N" pode ficar (informa quantas imagens há no detalhe). Arquivos `ModalProduto.jsx` permanecem no projeto mas deixam de ser importados — ou podem ser removidos para manter limpo (decisão: **remover** `ModalProduto.jsx` para o código ficar fácil de explicar ao professor).

**`src/App.css`** — adicionar estilos novos, sem alterar a paleta:
- `.detalhe-page` (layout 2 colunas: galeria + infos)
- `.detalhe-imagem-principal`, `.detalhe-galeria`, `.detalhe-thumb`, `.detalhe-thumb--ativa`
- `.detalhe-infos`, `.detalhe-titulo`, `.detalhe-preco`, `.detalhe-desconto`, `.detalhe-meta`
- `.detalhe-voltar` (link estilo "← Voltar para a loja")
- `.nao-encontrado` (centralizado, com CTA de voltar)
- Responsivo: galeria empilha em mobile.

Remover do CSS apenas o que era exclusivo do modal (`.modal-*`) já que o componente sai.

**`README.md`** — adicionar a seção **Etapa 3 — SPA com React Router (Semana 14)** com:
- O que foi entregue (router instalado, `BrowserRouter`, rotas `/`, `/produto/:id`, `*`, navegação por `<Link>`, `useParams`, fetch por id, layout preservado).
- Atualizar a árvore de pastas para incluir `src/pages/`.
- Checklist final da Etapa 3 espelhando o do enunciado.
- Atualizar o Roadmap marcando Fase 3 ✅ e mantendo a lista "Fora do escopo" (login, carrinho, checkout etc. continuam fora).

---

### Inspiração de design (referência, não cópia)

Para a página de **Detalhe**, a direção visual segue padrões de PDPs (product detail pages) modernas vistas em componentes do 21st.dev: layout split (galeria à esquerda, infos à direita), thumbnails verticais/horizontais com borda ativa, badge de desconto discreto, hierarquia tipográfica forte no preço, botão de "Voltar" como link sutil com seta. Tudo traduzido para a paleta Clean Tech Premium já existente (azul-marinho `#0A2342`, verde `#16A34A`, dourado discreto, fundo claro, cards brancos). Sem tema escuro, sem libs de UI.

---

### Checklist de validação ao final

- `npm install` e `npm run dev` sem erros.
- `/` mostra vitrine completa com busca, filtro e API funcionando.
- Clicar em um card vai para `/produto/:id` sem reload.
- `/produto/1`, `/produto/2`, etc. carregam o produto correto via `useParams` + `useEffect([id])`.
- Estados de carregando e erro aparecem na página de detalhe.
- URL inválida (ex.: `/qualquercoisa`) mostra a página 404 com link de volta.
- `Cabecalho` e `Rodape` aparecem em Home, Detalhe e 404.
- Sem login, sem auth, sem rota protegida, sem carrinho, sem checkout.
