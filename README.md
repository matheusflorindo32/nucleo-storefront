# Núcleo TADS Store

Loja virtual acadêmica desenvolvida em **React + Vite** para a disciplina
**Desenvolvimento Front-End II** (TADS · 2º período · IFES — Campus de Alegre).
Reúne as quatro etapas do projeto: componentização, estado/hooks/API,
navegação SPA e autenticação simulada.

## ✨ Funcionalidades

### Etapa 1 — Componentização
- Layout com `children`, Cabeçalho, Rodapé, Vitrine, ProdutoCard, Botão, Selo.
- Uso de props, composição, renderização condicional e listas com `.map()`.

### Etapa 2 — Estado, Hooks e API
- Consumo da API pública [DummyJSON](https://dummyjson.com).
- `useState` + `useEffect` para carregar produtos.
- Busca por nome, filtro por categoria e ordenação (refletidos na URL).
- Estados de **carregando**, **erro** e **vazio** tratados explicitamente.

### Etapa 3 — Navegação (SPA)
- React Router com rotas:
  - `/` — Home / Vitrine
  - `/produto/:id` — Detalhes do produto (galeria, breadcrumbs, especificações)
  - `/login` — Tela de login
  - `/minha-conta` — Área protegida
  - `/sobre-o-projeto` — Documentação acadêmica
  - `*` — Página 404 personalizada com sugestões de produtos
- Clique no card abre o detalhe; voltar mantém o estado da vitrine.

### Etapa 4 — Autenticação
- `AuthContext` + `useAuth` para sessão global.
- Persistência no `localStorage` (sobrevive ao reload).
- Componente `RotaPrivada` que redireciona deslogados para `/login`.
- Cabeçalho alterna entre **Entrar** e **Sair** conforme a sessão.

## 🧱 Tecnologias
- React 18
- Vite 5
- React Router DOM 6
- Context API
- CSS puro (sem libs de UI)
- API DummyJSON

## 🚀 Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## 🔐 Login de teste

| Usuário | Senha |
|---------|-------|
| `aluno` | `1234` |

Fluxo: tente acessar `/minha-conta` → é redirecionado para `/login` → entre com
`aluno` / `1234` → o cabeçalho passa a mostrar **Sair**.

## 🗂️ Estrutura

```
src/
├── components/      # UI reutilizável (Cabecalho, Vitrine, ProdutoCard, RotaPrivada, ...)
├── contexts/        # AuthContext (sessão global)
├── pages/           # Home, Detalhe, Login, MinhaConta, NaoEncontrado, SobreProjeto
├── utils/           # formatadores (preço em R$)
├── App.jsx          # Rotas
├── main.jsx         # Bootstrap + Providers
└── App.css          # Design system
```

## 🖼️ Prints

Coloque as capturas em `docs/prints/`:

- `01-home.png` — Catálogo
- `02-detalhe.png` — Página de detalhe
- `03-login.png` — Tela de login
- `04-minha-conta.png` — Área protegida
- `05-404.png` — Página 404

## 📌 Observações

Projeto acadêmico **individual** desenvolvido por **Matheus Florindo de Deus**
para a disciplina Desenvolvimento Front-End II.

A autenticação é **simulada** (apenas didática) — segurança real é
responsabilidade do back-end. A pasta `node_modules` não é versionada
(ver `.gitignore`).
