# Plano — Etapa 4 (Semana 15): Autenticação + polimento premium

Vou ENCAIXAR a camada de autenticação no projeto atual seguindo exatamente o fluxo da aula (AuthContext + localStorage, Login simulado `aluno/1234`, RotaPrivada, logout no cabeçalho) e dar um polimento visual leve nos pontos que ainda destoam — **sem refazer o que já está bom** e sem mudar a proposta da loja.

## O que NÃO vou mexer
- Hero da Home (orbe, chips, float-cards) — está aprovado.
- Vitrine, ProdutoCard, Detalhe (galeria/breadcrumbs), 404 com sugestões tech, página Sobre o Projeto.
- API DummyJSON, busca, filtro, ordenação, loading, erro, estado vazio.
- Paleta atual (azul-marinho `#0A2342`, teal `#14B8A6`, dourado `#C8A24A`) — já está dentro da paleta pedida.
- Roteamento existente (`/`, `/produto/:id`, `/sobre-o-projeto`, `*`).

## 1. Camada de autenticação (núcleo da entrega)

**Novos arquivos:**
- `src/contexts/AuthContext.jsx` — `createContext` + `AuthProvider` + `useAuth`. Estado `logado` inicializado por função lendo `localStorage.getItem("logado")`. Funções `entrar(nome)` e `sair()`. Também guarda `usuario` (nome digitado) em `localStorage` para a saudação na Minha Conta.
- `src/components/RotaPrivada.jsx` — recebe `children`, lê `useAuth`, retorna `children` ou `<Navigate to="/login" replace />`.
- `src/pages/Login.jsx` — card centralizado, form controlado (`usuario`, `senha`), `onSubmit` com `e.preventDefault()`, valida `aluno`/`1234`, chama `entrar()` e `navigate("/minha-conta")`. Mensagem de erro para credenciais inválidas. Caixinha discreta "Use `aluno` / `1234`". Botão voltar para `/`.
- `src/pages/MinhaConta.jsx` — saudação ("Olá, aluno 👋"), card de sessão ativa, 3 cards mock (Pedidos, Favoritos, Dados da conta), botão Sair.

**Arquivos editados:**
- `src/main.jsx` — envolver `<App />` com `<AuthProvider>` dentro do `<BrowserRouter>`.
- `src/App.jsx` — adicionar rotas `/login` (Login) e `/minha-conta` (`<RotaPrivada><MinhaConta/></RotaPrivada>`).
- `src/components/Cabecalho.jsx` + `MenuTopo.jsx` — substituir o item "Projeto" por "Minha conta" (continua existindo via rodapé/404), e adicionar um botão dedicado **Entrar / Sair** à direita do menu, alimentado por `useAuth`. Quando logado, mostra "Olá, aluno" + botão Sair.

## 2. Polimento premium (escopo mínimo, sem quebrar nada)

- `src/utils/formatadores.js` — função `formatarPreco(valor)` (R$ 1.499,90). Aplicar em `ProdutoCard` e `Detalhe` (já formatam inline; troca por util sem mudar visual).
- Pequenos ajustes de CSS no `App.css` apenas para as telas novas (`.auth-card`, `.conta-grid`, `.btn-auth`) seguindo tokens existentes (sem cores hardcoded fora do padrão).
- Garantir foco visível nos inputs de login e contraste do botão primário.

## 3. README.md
Reescrever `README.md` na raiz com: nome, descrição, funcionalidades (4 camadas), tecnologias, como rodar (`npm install` / `npm run dev`), login de teste `aluno` / `1234`, rotas, lista de prints (placeholders) e nota de projeto acadêmico individual — TADS / IFES Alegre.

## 4. Verificação final
- Console limpo (sem erros).
- Fluxo: `/minha-conta` deslogado → redireciona `/login` → login `aluno/1234` → entra em `/minha-conta` → cabeçalho mostra "Sair" → logout volta para `/`.
- Persistência: recarregar mantém sessão (localStorage).
- Responsivo: login e minha-conta em mobile.
- Capturar print da `/login` e `/minha-conta` ao final (apenas se você pedir — sem auto-gerar PDF novo).

## Detalhes técnicos
- Sem libs novas. Só `react`, `react-router-dom`, `react-dom`.
- Sem backend, sem Lovable Cloud — login é **simulado** (requisito da aula).
- `localStorage` keys: `logado` ("true") e `usuarioNome` (string).
- `RotaPrivada` usa `<Navigate replace>` para não poluir o histórico.
- Nenhum `console.log` deixado no código.

## Fora de escopo (não faço a não ser que peça)
- Carrinho, contador no header, deploy, login real DummyJSON com token, novo PDF de entrega.

Posso seguir com a implementação?