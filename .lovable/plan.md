# Plano — Núcleo TADS Store v2 (Premium, sem quebrar a base)

Diagnóstico rápido do que já está OK e do que falta evoluir, e em seguida o conjunto enxuto de mudanças que entrega o nível "premium acadêmico" sem ampliar o escopo.

## 1. Status atual (auditoria)

Já atendido pela rubrica das Semanas 12–15:
- Componentização (Layout, Cabecalho, Rodape, Vitrine, ProdutoCard, Botao, Selo, FAQ, Politicas etc.)
- Hooks/estado/API: `Vitrine.jsx` consome DummyJSON, tem loading skeleton, erro, busca, filtro e ordenação refletidos na URL.
- Rotas: `/`, `/produto/:id`, `/login`, `/minha-conta` (protegida), `/sobre-o-projeto`, 404.
- Autenticação simulada: `AuthContext` + `localStorage` + `RotaPrivada` + `AcaoAuth` (Entrar/Sair no header).
- Utilitário `formatarPreco` aplicado em card e detalhe.
- README com credenciais e instruções.

Lacunas que ainda dão para evoluir sem inflar o projeto:
1. **Hooks dedicados** (`useProdutos`, `useProdutoDetalhe`, `useCategorias`) — hoje a lógica de fetch mora dentro dos componentes. Extrair melhora a nota de "Hooks" e a explicação ao professor.
2. **Service `api.js`** centralizando os endpoints DummyJSON — hoje as URLs estão espalhadas. Padroniza e remove duplicação.
3. **Componentes de estado** dedicados (`Loading/SkeletonProduto`, `MensagemErro` com botão "Tentar novamente", `EstadoVazio` com "Limpar filtros") — hoje são markup inline na `Vitrine`.
4. **Contador de resultados** visível na vitrine ("X produtos encontrados").
5. **Detalhe premium**: confirmar galeria de miniaturas, selo de desconto, avaliação, estoque, botão "Voltar" e "Adicionar (simulado)" com toast simples; tratar produto inexistente sem quebrar.
6. **Login**: bloco discreto com credenciais de teste e link "Voltar à vitrine" (se ainda não estiverem).
7. **Minha Conta**: adicionar o 4º card "Segurança da sessão" (Context API + localStorage) descrito no enunciado.
8. **Acessibilidade**: revisar `alt`, `aria-label` em botões de ícone, foco visível, contraste dos cinzas em fundo claro.
9. **Estrutura**: criar `src/services/`, `src/hooks/`, `src/styles/` (mantendo `App.css` atual para não quebrar imports) e pasta `docs/prints/` com `.gitkeep`.
10. **README + .gitignore**: garantir bloco de prints, rotas e checklist final.

Fora de escopo (confirmado pelo próprio briefing como "bônus opcional / não quebrar"): carrinho real, favoritos, checkout, backend, libs pesadas, mudança de identidade visual.

## 2. Mudanças propostas

### 2.1 Camada de dados (novo)
- `src/services/api.js` — funções puras:
  - `buscarProdutosTech()` (faz o `Promise.all` das 4 categorias hoje feito na Vitrine)
  - `buscarProdutoPorId(id)`
  - `listarCategoriasTech()` (lista fixa + rótulos PT)
- `src/hooks/useProdutos.js` — encapsula loading/erro/lista para a Vitrine.
- `src/hooks/useProdutoDetalhe.js` — encapsula fetch do detalhe + estado "não encontrado".
- `src/hooks/useCategorias.js` — devolve as categorias com rótulos PT.

`Vitrine.jsx` e `Detalhe.jsx` passam a apenas consumir os hooks; lógica visual fica intacta.

### 2.2 Componentes de estado (novos, pequenos)
- `src/components/SkeletonProduto.jsx` — extrai o card skeleton atual.
- `src/components/MensagemErro.jsx` — recebe `mensagem` e `onTentarNovamente`.
- `src/components/EstadoVazio.jsx` — recebe `titulo`, `descricao`, `acao` (children).
- `src/components/SecaoTitulo.jsx` — padroniza eyebrow + título + subtítulo (usado em Vitrine, Conta, Detalhe).

### 2.3 Vitrine
- Usa `useProdutos` + `useCategorias`.
- Adiciona linha de "Contador de resultados" (`{n} produtos encontrados`).
- Botão "Limpar filtros" aparece quando há busca/categoria/ordenação ativa.
- Substitui blocos inline por `SkeletonProduto`, `MensagemErro`, `EstadoVazio`.

### 2.4 Detalhe (`/produto/:id`)
- Usa `useProdutoDetalhe`.
- Garantir: imagem principal + miniaturas clicáveis, marca, categoria PT, preço formatado, selo de desconto (`discountPercentage`), rating, estoque, descrição, botão "← Voltar para a vitrine", botão "Adicionar ao carrinho (demo)" que mostra um toast simples em estado local ("Adicionado — funcionalidade demonstrativa").
- Estado "Produto não encontrado" reutiliza `EstadoVazio` com link para a vitrine.

### 2.5 Login
- Card centralizado com:
  - Título "Entrar na Núcleo TADS Store"
  - Subtítulo "Acesse sua área protegida do projeto"
  - Inputs com `label` associado, foco visível
  - Mensagem de erro acessível (`role="alert"`)
  - Bloco discreto: "Credenciais de teste — aluno / 1234"
  - Link "← Voltar para a vitrine"
- Mantém validação `aluno / 1234` e redirect para `/minha-conta`.

### 2.6 Minha Conta
- Mantém os 3 cards atuais e adiciona o 4º **"Segurança da sessão"** (badge "Context API + localStorage") para fechar o discurso do enunciado.
- Texto explicativo deixando claro que é demonstração acadêmica.

### 2.7 404
- Já está OK; só padronizar com `SecaoTitulo` e botão "Voltar para a vitrine" usando o `Botao` reutilizável.

### 2.8 Acessibilidade e polish CSS
- Revisar `App.css`: foco visível em `.botao`, `.menu-topo-link`, inputs do login e da vitrine; ajustar cinza de texto para AA em fundo `#F8F9FB`.
- Garantir `alt` descritivo nas imagens de produto (já existe no card; conferir no detalhe e miniaturas).
- `aria-label` nos botões de ação do header e do detalhe.

### 2.9 Estrutura, README e prints
- Criar `docs/prints/.gitkeep` e listar no README os 5 prints esperados (`01-home.png` … `05-404.png`).
- Conferir `.gitignore` (`node_modules`, `dist`, `.env`, `.DS_Store`).
- README: bloco final "Checklist da entrega" espelhando a rubrica (componentização, hooks, API, rotas, auth, rota protegida).

## 3. O que NÃO será feito
- Sem carrinho/favoritos/checkout reais.
- Sem novas libs (sem toast lib, sem framer-motion novo; o "toast" do detalhe é um `<div role="status">` que some após 2s via `setTimeout`).
- Sem mudar paleta, fontes, hero, logo ou identidade visual.
- Sem renomear arquivos existentes (apenas novos arquivos + edições pontuais), para não quebrar imports nem o histórico do GitHub.

## 4. Arquivos afetados

Novos:
```
src/services/api.js
src/hooks/useProdutos.js
src/hooks/useProdutoDetalhe.js
src/hooks/useCategorias.js
src/components/SkeletonProduto.jsx
src/components/MensagemErro.jsx
src/components/EstadoVazio.jsx
src/components/SecaoTitulo.jsx
docs/prints/.gitkeep
```

Editados (mudanças cirúrgicas):
```
src/components/Vitrine.jsx        // usar hooks + novos componentes + contador + limpar filtros
src/pages/Detalhe.jsx             // usar hook + galeria + botão demo + estado não-encontrado
src/pages/Login.jsx               // bloco de credenciais + link voltar + a11y
src/pages/MinhaConta.jsx          // +4º card "Segurança da sessão"
src/pages/NaoEncontrado.jsx       // padroniza com SecaoTitulo/Botao
src/App.css                       // foco visível, contraste, contador, toast demo
README.md                         // checklist + bloco de prints
.gitignore                        // garantir entradas
```

## 5. Validação final
- `npm run dev` sem erros no terminal nem no console.
- Fluxo: Home → buscar/filtrar/ordenar → contador atualiza → limpar filtros → card → Detalhe (com galeria + voltar + adicionar demo) → Login (`aluno/1234`) → `/minha-conta` (com 4 cards) → Sair → header volta para "Entrar".
- `/minha-conta` deslogado redireciona para `/login`.
- Rota inválida cai no 404 estilizado.
- Refresh em qualquer rota mantém o estado de sessão.

Posso seguir com a implementação?