# Núcleo Storefront

<div align="center">
  <img src="https://raw.githubusercontent.com/matheusflorindo32/nucleo-storefront/main/.github/assets/nts-hero.png" alt="Núcleo Storefront" width="720" />
  <br />
  <br />

  [![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)](https://react.dev)
  [![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
  [![License](https://img.shields.io/badge/License-MIT-0A2342)](LICENSE)
  [![CI](https://img.shields.io/badge/CI-passing-16A34A)](https://github.com/matheusflorindo32/nucleo-storefront/actions)
  <br />
  <strong>Plataforma de e-commerce acadêmica — Tecnologia, ciência e inovação em um só núcleo.</strong>
  <br />
  <em>Academic e-commerce platform — Technology, science and innovation in one core.</em>
</div>

---

## 📋 Índice / Table of Contents

- [Visão Geral / Overview](#-visão-geral--overview)
- [Arquitetura / Architecture](#-arquitetura--architecture)
- [Stack Tecnológico / Tech Stack](#-stack-tecnológico--tech-stack)
- [Funcionalidades / Features](#-funcionalidades--features)
- [Demonstração / Demo](#-demonstração--demo)
- [Instalação / Getting Started](#-instalação--getting-started)
- [Estrutura de Componentes / Component Structure](#-estrutura-de-componentes--component-structure)
- [API de Produtos / Product API](#-api-de-produtos--product-api)
- [Roadmap](#-roadmap)
- [Contribuição / Contributing](#-contribuição--contributing)
- [Licença / License](#-licença--license)
- [Contato / Contact](#-contato--contact)

---

## 🎯 Visão Geral / Overview

**PT:** O **Núcleo Storefront** é a vitrine digital do ecossistema Núcleo TADS — uma plataforma de e-commerce focada em produtos de tecnologia para estudantes, desenvolvedores e pesquisadores. Construído com React 18 + Vite, o projeto aplica princípios de componentização, composição e renderização declarativa para criar uma experiência de compra fluida, acessível e performática.

**EN:** **Núcleo Storefront** is the digital storefront of the Núcleo TADS ecosystem — an e-commerce platform focused on technology products for students, developers and researchers. Built with React 18 + Vite, the project applies componentization, composition and declarative rendering principles to create a fluid, accessible and performant shopping experience.

### Objetivos do projeto / Project Goals

| Objetivo | Descrição |
|----------|-----------|
| **Componentização** | Arquitetura 100% baseada em componentes reutilizáveis |
| **Composição** | Layout flexível via `props.children` |
| **Performance** | Renderização otimizada com `key` e Virtual DOM |
| **Acessibilidade** | Semântica HTML5, ARIA labels, contraste adequado |
| **Design System** | Identidade visual consistente (NTS — Núcleo TADS Store) |

---

## 🏗️ Arquitetura / Architecture

```
nucleo-storefront/
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Cabecalho.jsx    # Header + Hero section + SVG logo
│   │   ├── Layout.jsx       # Wrapper composicional
│   │   ├── Vitrine.jsx      # Grid de produtos + dados
│   │   ├── ProdutoCard.jsx  # Card individual (imagem, selos, preço)
│   │   ├── Botao.jsx        # CTA primário
│   │   ├── Selo.jsx         # Badge/tag component
│   │   └── Rodape.jsx       # Footer
│   ├── App.jsx              # Root composition
│   ├── main.jsx             # Entry point (React 18 createRoot)
│   └── App.css              # Design system + layout grid
├── index.html
├── package.json
└── vite.config.js
```

### Diagrama de Composição / Composition Diagram

```
App
└── Layout (props.children)
    ├── Cabecalho
    │   └── LogoNTS (SVG inline + gradientes)
    ├── Vitrine
    │   └── ProdutoCard × N
    │       ├── Selo (destaque)
    │       ├── Selo (frete grátis — condicional)
    │       └── Botao (CTA)
    └── Rodape
```

---

## 🛠️ Stack Tecnológico / Tech Stack

| Camada | Tecnologia | Versão | Propósito |
|--------|------------|--------|-----------|
| **Framework UI** | React | 18.3.1 | Biblioteca declarativa para interfaces |
| **Bundler** | Vite | 5.4.10 | Build ultra-rápido, HMR instantâneo |
| **Runtime** | Node.js | 18+ | Ambiente de execução |
| **Styling** | CSS3 puro | — | Design system customizado, sem dependências |
| **Ícones/Assets** | SVG inline | — | Logo vetorial, gradientes, circuitos decorativos |
| **Imagens** | Unsplash CDN | — | Assets de produto (placeholder) |

### Decisões arquiteturais / Architectural Decisions

- **Sem CSS frameworks** → Controle total sobre identidade visual NTS
- **SVG inline** → Logo responsivo, animável, sem requests externos
- **Array fixo de produtos** → Simulação de backend para demonstração de `map()` e `key`
- **Props drilling** → Padrão didático; pronto para evolução para Context API ou Redux

---

## ✨ Funcionalidades / Features

### Implementadas / Implemented

- [x] **Catálogo de produtos** — Grid responsivo com 6 produtos curados
- [x] **Cards de produto** — Imagem, categoria, descrição, preço formatado (BRL), CTA
- [x] **Selos dinâmicos** — Badges de destaque, frete grátis (renderização condicional)
- [x] **Layout composicional** — `Layout` com `props.children` para flexibilidade
- [x] **Hero section** — Branding com gradiente, tagline e proposta de valor
- [x] **Logo SVG** — Hexágono + circuitos + monograma NTS com gradientes
- [x] **Preços localizados** — `toLocaleString("pt-BR", { currency: "BRL" })`
- [x] **Renderização otimizada** — `.map()` com `key` única para reconciliação eficiente

### Em desenvolvimento / In Development

- [ ] **Carrinho de compras** — Context API + localStorage
- [ ] **Filtros de categoria** — Sidebar com checkboxes
- [ ] **Busca em tempo real** — Debounce + filtro de array
- [ ] **Página de produto** — React Router + route params
- [ ] **Checkout** — Formulário multi-etapa com validação
- [ ] **Backend API** — Node.js + Express + MongoDB
- [ ] **Testes E2E** — Playwright
- [ ] **CI/CD** — GitHub Actions + Vercel deploy

---

## 🖥️ Demonstração / Demo

```bash
# Clone o repositório
$ git clone https://github.com/matheusflorindo32/nucleo-storefront.git

# Instale as dependências
$ npm install

# Inicie o servidor de desenvolvimento
$ npm run dev

# Acesse http://localhost:5173
```

### Preview visual / Visual Preview

> **Hero Section** — Branding NTS com proposta de valor e call-to-action
> **Product Grid** — 6 cards responsivos com imagens, selos e preços
> **Footer** — Identidade visual consistente

---

## 🚀 Instalação / Getting Started

### Pré-requisitos / Prerequisites

- [Node.js](https://nodejs.org/) 18.x ou superior
- [npm](https://www.npmjs.com/) 9.x ou superior

### Passo a passo / Step by Step

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

### Scripts disponíveis / Available Scripts

| Script | Comando | Descrição |
|--------|---------|-----------|
| **Dev** | `npm run dev` | Servidor de desenvolvimento com HMR |
| **Build** | `npm run build` | Build otimizado para produção (`dist/`) |
| **Preview** | `npm run preview` | Preview da build de produção |

---

## 🧩 Estrutura de Componentes / Component Structure

### 1. `Cabecalho.jsx` — Header + Hero
- **LogoNTS** → SVG vetorial com gradientes lineares, hexágono e circuitos decorativos
- **Hero section** → Badge, headline com accent, subtítulo
- **Props:** `titulo` (string) — título customizável do header

### 2. `Layout.jsx` — Wrapper Composicional
- Recebe `children` via props
- Estrutura semântica: `<header>`, `<main>`, `<footer>`
- Permite troca de conteúdo sem alterar a estrutura

### 3. `Vitrine.jsx` — Grid de Produtos
- Array fixo `produtos` com 6 itens
- Cada produto: `id`, `nome`, `preco`, `categoria`, `descricao`, `freteGratis`, `destaque`, `imagem`
- Renderização com `.map()` e `key={produto.id}`
- CSS Grid responsivo

### 4. `ProdutoCard.jsx` — Card Individual
- **Props:** `produto` (object)
- **Renderização condicional:** `freteGratis && <Selo />`
- **Formatação:** `toLocaleString("pt-BR", { style: "currency", currency: "BRL" })`
- **Children:** `Selo`, `Botao`

### 5. `Selo.jsx` — Badge/Tag
- **Props:** `texto` (string), `cor` (string hex)
- Componente atômico, reutilizado em múltiplos contextos

### 6. `Botao.jsx` — Call-to-Action
- **Props:** `texto` (string)
- Estado visual: hover, focus, active
- Semântico: `<button>` com acessibilidade

### 7. `Rodape.jsx` — Footer
- Branding, links, copyright
- Identidade visual consistente

---

## 📦 API de Produtos / Product API

Atualmente o catálogo é um array fixo. Futuramente será substituído por uma API RESTful.

### Estrutura do produto / Product Schema

```typescript
interface Product {
  id: number;           // Identificador único (UUID futuramente)
  nome: string;         // Nome do produto
  preco: number;        // Preço em BRL (centavos futuramente)
  categoria: string;    // Categoria (Computadores, Periféricos, etc.)
  descricao: string;    // Descrição curta
  freteGratis: boolean; // Flag de frete grátis
  destaque: string;     // Badge de destaque
  imagem: string;       // URL da imagem (Unsplash CDN)
}
```

### Produtos do catálogo / Catalog Products

| ID | Produto | Categoria | Preço | Frete Grátis | Destaque |
|----|---------|-----------|-------|--------------|----------|
| 1 | Notebook Núcleo Pro | Computadores | R$ 4.599,90 | ✅ | Mais vendido |
| 2 | Mouse Apex Precision | Periféricos | R$ 189,90 | ✅ | Alta precisão |
| 3 | Teclado TADS Mechanical | Periféricos | R$ 349,90 | ❌ | Dev choice |
| 4 | Monitor Científico View 24 | Monitores | R$ 899,90 | ✅ | Full HD |
| 5 | Headset Tropa Comms | Áudio | R$ 279,90 | ❌ | Áudio limpo |
| 6 | Webcam Aula Pro HD | Imagem | R$ 219,90 | ✅ | Home office |

---

## 🗺️ Roadmap

### Fase 1 — Fundação (✅ Concluída)
- [x] Setup React + Vite
- [x] Componentização básica
- [x] Layout com composição
- [x] Renderização de lista com `.map()` e `key`
- [x] Renderização condicional (selo frete grátis)
- [x] CSS próprio com identidade visual

### Fase 2 — Interatividade (🔄 Em progresso)
- [ ] Estado global (Context API ou Zustand)
- [ ] Carrinho de compras
- [ ] Contador de itens no header
- [ ] Filtros de categoria
- [ ] Busca em tempo real

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

## 🤝 Contribuição / Contributing

**PT:** Contribuições são bem-vindas! Siga os passos abaixo:

**EN:** Contributions are welcome! Follow the steps below:

```bash
# 1. Fork o repositório
# 2. Crie uma branch
$ git checkout -b feature/nome-da-feature

# 3. Faça commit das alterações
$ git commit -m "feat: adiciona nova funcionalidade"

# 4. Push para a branch
$ git push origin feature/nome-da-feature

# 5. Abra um Pull Request
```

### Padrões de commit / Commit Standards

Seguimos [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` — Nova funcionalidade
- `fix:` — Correção de bug
- `docs:` — Documentação
- `style:` — Formatação (espaços, ponto e vírgula, etc.)
- `refactor:` — Refatoração de código
- `test:` — Adição ou correção de testes
- `chore:` — Tarefas de build, configuração, etc.

---

## 📄 Licença / License

Este projeto está licenciado sob a **MIT License** — veja o arquivo [LICENSE](LICENSE) para detalhes.

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024-2025 Núcleo TADS Group

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

## 📞 Contato / Contact

<div align="center">

  **Núcleo TADS Group** — Tecnologia, ciência e inovação em um só núcleo.

  [![GitHub](https://img.shields.io/badge/GitHub-matheusflorindo32-181717?logo=github)](https://github.com/matheusflorindo32)
  [![Email](https://img.shields.io/badge/Email-matheusdideusf@gmail.com-D14836?logo=gmail)](mailto:matheusdideusf@gmail.com)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-Matheus%20Florindo-0A66C2?logo=linkedin)](https://linkedin.com/in/matheusflorindo)
  [![Website](https://img.shields.io/badge/Website-nucleotatico.com.br-0A2342?logo=google-chrome)](https://nucleotatico.com.br)

  <br />

  <em>Desenvolvido com ❤️ por <strong>Matheus Florindo de Deus</strong></em>

</div>

---

<div align="center">
  <sub>🎖️ <strong>NTS</strong> — Núcleo TADS Store · Plataforma acadêmica de e-commerce · React 18 + Vite</sub>
</div>
