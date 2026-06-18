# Núcleo TADS Store

<div align="center">
  <img src="./logo-nts.jpg" alt="Núcleo TADS Store" width="480" />
  <br /><br />

  [![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)](https://react.dev)
  [![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
  [![License](https://img.shields.io/badge/License-MIT-0A2342)](LICENSE)
  [![Website](https://img.shields.io/badge/Website-nucleotatico.com.br-0A2342?logo=google-chrome)](https://www.nucleotatico.com)
  <br />
  <strong>Atividade Acadêmica — IFES · Tecnologia em Análise e Desenvolvimento de Sistemas (TADS)</strong>
  <br />
  <em>Vitrine digital de e-commerce com componentização avançada em React 18</em>
</div>

---

## 📋 Índice

- [Contexto Acadêmico](#-contexto-acadêmico)
- [Visão Geral](#-visão-geral)
- [Demonstração](#-demonstração)
- [Arquitetura](#-arquitetura)
- [Stack Tecnológico](#-stack-tecnológico)
- [Catálogo de Produtos](#-catálogo-de-produtos)
- [Requisitos da Atividade](#-requisitos-da-atividade)
- [Componentes](#-componentes)
- [Instalação](#-instalação)
- [API de Produtos](#-api-de-produtos)
- [Design System](#-design-system)
- [Roadmap](#-roadmap)
- [Licença](#-licença)
- [Autor](#-autor)

---

## 🎓 Contexto Acadêmico

| Campo | Informação |
|-------|------------|
| **Instituição** | Instituto Federal do Espírito Santo (IFES) |
| **Curso** | Tecnologia em Análise e Desenvolvimento de Sistemas (TADS) |
| **Disciplina** | Desenvolvimento Web Front-end |
| **Atividade** | Semana 12 / Etapa 1 — Projeto Integrador |
| **Tema** | Componentização em React |
| **Período** | 2024/2025 |

---

## 🎯 Visão Geral

O **Núcleo TADS Store** é uma vitrine de e-commerce completa desenvolvida como projeto integrador da disciplina de Desenvolvimento Web Front-end do IFES/TADS. O projeto demonstra a aplicação prática de conceitos fundamentais e avançados de React:

- **Componentização** — arquitetura modular com 10 componentes reutilizáveis
- **Composição** — `props.children` para layouts flexíveis e aninhados
- **Props** — passagem de dados tipados entre componentes pai-filho
- **Renderização de listas** — `.map()` com `key` para reconciliação eficiente
- **Renderização condicional** — exibição dinâmica de selos, parcelas e avaliações
- **Acessibilidade** — semântica HTML5, ARIA labels, roles e atributos
- **Design System** — identidade visual NTS com paleta institucional

Construído com React 18 e Vite, o projeto simula uma loja virtual completa com 12 produtos curados, filtro de categorias, diferenciais institucionais, navegação superior e rodapé profissional.

---

## 🖥️ Demonstração

```bash
# Clone o repositório
$ git clone https://github.com/matheusflorindo32/nucleo-storefront.git
$ cd nucleo-storefront

# Instale as dependências
$ npm install

# Inicie o servidor de desenvolvimento
$ npm run dev

# Acesse http://localhost:5173
```

### Preview da interface

> **Hero Section** — Cabeçalho com navegação, mockup visual 3D e proposta de valor  
> **Diferenciais** — 4 cards de autoridade técnica com ícones e descrições  
> **Vitrine de Produtos** — Grid com 12 cards, filtro de categorias e contador  
> **Rodapé** — Links institucionais, redes sociais e crédito acadêmico

---

## 🏗️ Arquitetura

```
nucleo-storefront/
├── src/
│   ├── assets/                  # Assets estáticos (logos, imagens)
│   ├── components/              # Componentes reutilizáveis
│   │   ├── Cabecalho.jsx        # Header + Hero + Navegação + Mockup visual
│   │   ├── MenuTopo.jsx         # Navegação principal (5 links)
│   │   ├── Layout.jsx           # Wrapper composicional (header/main/footer)
│   │   ├── Diferenciais.jsx     # 4 cards de valor (curadoria, frete, garantia, suporte)
│   │   ├── Vitrine.jsx          # Grid de produtos + filtro de categorias + contador
│   │   ├── FiltroCategorias.jsx # Chips de filtro (role="tablist", ARIA)
│   │   ├── ProdutoCard.jsx      # Card individual (imagem, selos, preço, parcelas, avaliação)
│   │   ├── Botao.jsx            # CTA primário
│   │   ├── Selo.jsx             # Badge/tag componente atômico
│   │   └── Rodape.jsx           # Footer institucional + redes sociais + copyright
│   ├── App.jsx                  # Root composition (Layout → Diferenciais → Vitrine)
│   ├── main.jsx                 # Entry point (React 18 createRoot)
│   └── App.css                  # Design system completo (900+ linhas)
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

### Diagrama de Composição

```
App
└── Layout (props.children)
    ├── Cabecalho
    │   ├── MenuTopo (navegação com 5 links)
    │   └── Hero (badge, headline, chips, mockup visual 3D)
    ├── Diferenciais (4 cards de valor)
    ├── Vitrine
    │   ├── FiltroCategorias (chips de filtro ARIA)
    │   └── ProdutoCard × 12
    │       ├── Selo (destaque)
    │       ├── Selo (frete grátis — condicional)
    │       └── Botao (CTA)
    └── Rodape
        ├── Marca + tagline
        ├── Links institucionais
        ├── Redes sociais (Instagram, LinkedIn, GitHub)
        └── Copyright + crédito acadêmico
```

---

## 🛠️ Stack Tecnológico

| Camada | Tecnologia | Versão | Propósito |
|--------|------------|--------|-----------|
| **Framework UI** | React | 18.3.1 | Biblioteca declarativa para interfaces |
| **Bundler** | Vite | 5.4.10 | Build ultra-rápido, HMR instantâneo |
| **Runtime** | Node.js | 18+ | Ambiente de execução |
| **Styling** | CSS3 puro | — | Design system customizado, zero dependências |
| **Ícones/Assets** | SVG inline + PNG | — | Logo institucional, ícones de redes sociais |
| **Imagens** | Unsplash CDN | — | Assets de produto (placeholder) |
| **Package Manager** | npm | 9+ | Gerenciamento de dependências |

### Decisões arquiteturais

- **Sem CSS frameworks** → Controle total sobre identidade visual NTS, zero bloat
- **Sem bibliotecas de UI** → Todos os componentes são hand-crafted, demonstrando domínio técnico
- **SVG inline** → Logo e ícones responsivos, animáveis, sem requests externos
- **Array fixo de produtos** → Simulação de backend para demonstração de `map()`, `key` e filtro
- **Props drilling didático** → Pronto para evolução para Context API, Zustand ou Redux
- **Acessibilidade nativa** → Sem bibliotecas externas, ARIA implementado manualmente

---

## 📦 Catálogo de Produtos

A vitrine conta com **12 produtos** distribuídos em **8 categorias**:

| ID | Produto | Categoria | Preço | Parcelas | Frete Grátis | Avaliação | Destaque |
|----|---------|-----------|-------|----------|--------------|-----------|----------|
| 1 | Notebook Núcleo Pro | Computadores | R$ 4.599,90 | 12x R$ 383,32 | ✅ | 4.9 | Mais vendido |
| 2 | Mouse Apex Precision | Periféricos | R$ 189,90 | 4x R$ 47,47 | ✅ | 4.7 | Alta precisão |
| 3 | Teclado TADS Mechanical | Periféricos | R$ 349,90 | 6x R$ 58,32 | ❌ | 4.8 | Dev choice |
| 4 | Monitor Científico View 24 | Monitores | R$ 899,90 | 10x R$ 89,99 | ✅ | 4.6 | Full HD |
| 5 | Headset Tropa Comms | Áudio | R$ 279,90 | 5x R$ 55,98 | ❌ | 4.5 | Áudio limpo |
| 6 | Webcam Aula Pro HD | Imagem | R$ 219,90 | 4x R$ 54,97 | ✅ | 4.4 | Home office |
| 7 | SSD NVMe Núcleo 1TB | Armazenamento | R$ 559,00 | 10x R$ 55,90 | ✅ | 4.9 | Ultra rápido |
| 8 | Cadeira Ergo Code | Ergonomia | R$ 1.499,00 | 12x R$ 124,92 | ✅ | 4.7 | Conforto pro |
| 9 | Mesa Digitalizadora Studio | Imagem | R$ 829,90 | 10x R$ 82,99 | ❌ | 4.6 | Criativos |
| 10 | Hub USB-C 8 em 1 | Acessórios | R$ 299,00 | 5x R$ 59,80 | ✅ | 4.5 | Setup pro |
| 11 | Livro Clean Architecture | Livros técnicos | R$ 159,90 | 3x R$ 53,30 | ❌ | 4.9 | Essencial |
| 12 | Roteador Wi-Fi 6 Mesh | Redes | R$ 1.199,00 | 10x R$ 119,90 | ✅ | 4.6 | Wi-Fi 6 |

**Categorias disponíveis:** Todos, Computadores, Periféricos, Monitores, Áudio, Imagem, Armazenamento, Ergonomia, Acessórios, Livros técnicos, Redes.

---

## ✅ Requisitos da Atividade

### Checklist de entrega — Semana 12 / Etapa 1

- [x] **Projeto criado com React + Vite**
- [x] **Componentes reutilizáveis** — 10 componentes modulares e independentes
- [x] **Layout com `props.children`** — Layout composicional flexível
- [x] **Cabeçalho com identidade visual** — SVG logo, gradientes, tagline, mockup 3D
- [x] **Navegação principal** — MenuTopo com 5 links e estado ativo
- [x] **Vitrine de produtos** — Grid com 12 produtos curados
- [x] **Filtro de categorias** — Chips interativos com ARIA (`role="tablist"`)
- [x] **Cards reutilizáveis** — ProdutoCard com props dinâmicas
- [x] **Props** — Passagem de dados entre componentes (titulo, produto, itens, categorias)
- [x] **Composição** — Layout envolvendo children, Diferenciais e Vitrine
- [x] **Array fixo de produtos** — 12 itens com dados completos
- [x] **Renderização com `.map()`** — Lista dinâmica de produtos, menu, chips, diferenciais
- [x] **Uso de `key`** — Chave única para reconciliação eficiente em todas as listas
- [x] **Renderização condicional** — Selo de frete grátis, parcelas, avaliação
- [x] **CSS próprio** — Design system completo (900+ linhas), identidade visual NTS
- [x] **Acessibilidade** — ARIA labels, roles, semântica HTML5, atributos `aria-*`
- [x] **Diferenciais institucionais** — 4 cards de valor com ícones e descrições
- [x] **Rodapé profissional** — Links, redes sociais, email, copyright

### Conceitos demonstrados

| Conceito | Onde foi aplicado | Código exemplo |
|----------|-------------------|----------------|
| **Componentização** | 10 arquivos `.jsx` | `Cabecalho`, `Vitrine`, `ProdutoCard`, `Diferenciais` |
| **Props** | `Cabecalho`, `ProdutoCard`, `Botao`, `Selo`, `MenuTopo`, `Diferenciais` | `<Cabecalho titulo="Núcleo TADS Store" />` |
| **Children** | `Layout.jsx` | `<Layout>{children}</Layout>` |
| **Lista + key** | `Vitrine.jsx`, `MenuTopo.jsx`, `Diferenciais.jsx` | `produtos.map(p => <ProdutoCard key={p.id} ... />)` |
| **Condicional** | `ProdutoCard.jsx` | `{produto.freteGratis && <Selo ... />}` |
| **Formatação** | `ProdutoCard.jsx` | `preco.toLocaleString("pt-BR", {currency: "BRL"})` |
| **ARIA** | `FiltroCategorias.jsx`, `MenuTopo.jsx` | `role="tablist"`, `aria-selected`, `aria-label` |

---

## 🧩 Componentes

### 1. `Cabecalho.jsx` — Header + Hero + Navegação
- **MenuTopo** → Navegação principal com 5 links (Início, Vitrine, Categorias, Sobre, Contato)
- **Hero Section** → Badge "Vitrine de Produtos", headline com accent, subtítulo
- **Chips** → 3 diferenciais rápidos (Curadoria técnica, Frete grátis Brasil, Suporte por devs)
- **Mockup Visual 3D** → Animação CSS com anéis, hexágonos, dots e card flutuante de produto
- **Props:** `titulo` (string) — título customizável

### 2. `MenuTopo.jsx` — Navegação Principal
- **Props:** `itens` (array de `{label, href, ativo}`)
- **Acessibilidade:** `aria-label="Navegação principal"`, lista semântica `<ul>`
- **Estado ativo:** Classe CSS condicional para link ativo

### 3. `Layout.jsx` — Wrapper Composicional
- Recebe `children` via props
- Estrutura semântica: `<header>`, `<main>`, `<footer>`
- Permite troca de conteúdo sem alterar a estrutura da página

### 4. `Diferenciais.jsx` — Cards de Valor
- **Props:** `itens` (array de `{id, icone, titulo, texto}`)
- **Padrão:** 4 diferenciais (Curadoria técnica, Frete grátis, Garantia estendida, Suporte por devs)
- **Acessibilidade:** `aria-labelledby="diferenciais-titulo"`
- **Renderização:** `.map()` com `key={item.id}`

### 5. `Vitrine.jsx` — Grid de Produtos + Filtro
- **Array fixo:** 12 produtos com dados completos (id, nome, preco, parcelas, avaliacao, categoria, descricao, freteGratis, destaque, imagem)
- **FiltroCategorias:** Chips interativos com `role="tablist"` e `aria-selected`
- **Contador:** `{produtos.length} produtos disponíveis`
- **Renderização:** `.map()` com `key={produto.id}`
- **CSS Grid:** `repeat(auto-fill, minmax(260px, 1fr))` responsivo

### 6. `FiltroCategorias.jsx` — Filtro de Categorias
- **Props:** `categorias` (array), `ativa` (string)
- **Acessibilidade:** `role="tablist"`, `role="tab"`, `aria-selected`, `aria-label="Categorias"`
- **Interatividade:** Estado visual ativo/inativo via classe CSS

### 7. `ProdutoCard.jsx` — Card Individual
- **Props:** `produto` (object)
- **Imagem:** Com moldura circular, halo glow e selo de destaque
- **Avaliação:** Estrelas com `aria-label` (ex: "Avaliação 4.9")
- **Selos:** Destaque, frete grátis (condicional), categoria
- **Preço:** `toLocaleString("pt-BR", {style: "currency", currency: "BRL"})`
- **Parcelas:** Renderização condicional
- **CTA:** `<Botao texto="Ver produto" />`

### 8. `Selo.jsx` — Badge/Tag Atômico
- **Props:** `texto` (string), `cor` (string hex)
- Componente atômico, reutilizado em múltiplos contextos (destaque, frete grátis, categoria)
- Estilo: pill arredondada, cor configurável via prop

### 9. `Botao.jsx` — Call-to-Action
- **Props:** `texto` (string), `onClick` opcional
- Estados visuais: hover, focus, active
- Semântico: `<button>` com acessibilidade nativa

### 10. `Rodape.jsx` — Footer Institucional
- **Marca:** Nome, tagline, selo "Curadoria acadêmica TADS"
- **Links:** 5 links institucionais (Sobre, Vitrine, Contato, Políticas, FAQ)
- **Redes sociais:** Instagram, LinkedIn, GitHub (ícones SVG inline)
- **Contato:** `contato@nucleotads.store`
- **Copyright:** `© 2026 Núcleo TADS Store · Todos os direitos reservados.`
- **Crédito:** `Desenvolvido por Matheus Florindo de Deus — Projeto acadêmico TADS`

---

## 🚀 Instalação

### Pré-requisitos

- [Node.js](https://nodejs.org/) 18.x ou superior
- [npm](https://www.npmjs.com/) 9.x ou superior

### Passo a passo

```bash
# 1. Clone o repositório
$ git clone https://github.com/matheusflorindo32/nucleo-storefront.git
$ cd nucleo-storefront

# 2. Instale as dependências
$ npm install

# 3. Inicie o servidor de desenvolvimento
$ npm run dev

# 4. Abra no navegador
$ open http://localhost:5173
```

### Scripts disponíveis

| Script | Comando | Descrição |
|--------|---------|-----------|
| **Dev** | `npm run dev` | Servidor de desenvolvimento com HMR |
| **Build** | `npm run build` | Build otimizado para produção (`dist/`) |
| **Preview** | `npm run preview` | Preview da build de produção |

---

## 📦 API de Produtos

Atualmente o catálogo é um array fixo. Futuramente será substituído por uma API RESTful.

### Estrutura do produto

```typescript
interface Product {
  id: number;           // Identificador único
  nome: string;         // Nome do produto
  preco: number;        // Preço em BRL
  parcelas: string;     // Texto de parcelamento (ex: "12x R$ 383,32")
  avaliacao: number;    // Nota de 0.0 a 5.0
  categoria: string;    // Categoria (Computadores, Periféricos, etc.)
  descricao: string;    // Descrição curta
  freteGratis: boolean; // Flag de frete grátis
  destaque: string;     // Badge de destaque
  imagem: string;       // URL da imagem (Unsplash CDN)
}
```

---

## 🎨 Design System

### Paleta de cores NTS

| Token | Valor | Uso |
|-------|-------|-----|
| **Azul-marinho** | `#0A2342` | Títulos, selos, texto principal |
| **Azul-tecnologia** | `#1E5AA8` | Botões primários, links |
| **Verde-água** | `#14B8A6` | Destaques, selos de categoria |
| **Verde-sucesso** | `#16A34A` | Frete grátis, confirmações |
| **Dourado** | `#C8A24A` | Acentos, bordas, detalhes premium |
| **Fundo** | `#F8FAFC` | Background principal |
| **Fundo-secundário** | `#EEF6F8` | Seções alternadas |
| **Card** | `#FFFFFF` | Cards com sombra suave |

### Tipografia

- **Fonte:** `system-ui, -apple-system, sans-serif`
- **Títulos:** Azul-marinho `#0A2342`, peso 700-800
- **Body:** Cinza `#334155`, peso 400, line-height 1.6
- **Labels:** Cinza claro `#64748B`, peso 500, uppercase

### Espaçamento

- **Border-radius cards:** 16px
- **Border-radius selos:** 999px (pill)
- **Sombra cards:** `0 4px 24px rgba(10,35,66,0.08)`
- **Grid vitrine:** `repeat(auto-fill, minmax(260px, 1fr))`, gap 24px
- **Container:** `max-width: 1200px`, padding responsivo

### Animações

- **Card hover:** `translateY(-4px)` + sombra intensificada (sensação 3D com CSS puro)
- **Botão hover:** Elevação + escurecimento de cor
- **Mockup hero:** Anéis rotativos, halo pulsante, dots flutuantes (CSS animations)
- **Transições:** `transition: all 0.25s ease`

---

## 🗺️ Roadmap

### Fase 1 — Fundação (✅ Concluída)
- [x] Setup React + Vite
- [x] 10 componentes reutilizáveis
- [x] Layout com composição
- [x] Renderização de lista com `.map()` e `key`
- [x] Renderização condicional (selos, parcelas, avaliação)
- [x] CSS próprio com design system NTS
- [x] Acessibilidade ARIA
- [x] 12 produtos, 8 categorias, filtro
- [x] Hero com mockup visual 3D
- [x] Diferenciais institucionais
- [x] Rodapé profissional com redes sociais

### Fase 2 — Interatividade (📋 Planejada)
- [ ] Estado global (Context API ou Zustand)
- [ ] Carrinho de compras
- [ ] Contador de itens no header
- [ ] Filtros funcionais (JavaScript, não apenas visual)
- [ ] Busca em tempo real
- [ ] Ordenação por preço, avaliação, destaque

### Fase 3 — Escalabilidade (📋 Planejada)
- [ ] React Router (SPA navigation)
- [ ] Página de detalhe do produto
- [ ] Backend API (Node.js + Express)
- [ ] Banco de dados (MongoDB/PostgreSQL)
- [ ] Autenticação (JWT)
- [ ] Painel administrativo

### Fase 4 — Produção (📋 Planejada)
- [ ] Testes unitários (Vitest + React Testing Library)
- [ ] Testes E2E (Playwright)
- [ ] CI/CD (GitHub Actions)
- [ ] Deploy (Vercel/Netlify)
- [ ] Analytics (Plausible/Google Analytics)
- [ ] SEO otimizado (SSR ou SSG)

---

## 📝 Documentação e Revisão

Este README foi revisado e aprimorado com assistência de IA (Kimi Claw) para garantir clareza técnica, padronização acadêmica e apresentação profissional. O conteúdo original, arquitetura e código do projeto foram desenvolvidos pelo autor.

---

## 📄 Licença

Este projeto está licenciado sob a **MIT License** — veja o arquivo [LICENSE](LICENSE) para detalhes.

```
MIT License

Copyright (c) 2024-2025 Matheus Florindo de Deus

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 👤 Autor

**Matheus Florindo de Deus**

- **Curso:** TADS — IFES
- **Website:** [www.nucleotatico.com](https://www.nucleotatico.com)
- **GitHub:** [@matheusflorindo32](https://github.com/matheusflorindo32)
- **Email:** [matheusdideusf@gmail.com](mailto:matheusdideusf@gmail.com)
- **LinkedIn:** [Matheus Florindo](https://linkedin.com/in/matheusflorindo)

<div align="center">
  <sub>🎖️ <strong>NTS</strong> — Núcleo TADS Store · Atividade Acadêmica IFES/TADS · React 18 + Vite</sub>
</div>
