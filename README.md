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
  - `/carrinho` — Sacola de compras (bônus)
  - `/login` — Tela de login
  - `/minha-conta` — Área protegida
  - `/sobre-o-projeto` — Documentação acadêmica
  - `*` — Página 404 personalizada com sugestões de produtos
- Clique no card abre o detalhe; voltar mantém o estado da vitrine.

### Etapa 4 — Autenticação
- `AuthContext` + `useAuth` para sessão global.
- **Login real DummyJSON** via `POST /auth/login` com `accessToken` (bônus).
- Fallback offline `aluno` / `1234` para avaliação sem internet.
- Persistência no `localStorage` (sobrevive ao reload).
- Componente `RotaPrivada` que redireciona deslogados para `/login`.
- Cabeçalho alterna entre **Entrar** e **Sair** conforme a sessão, com avatar real do usuário DummyJSON.

### 🎁 Bônus implementados
- **Login real DummyJSON** — autentica contra `https://dummyjson.com/auth/login`, guarda o token e exibe nome + avatar reais em `/minha-conta`.
- **Carrinho de compras** — `CartContext` paralelo ao `AuthContext`, ícone no cabeçalho com badge, página `/carrinho` com stepper de quantidade, frete grátis acima de R$ 299 e checkout simulado. Persiste em `localStorage`.
- **Deploy online** — aplicação publicada na Lovable.

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

Dois modos disponíveis na mesma tela `/login`:

| Modo | Usuário | Senha | Origem |
|------|---------|-------|--------|
| Offline (fallback) | `aluno` | `1234` | Simulado, não requer internet |
| Real DummyJSON | `emilys` | `emilyspass` | API pública, retorna token + perfil |

Fluxo: tente acessar `/minha-conta` → é redirecionado para `/login` → entre com
qualquer um dos dois → o cabeçalho passa a mostrar **Sair** + nome (e avatar, se DummyJSON).

## 🗂️ Estrutura

```
src/
├── components/      # UI reutilizável (Cabecalho, Vitrine, ProdutoCard,
│                    # SkeletonProduto, MensagemErro, EstadoVazio,
│                    # SecaoTitulo, RotaPrivada, AcaoAuth, ...)
├── contexts/        # AuthContext (sessão global)
├── hooks/           # useProdutos, useProdutoDetalhe, useCategorias
├── pages/           # Home, Detalhe, Login, MinhaConta, NaoEncontrado, SobreProjeto
├── services/        # api.js — camada de acesso à DummyJSON
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
- `06-carrinho.png` — Carrinho com 2–3 itens tech e resumo do pedido.
- `07-login-real.png` — Minha conta exibindo dados reais do DummyJSON (nome + avatar).

## ✅ Checklist da entrega (Semanas 12–15)

- [x] **Componentização** — componentes reutilizáveis com `props`, `children`,
      composição, renderização condicional e listas com `.map()`.
- [x] **Estado, Hooks e API** — `useState`, `useEffect`, hooks customizados
      (`useProdutos`, `useProdutoDetalhe`, `useCategorias`) consumindo a
      DummyJSON com loading, erro e estado vazio tratados.
- [x] **Navegação SPA** — React Router com `/`, `/produto/:id`, `/login`,
      `/minha-conta`, `/sobre-o-projeto` e `*` (404 personalizada).
- [x] **Autenticação** — `Context API` + `localStorage`, login simulado
      (`aluno` / `1234`), rota protegida `/minha-conta`, redirecionamento para
      `/login` e cabeçalho alternando **Entrar / Sair**.
- [x] **README** completo, `.gitignore` ignorando `node_modules` e código
      limpo (sem `console.log`, sem imports não usados).

## 📌 Observações

Projeto acadêmico **individual** desenvolvido por **Matheus Florindo de Deus**
para a disciplina Desenvolvimento Front-End II.

A autenticação é **simulada** (apenas didática) — segurança real é
responsabilidade do back-end. A pasta `node_modules` não é versionada
(ver `.gitignore`).
