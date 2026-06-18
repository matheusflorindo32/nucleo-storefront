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
│   │   └── Rodape.jsx           # Footer com GitHub, LinkedIn, e-mail
│   ├── App.jsx                  # Composição da página
│   ├── main.jsx                 # Entry React 18
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

### Checklist Etapa 1

- [x] Projeto criado com React + Vite
- [x] Componentes reutilizáveis (Layout, Cabecalho, Vitrine, ProdutoCard, Botao, Selo, Rodape)
- [x] Layout com `props.children`
- [x] Cabeçalho com identidade visual (logo SVG, hero, chips)
- [x] Vitrine de produtos com grid responsivo
- [x] Cards reutilizáveis com props dinâmicas
- [x] Lista renderizada com `.map()` + `key`
- [x] Renderização condicional (selos por categoria, destaque, disponível)
- [x] CSS próprio com identidade Clean Tech Premium

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

### Checklist Etapa 2

- [x] `npm run dev` roda sem erros
- [x] Loja carrega produtos reais da DummyJSON
- [x] Aparece "Carregando produtos..." antes dos dados chegarem
- [x] Mensagem amigável em caso de erro de rede
- [x] `ProdutoCard` exibe `title`, `price`, `thumbnail` e `category`
- [x] Busca filtra os produtos em tempo real pelo título
- [x] `<select>` filtra por categoria (rótulos em português)
- [x] "Nenhum produto encontrado" quando aplicável
- [x] Sem aviso de `key` no console
- [x] Sem rotas, login, carrinho ou outras funcionalidades de etapas futuras
- [x] Identidade visual da Etapa 1 preservada

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

### Fase 1 — Componentização (Etapa 1) ✅
- Setup React + Vite
- Componentes reutilizáveis
- Lista + renderização condicional
- CSS próprio

### Fase 2 — Integração com API (Etapa 2) ✅
- `useState` e `useEffect`
- Consumo da DummyJSON
- Carregamento e tratamento de erro
- Busca e filtro

### Fase 3 — Próximas etapas (não implementado neste escopo)
- React Router (página de detalhe)
- Autenticação
- Carrinho de compras
- Painel administrativo

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
