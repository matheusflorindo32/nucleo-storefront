# Núcleo TADS Store — Projeto Integrador IFES/TADS

<div align="center">
  <strong>Núcleo TADS Store</strong>
  <br />
  <em>Tecnologia, ciência e inovação em um só núcleo.</em>
  <br />
  <br />

  [![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)](https://react.dev)
  [![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
  [![License](https://img.shields.io/badge/License-MIT-0A2342)](LICENSE)
  <br />
  <strong>Atividade Acadêmica — IFES · Tecnologia em Análise e Desenvolvimento de Sistemas (TADS)</strong>
  <br />
  <em>Projeto integrador de componentização e consumo de API em React</em>
</div>

---

## Índice

- [Contexto acadêmico](#contexto-academico)
- [Visão geral](#visao-geral)
- [Stack tecnológico](#stack-tecnologico)
- [Arquitetura](#arquitetura)
- [Como rodar](#como-rodar)
- [Etapa 1 — Componentização](#etapa-1--componentizacao)
- [Etapa 2 — Integração com API](#etapa-2--integracao-com-api)
- [Estrutura de componentes](#estrutura-de-componentes)
- [Roadmap](#roadmap)
- [Licença](#licenca)
- [Autor](#autor)

---

## Contexto acadêmico

| Campo | Informação |
|-------|------------|
| **Instituição** | Instituto Federal do Espírito Santo (IFES) |
| **Curso** | Tecnologia em Análise e Desenvolvimento de Sistemas (TADS) |
| **Disciplina** | Desenvolvimento Web Front-end |
| **Etapas entregues** | Semana 12 (Etapa 1) e Semana 13 (Etapa 2) |
| **Tema** | Componentização e consumo de API em React |

---

## Visão geral

A **Núcleo TADS Store** é uma vitrine digital de tecnologia desenvolvida como projeto integrador. O catálogo é composto por produtos reais consumidos da API pública **DummyJSON**, com foco em smartphones, notebooks, tablets e acessórios de áudio.

O projeto demonstra, na prática, conceitos fundamentais de React:

- Componentização e composição
- Props e `props.children`
- Renderização de listas com `.map()` e `key`
- Renderização condicional
- Estado local com `useState`
- Efeitos colaterais com `useEffect`
- Requisições HTTP com `fetch`
- Tratamento de carregamento e erro
- Busca em tempo real e filtro por categoria

---

## Stack tecnológico

| Camada | Tecnologia | Propósito |
|--------|------------|-----------|
| **Framework UI** | React 18 | Biblioteca declarativa para interfaces |
| **Bundler** | Vite 5 | Build rápido e HMR |
| **Linguagem** | JavaScript (JSX) | Conforme exigência da disciplina |
| **Styling** | CSS3 próprio | Sem frameworks, identidade visual customizada |
| **API de dados** | [DummyJSON](https://dummyjson.com) | Catálogo de produtos de demonstração |
| **Ícones / Logo** | SVG inline | Logo `LogoNTS` vetorial, sem dependências |

**Sem TypeScript, sem Tailwind, sem React Router, sem libs de animação 3D** — em conformidade com o escopo da atividade.

---

## Arquitetura

```
nucleo-storefront/
├── src/
│   ├── components/
│   │   ├── Layout.jsx           # Wrapper composicional (children)
│   │   ├── Cabecalho.jsx        # Header + Hero + orbe SVG animado
│   │   ├── LogoNTS.jsx          # Logo SVG inline (hexágono + wordmark)
│   │   ├── MenuTopo.jsx         # Navegação superior
│   │   ├── Diferenciais.jsx     # Bloco "por que comprar aqui"
│   │   ├── Vitrine.jsx          # Catálogo: fetch + estados + filtros
│   │   ├── FiltroCategorias.jsx # Chips de categoria (legado Etapa 1)
│   │   ├── ProdutoCard.jsx      # Card individual de produto
│   │   ├── Botao.jsx            # CTA reutilizável
│   │   ├── Selo.jsx             # Badge / tag
│   │   ├── SobreContato.jsx     # Seção Sobre + Contato (#sobre, #contato)
│   │   ├── FAQ.jsx              # Perguntas frequentes (#faq)
│   │   ├── Politicas.jsx        # Privacidade, trocas, termos (#politicas)
│   │   ├── Newsletter.jsx       # Seção visual de newsletter (acadêmico)
│   │   ├── Leads.jsx            # Captura de leads visual (acadêmico)
│   │   └── Rodape.jsx           # Footer com GitHub, LinkedIn, e-mail
│   ├── pages/                   # Páginas da SPA (Etapa 3)
│   │   ├── Home.jsx             # Rota /  — vitrine + seções institucionais
│   │   ├── Detalhe.jsx          # Rota /produto/:id — fetch por id + galeria
│   │   └── NaoEncontrado.jsx    # Rota * — página 404
│   ├── App.jsx                  # Configuração de rotas (React Router)
│   ├── main.jsx                 # Entry React 18 + BrowserRouter
│   └── App.css                  # Design system + animações
├── index.html
├── package.json
└── vite.config.js
```

### Composição

```
App
└── Layout (children)
    ├── Cabecalho (LogoNTS + MenuTopo + Hero com orbe)
    ├── Diferenciais
    ├── Vitrine
    │   └── ProdutoCard × N
    │       ├── Selo (categoria, destaque, disponível)
    │       └── Botao
    ├── SobreContato
    ├── FAQ
    ├── Politicas
    └── Rodape
```

---

## Como rodar

### Pré-requisitos

- Node.js 18+
- npm 9+

### Passo a passo

```bash
# 1. Instale as dependências
npm install

# 2. Inicie o servidor de desenvolvimento
npm run dev

# 3. Acesse no navegador
# http://localhost:5173
```

### Scripts

| Script | Comando | Descrição |
|--------|---------|-----------|
| **Dev** | `npm run dev` | Servidor de desenvolvimento com HMR |
| **Build** | `npm run build` | Build de produção em `dist/` |
| **Preview** | `npm run preview` | Preview da build de produção |

---

## Etapa 1 — Componentização

**Semana 12.** Fundação da loja com componentes reutilizáveis e dados estáticos.

### Conceitos demonstrados

| Conceito | Onde foi aplicado |
|----------|-------------------|
| **Componentização** | Todos os arquivos `.jsx` |
| **Props** | `ProdutoCard`, `Botao`, `Selo`, `MenuTopo` |
| **Children** | `Layout.jsx` (`<Layout>{children}</Layout>`) |
| **Lista + key** | `Vitrine.jsx` (`produtos.map(p => <ProdutoCard key={p.id} ... />)`) |
| **Renderização condicional** | `ProdutoCard.jsx` (selos condicionais) |
| **Formatação BRL** | `toLocaleString("pt-BR", { style: "currency", currency: "BRL" })` |
| **CSS próprio** | `App.css` — paleta Clean Tech Premium |

### Checklist final da Etapa 1 (entregue)

- [x] Projeto criado com **React 18 + Vite 5** em JavaScript puro (JSX), sem TypeScript
- [x] Estrutura de pastas organizada em `src/components/`
- [x] Componente `Layout.jsx` usando **`props.children`** como wrapper composicional
- [x] `Cabecalho.jsx` com identidade visual da marca (logo SVG, hero, chips de categoria)
- [x] `LogoNTS.jsx` — logo 100% SVG inline (hexágono + circuitos + wordmark "NTS")
- [x] `MenuTopo.jsx` com navegação por âncoras (`#vitrine`, `#sobre`, `#contato`, `#faq`, `#politicas`)
- [x] `Diferenciais.jsx` apresentando os pilares da loja
- [x] `Vitrine.jsx` com grid responsivo de produtos
- [x] `ProdutoCard.jsx` recebendo dados via **props**
- [x] `Botao.jsx` e `Selo.jsx` como componentes atômicos reutilizáveis
- [x] `SobreContato.jsx`, `FAQ.jsx`, `Politicas.jsx` e `Rodape.jsx` com conteúdo institucional real
- [x] Lista renderizada com **`.map()` + `key` única** (sem warnings no console)
- [x] **Renderização condicional** de selos (categoria, destaque por nota, disponível em estoque)
- [x] Formatação de preço em **BRL** com `toLocaleString("pt-BR", { currency: "BRL" })`
- [x] **CSS próprio** em `App.css` com paleta Clean Tech Premium (sem Tailwind, sem libs UI)
- [x] Links reais do autor no rodapé (GitHub, LinkedIn, e-mail)

---

## Etapa 2 — Integração com API

**Semana 13.** Substituição do array fixo por dados reais da DummyJSON, com estados e filtros.

### O que foi implementado

- **Consumo de API** com `fetch` em paralelo (`Promise.all`)
- **`useState`** gerenciando 5 estados em `Vitrine.jsx`:
  `produtos`, `carregando`, `erro`, `busca`, `categoria`
- **`useEffect`** com `[]` para carregamento na montagem do componente
- **Estado de carregamento** — `"Carregando produtos..."`
- **Tratamento de erro** com `try / catch / finally` e mensagem amigável
- **Busca por nome** em tempo real, controlada pelo input
- **Filtro por categoria** via `<select>` controlado
- **Mensagem vazia** — `"Nenhum produto encontrado"` quando os filtros não retornam resultados
- **`ProdutoCard` adaptado** aos campos da API: `title`, `price`, `thumbnail`, `category`
- **Renderização condicional** baseada em `rating >= 4.5` e `stock > 0`
- **Rótulos em português** para as categorias retornadas em inglês pela API

### API de Produtos

Endpoint base: `https://dummyjson.com/products/category/{categoria}`

Categorias consumidas (apenas tecnologia):

| Categoria (API) | Rótulo exibido |
|-----------------|----------------|
| `smartphones` | Smartphones |
| `laptops` | Notebooks |
| `tablets` | Tablets |
| `mobile-accessories` | Áudio & Acessórios |

**Estratégia de carregamento:**

```js
const respostas = await Promise.all(
  categoriasTech.map((cat) =>
    fetch(`https://dummyjson.com/products/category/${cat}`).then(r => r.json())
  )
);
const variados = respostas.flatMap(r => (r.products || []).slice(0, 5));
setProdutos(variados.slice(0, 20));
```

Até 5 produtos de cada uma das 4 categorias, totalizando até 20 itens distribuídos de forma equilibrada.

### Checklist final da Etapa 2 (entregue)

**Estado atual do projeto — exatamente o que está em produção:**

- [x] `npm install` e `npm run dev` rodam sem erros nem warnings
- [x] `Vitrine.jsx` consome a **DummyJSON** via `fetch` + `Promise.all` na montagem
- [x] **`useEffect([])`** dispara o carregamento uma única vez ao montar
- [x] **`useState`** controla 5 estados: `produtos`, `carregando`, `erro`, `busca`, `categoria`
- [x] Mensagem **"Carregando produtos..."** exibida enquanto `carregando === true`
- [x] **`try / catch / finally`** com mensagem amigável em caso de falha de rede
- [x] `ProdutoCard` exibe `title`, `price`, `thumbnail`, `category` e `rating` da API
- [x] **Input de busca** filtra produtos por título em tempo real (case-insensitive)
- [x] **`<select>` de categoria** filtra por `smartphones`, `laptops`, `tablets`, `mobile-accessories`
- [x] Rótulos das categorias **traduzidos para português** na UI (chaves da API preservadas)
- [x] Mensagem **"Nenhum produto encontrado"** quando os filtros não retornam resultados
- [x] Selos condicionais: **"Destaque"** quando `rating >= 4.5`, **"Indisponível"** quando `stock === 0`
- [x] Até **20 produtos** distribuídos igualmente entre as 4 categorias técnicas
- [x] Identidade visual da Etapa 1 **preservada integralmente** (logo, paleta, tipografia)
- [x] Hero com **orbe SVG animado** em CSS puro (sem Spline, sem Three.js, sem libs 3D)
- [x] Conteúdo institucional sem menções públicas a "DummyJSON" (linguagem de loja real)
- [x] Sem warnings de `key` ou de hooks no console

---

## Etapa 3 — SPA com React Router

**Semana 14.** Transformação da aplicação em uma SPA real, com navegação entre a vitrine, a página de detalhe de cada produto e uma página 404 — tudo sem recarregar a página.

### O que foi implementado

- **`react-router-dom`** instalado e configurado
- **`<BrowserRouter>`** envolvendo o `<App />` em `src/main.jsx`
- **`Routes` / `Route`** definidos em `src/App.jsx`, com o `Layout` envolvendo todas as páginas (cabeçalho e rodapé persistem em toda a SPA)
- Pasta **`src/pages/`** com:
  - `Home.jsx` — rota `/`, renderiza a vitrine já existente (busca, filtro, fetch da DummyJSON preservados)
  - `Detalhe.jsx` — rota `/produto/:id`, busca o produto específico via `https://dummyjson.com/products/${id}`
  - `NaoEncontrado.jsx` — rota `*`, página 404 amigável
- **`useParams()`** lê o `id` da URL na página de detalhe
- **`useEffect(() => { ... }, [id])`** recarrega o produto sempre que o id muda
- Estados de **carregando** (`"Carregando produto..."`) e **erro** (`"Não foi possível carregar os detalhes do produto."`) também na página de detalhe
- **Galeria simples** com imagem principal + thumbnails clicáveis (estado local `imagemAtiva`)
- `ProdutoCard.jsx` agora usa **`<Link to={\`/produto/${produto.id}\`}>`** (sem `<a href>`)
- Link **"← Voltar para a loja"** na página de detalhe e na 404
- A rota `*` é a **última**, garantindo que só URLs realmente inexistentes caem no 404

### Rotas

| Rota | Componente | Descrição |
|------|------------|-----------|
| `/` | `Home` | Vitrine + seções institucionais |
| `/produto/:id` | `Detalhe` | Página de detalhe do produto (fetch por id) |
| `*` | `NaoEncontrado` | Página 404 |

### Checklist final da Etapa 3 (entregue)

- [x] `npm install` e `npm run dev` rodam sem erros
- [x] `react-router-dom` instalado como dependência
- [x] `<BrowserRouter>` envolve o `<App />` em `main.jsx`
- [x] Rota `/` mostra a vitrine com **busca e filtro** funcionando (Etapa 2 preservada)
- [x] Clicar em um card abre `/produto/:id` **sem recarregar a página**
- [x] `Detalhe.jsx` usa **`useParams()`** para ler o `id`
- [x] `useEffect` do detalhe depende de **`[id]`** e refaz o fetch ao trocar de produto
- [x] Página de detalhe exibe `title`, `description`, `price` (BRL), `thumbnail`, `images` (galeria), `category`, `brand`, `rating`, `stock` e `discountPercentage`
- [x] Estado **"Carregando produto..."** enquanto a API responde
- [x] Mensagem amigável de erro em caso de falha de rede
- [x] Link **"← Voltar para a loja"** com `<Link to="/">`
- [x] URL inexistente (ex.: `/qualquercoisa`) cai na página **404 amigável**
- [x] `Cabecalho` e `Rodape` aparecem em **todas** as páginas (Home, Detalhe, 404)
- [x] Identidade visual Clean Tech Premium preservada (fundo claro, cards brancos, azul-marinho, verde tecnológico, dourado discreto)
- [x] **Não** foi implementado login, autenticação, rota protegida, carrinho, checkout, backend ou deploy
- [x] Código em **JavaScript puro (JSX)**, sem TypeScript, sem Tailwind, sem libs de UI

---

## Estrutura de componentes

### `Layout.jsx` — Wrapper composicional
Recebe `children` e estrutura semântica da página.

### `Cabecalho.jsx` — Header + Hero
Logo SVG, menu de navegação, hero com copy comercial e **orbe central animado** (SVG + CSS puro, sem dependências 3D).

### `LogoNTS.jsx` — Logo
SVG inline com hexágono + circuitos + wordmark "NTS", usando a paleta da marca.

### `Vitrine.jsx` — Catálogo (Etapa 2)
Estado + `useEffect` para fetch da API, busca, filtro por categoria, mensagens de carregamento/erro/vazio.

### `ProdutoCard.jsx` — Card de produto
Recebe `produto` por props. Exibe `thumbnail`, `title`, `category` (em português), `price` (BRL) e selos condicionais.

### `Selo.jsx` — Badge
Componente atômico com `texto` e `cor` por props.

### `Botao.jsx` — CTA
Componente reutilizável de chamada para ação.

### `SobreContato.jsx`, `FAQ.jsx`, `Politicas.jsx`
Seções institucionais com âncoras funcionais (`#sobre`, `#contato`, `#faq`, `#politicas`).

### `Rodape.jsx`
Footer com links institucionais e redes sociais reais (GitHub, LinkedIn, e-mail).

---

## Roadmap

### Fase 1 — Componentização (Etapa 1) ✅ entregue na Semana 12
- Setup React + Vite
- Componentes reutilizáveis
- Lista + renderização condicional
- CSS próprio com identidade Clean Tech Premium

### Fase 2 — Integração com API (Etapa 2) ✅ entregue na Semana 13
- `useState` e `useEffect`
- Consumo da DummyJSON com `Promise.all`
- Estados de carregamento, erro e vazio
- Busca em tempo real e filtro por categoria

### Fase 3 — SPA com React Router (Etapa 3) ✅ entregue na Semana 14
- `react-router-dom` + `BrowserRouter`
- Rotas `/`, `/produto/:id` e `*` (404)
- Navegação por `<Link>` sem reload
- `useParams` + `useEffect([id])` para buscar o produto pelo id
- Layout (cabeçalho + rodapé) preservado em todas as páginas

### Fora do escopo — o que NÃO será implementado nas próximas semanas

Os itens abaixo estão fora do recorte das Etapas 1, 2 e 3 e **não serão entregues** neste projeto acadêmico. Ficam registrados apenas como evolução possível em um cenário de produto real:

- [ ] **Autenticação** de usuários (login, cadastro, recuperação de senha)
- [ ] **Rotas protegidas** e área "Minha Conta" funcional
- [ ] **Carrinho de compras** com persistência (localStorage ou backend)
- [ ] **Checkout** e integração com gateway de pagamento (Stripe, Mercado Pago, etc.)
- [ ] **Painel administrativo** para CRUD de produtos
- [ ] **Backend próprio** ou banco de dados (Supabase, Firebase, etc.)
- [ ] **Favoritos**, avaliações de usuários ou comentários
- [ ] **Internacionalização** (i18n) — o projeto permanece somente em pt-BR
- [ ] **Testes automatizados** (Vitest, Testing Library, Cypress)
- [ ] **PWA**, push notifications ou modo offline
- [ ] **Deploy** em produção (fora do escopo da Etapa 3)
- [ ] **Animações 3D** (Spline, Three.js, R3F) — vetado pelo escopo da disciplina
- [ ] **Bibliotecas de UI** (Tailwind, Material UI, Chakra) — vetadas pelo escopo da disciplina

---

## Licença

Este projeto está licenciado sob a **MIT License** — veja o arquivo [LICENSE](LICENSE).

---

## Autor

**Matheus Florindo de Deus**

- **Curso:** TADS — IFES
- **GitHub:** [@matheusflorindo32](https://github.com/matheusflorindo32)
- **LinkedIn:** [Matheus Florindo](https://linkedin.com/in/matheusflorindo)
- **E-mail:** [matheusdideusf@gmail.com](mailto:matheusdideusf@gmail.com)

<div align="center">
  <sub><strong>NTS</strong> — Núcleo TADS Store · Projeto acadêmico IFES/TADS · React 18 + Vite</sub>
</div>
