## Resumo

Ambos os bônus **continuam dentro do escopo** da rubrica e da identidade da Núcleo TADS Store. Eles apenas *somam* à arquitetura existente — não substituem nem quebram nada do que já vale os 18 pontos:

- **Login real DummyJSON** apenas troca o "como" da Etapa 4 (autenticação). O `AuthContext`, `RotaPrivada`, cabeçalho Entrar/Sair e a rota `/minha-conta` permanecem idênticos — muda só a função `entrar()`, que passa a chamar `POST https://dummyjson.com/auth/login` e a guardar `accessToken` + dados do usuário. O login `aluno`/`1234` continua funcionando como **fallback offline** para o professor avaliar sem internet.
- **Carrinho** é uma feature de loja, totalmente coerente com "Núcleo TADS Store". Não toca em rotas obrigatórias, não muda a vitrine nem o detalhe — adiciona um `CartContext` paralelo ao `AuthContext`, um ícone no cabeçalho com badge de quantidade, uma página `/carrinho` e um botão "Adicionar ao carrinho" no `Detalhe` e no `ProdutoCard`.

Tudo continua client-side, sem backend novo, sem libs pesadas, mantendo React + Vite + Router + Context + DummyJSON.

---

## Etapa A — Login real DummyJSON (bônus 1)

### Arquivos alterados/criados

1. **`src/services/api.js`** — adicionar:
   ```js
   export async function loginDummy(username, password) {
     const r = await fetch(`${BASE_URL}/auth/login`, {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({ username, password, expiresInMins: 60 }),
     });
     if (!r.ok) throw new Error("Credenciais inválidas");
     return r.json(); // { accessToken, refreshToken, id, username, firstName, image, ... }
   }
   ```

2. **`src/contexts/AuthContext.jsx`** — `entrar()` vira `async`:
   - Caso especial: `aluno` + `1234` → mantém fluxo simulado atual (fallback didático).
   - Caso contrário: chama `loginDummy(usuario, senha)`, guarda `accessToken`, `refreshToken`, `firstName`, `image` no `localStorage` e no estado.
   - Adicionar `token` e `perfil` (avatar/nome) ao contexto, sem remover nada.

3. **`src/pages/Login.jsx`** — pequenos ajustes:
   - Estado `carregando` + `erro` exibindo "Credenciais inválidas" quando a API responder 400.
   - Bloco de ajuda visível: *"Use `aluno` / `1234` (offline) ou qualquer conta DummyJSON, ex.: `emilys` / `emilyspass`."*

4. **`src/components/AcaoAuth.jsx`** — quando houver `perfil.image`, mostra avatar redondinho ao lado do nome (mantém fallback de texto).

5. **`src/pages/MinhaConta.jsx`** — exibir `firstName`, `lastName`, `email` e o `accessToken` mascarado (`eyJ...•••`) quando vier da DummyJSON, para evidenciar que é login real.

### Por que não sai do escopo
- A rubrica diz "login pode ser simulado" — implementar o real **só soma** (é literalmente o bônus listado no enunciado).
- `aluno`/`1234` continua válido → professor consegue avaliar sem depender da API externa estar no ar.

---

## Etapa B — Carrinho de compras (bônus 2)

### Arquivos criados

1. **`src/contexts/CartContext.jsx`** — novo Context com:
   - Estado `itens: [{ id, title, price, thumbnail, qtd }]`, persistido em `localStorage` (`nts-carrinho`).
   - Ações: `adicionar(produto)`, `remover(id)`, `mudarQtd(id, qtd)`, `limpar()`.
   - Selectors: `quantidadeTotal`, `subtotal` (em reais, reaproveita `formatarPreco`).

2. **`src/pages/Carrinho.jsx`** — nova página:
   - Lista de itens (thumb, título, categoria, preço unitário, stepper de quantidade, botão remover).
   - Resumo lateral com subtotal, frete grátis acima de R$ 299, total, botão "Finalizar compra" (apenas mostra modal/toast "Pedido simulado — projeto acadêmico").
   - Estado vazio reusando `EstadoVazio` ("Seu carrinho está vazio").

3. **`src/components/CarrinhoIcone.jsx`** — ícone SVG de sacola no cabeçalho com badge de quantidade (estilo coerente com `dif-*`, marinho + aqua).

### Arquivos alterados

4. **`src/main.jsx`** — envolver `<App />` com `<CartProvider>` (logo dentro de `AuthProvider`).
5. **`src/App.jsx`** — rota `/carrinho` (pública; checkout não precisa de login para o escopo acadêmico).
6. **`src/components/Cabecalho.jsx`** — adicionar `<CarrinhoIcone />` ao lado de `<AcaoAuth />`.
7. **`src/pages/Detalhe.jsx`** — botão "Adicionar ao carrinho" ao lado de "Comprar agora", chamando `adicionar(produto)` + toast/feedback inline.
8. **`src/components/ProdutoCard.jsx`** — botão secundário "+ Carrinho" no footer do card (sem competir visualmente com "Ver produto").
9. **`src/App.css`** — tokens novos para `.carrinho-*` reusando paleta marinho/aqua/azul-tech já definida.

### Por que não sai do escopo
- Carrinho é literalmente um dos bônus citados no enunciado.
- Mantém identidade: "Núcleo TADS Store" *é* loja — carrinho reforça o tema.
- Zero impacto nas 4 etapas obrigatórias (componentização, hooks/API, rotas/detalhe, auth).

---

## Atualizações de README & prints

- Adicionar seção "Funcionalidades extras (bônus)" no `README.md`:
  - Login real DummyJSON (com fallback `aluno`/`1234`).
  - Carrinho persistente em `localStorage`.
- Atualizar credenciais de teste: documentar `aluno`/`1234` **e** `emilys`/`emilyspass` (DummyJSON).
- Gerar 2 novos prints em `docs/prints/`:
  - `06-carrinho.png` — carrinho com 2–3 itens tech.
  - `07-login-real.png` — minha-conta exibindo dados reais (firstName + avatar).

---

## Validação

- `npm run dev` sem erros no terminal e console.
- Fluxos a testar via Playwright:
  1. Login `aluno`/`1234` → `/minha-conta` (offline).
  2. Login `emilys`/`emilyspass` → `/minha-conta` mostra nome/avatar reais.
  3. Adicionar 2 produtos ao carrinho → ícone do cabeçalho mostra "2" → `/carrinho` lista correto → reload mantém estado.
  4. Logout → carrinho permanece (decisão de UX: carrinho é independente da sessão).

---

## Fora do escopo (não vou fazer)

- Checkout real / Stripe / pagamento.
- Refresh token automático do DummyJSON.
- Wishlist, cupons, endereço de entrega.
- Backend Lovable Cloud (projeto é client-side por especificação da disciplina).
