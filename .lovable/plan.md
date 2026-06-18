
## Diagnóstico: a Etapa 3 já está cumprida ✅

Confrontando o PDF com o projeto atual, **todos os requisitos obrigatórios já estão atendidos**:

| Requisito do PDF | Status no projeto |
|---|---|
| `react-router-dom` instalado | ✅ `package.json` |
| `BrowserRouter` envolvendo `<App />` em `main.jsx` | ✅ |
| `Routes` / `Route` no `App.jsx` com `/`, `/produto/:id`, `*` | ✅ |
| Home com vitrine (busca + filtro da Etapa 2) | ✅ `pages/Home.jsx` |
| Detalhe lê `id` com `useParams` e busca `/products/:id` | ✅ `pages/Detalhe.jsx` |
| `useEffect` com `[id]` nas dependências | ✅ |
| `<Link>` no card (sem `<a href>`) | ✅ `ProdutoCard.jsx` |
| Link "Voltar para a loja" no detalhe | ✅ |
| 404 com `path="*"` como última rota | ✅ `NaoEncontrado.jsx` |
| Cabeçalho/Rodapé em todas as telas | ✅ `Layout.jsx` |
| Sem login / sem rota protegida | ✅ (fica para Etapa 4) |

Ou seja: **clicar no card abre o detalhe, voltar funciona, URL inválida mostra 404, header/footer persistem**. Nada precisa ser refeito.

---

## Plano avançado — apenas POLIR o que já existe

O PDF lista 3 itens **recomendados (não obrigatórios)**. Vou implementar exatamente esses + refinamentos visuais inspirados em PDPs do 21st.dev, **sem expandir o escopo da etapa** (sem login, sem carrinho, sem checkout, sem libs novas, mesma paleta Clean Tech Premium).

### 1. `NavLink` no menu (recomendado pelo PDF)

- Em `src/components/MenuTopo.jsx`, trocar os `<a href="#...">` da Home por `<NavLink to="/">` + âncoras, e garantir que o item ativo recebe a classe `menu-link--ativo` (já existe estilo, só vou padronizar via `className` função do `NavLink`).
- Em telas de Detalhe/404, o menu mostra "Loja" como link normal de volta para `/`.

### 2. Estado de carregando reforçado no Detalhe (recomendado pelo PDF)

- Já existe `"Carregando produto..."`. Vou adicionar um **skeleton** simples (blocos cinza com pulse via CSS keyframes — sem libs) no lugar do texto puro: skeleton da imagem principal + linhas de título/preço.
- Mensagem de erro ganha botão "Tentar novamente" que re-dispara o fetch (reusando o `useEffect` via state `tentativa` adicionado em `[id, tentativa]`).

### 3. Mais campos do produto (recomendado pelo PDF)

Hoje o Detalhe já mostra título, marca, categoria, rating, stock, preço, desconto, descrição. Vou adicionar de forma discreta os campos que a DummyJSON entrega e ainda não usamos:
- `sku`, `weight`, `dimensions` (W×H×D em cm) → bloco "Especificações".
- `warrantyInformation`, `shippingInformation`, `returnPolicy` → bloco "Garantia, envio e trocas" com 3 mini-cards.
- `reviews[]` (até 3) → bloco "Avaliações" com nome, nota em estrelas e comentário.
- `tags[]` → chips pequenos abaixo do título.

Tudo opcional via verificação `produto.x && ...` para não quebrar se a API mudar.

### 4. Refinamentos visuais (inspiração 21st.dev — PDPs modernas)

Sem mudar paleta nem adicionar bibliotecas:
- **Galeria**: thumbs com borda ativa em verde `#16A34A`, hover com leve `translateY(-2px)`, transição de opacidade ao trocar a imagem principal (CSS `@keyframes fadeIn`).
- **Preço**: hierarquia tipográfica mais forte — preço grande em navy, "à vista" como eyebrow pequeno acima, badge de desconto verde arredondado ao lado.
- **Layout split**: galeria sticky no desktop (`position: sticky; top: 24px`) enquanto as infos rolam — padrão comum em PDPs premium.
- **Breadcrumb** no topo do Detalhe: `Loja › {Categoria} › {Produto}` usando `<Link>` (o "Loja" e a categoria viram links para `/` com filtro pré-aplicado via query string — ver item 5).
- **Botão "Voltar"** com ícone seta em SVG inline e hover de underline animado.

### 5. Filtro/busca persistidos na URL (bônus de SPA, dentro do escopo)

Pequena melhoria que demonstra domínio de rotas sem adicionar funcionalidade nova:
- `Vitrine.jsx` lê e escreve `?busca=...&categoria=...` via `useSearchParams` do React Router.
- Permite compartilhar/voltar para o mesmo estado de filtro (e o breadcrumb do Detalhe pode linkar "Loja › Smartphones" voltando filtrado).
- Continua sendo a **mesma busca/filtro da Etapa 2** — só ganhou URL.

### 6. Página 404 mais polida

- Mantém estrutura atual.
- Adiciona ilustração tipográfica grande "404" com gradiente sutil navy→verde, lista de 3 sugestões clicáveis (Smartphones / Notebooks / Tablets) usando `<Link>` com `?categoria=...`, e CTA principal "Voltar para a loja".

### 7. Acessibilidade e SEO leve

- `<title>` dinâmico por rota via `useEffect` em cada página (`document.title = "Núcleo TADS Store — {produto.title}"`, idem para Home e 404).
- `aria-current="page"` automático do `NavLink`.
- `alt` descritivo nas imagens da galeria (já existe, vou padronizar).

---

## Arquivos afetados

**Editados** (sem reescrever, só polir):
- `src/components/MenuTopo.jsx` — usar `NavLink`.
- `src/components/Vitrine.jsx` — `useSearchParams` para busca/categoria.
- `src/pages/Detalhe.jsx` — skeleton, breadcrumb, novos campos, retry, `document.title`.
- `src/pages/Home.jsx` — `document.title`.
- `src/pages/NaoEncontrado.jsx` — visual + sugestões + `document.title`.
- `src/App.css` — `.skeleton`, `.detalhe-breadcrumb`, `.detalhe-specs`, `.detalhe-reviews`, `.detalhe-policies`, ajustes sticky, animações.

**Não criados / não removidos**: nenhum arquivo novo, nenhum apagado. Mesma estrutura de pastas (`pages/`, `components/`).

---

## Fora do escopo (continua fora — Etapa 4)

Login, autenticação, rota protegida, carrinho, checkout, "Minha Conta", deploy, Next.js, TypeScript, Tailwind, libs de UI, backend.

---

## Checklist de validação final

- Todos os itens obrigatórios do PDF continuam ✅.
- Menu destaca página atual com `NavLink`.
- Detalhe mostra skeleton durante o fetch e botão "Tentar novamente" no erro.
- Detalhe exibe specs, garantia/envio/trocas, reviews e tags quando a API entrega.
- Galeria com sticky no desktop e fade ao trocar imagem.
- Breadcrumb no Detalhe leva de volta à vitrine filtrada pela categoria.
- URL da Home reflete busca/categoria (`?busca=...&categoria=...`) e vice-versa.
- 404 mais bonita, com sugestões clicáveis.
- `document.title` muda por rota.
- Sem libs novas, mesma paleta, código continua fácil de explicar ao professor.

Inspiração: padrões de PDP do 21st.dev (split sticky, breadcrumb sutil, hierarquia forte no preço, skeleton minimalista) — sem copiar código, traduzido para os tokens já existentes.
