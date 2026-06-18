# Plano — Etapa 2 (Semana 13) · Núcleo TADS Store

Objetivo único: trocar o array fixo de produtos por dados da **DummyJSON**, adicionando estados de carregamento/erro, busca por nome e filtro por categoria. Tudo o que já existe da Etapa 1 (identidade visual clara, componentes, CSS próprio) é preservado.

Nada fora do escopo: sem Router, sem detalhe, sem 404, sem login, sem carrinho, sem Spline, sem Framer Motion, sem TS, sem Tailwind.

---

## 1. `src/components/Vitrine.jsx` (refatorar)

Remover o array fixo `produtos` e o cálculo de `categoriasUnicas`. Em vez disso:

- `import { useEffect, useState } from "react";`
- Estados:
  - `produtos` (array, inicial `[]`)
  - `carregando` (boolean, inicial `true`)
  - `erro` (string|null, inicial `null`)
  - `busca` (string, inicial `""`)
  - `categoria` (string, inicial `"Todas"`)
- `useEffect(() => { ... }, [])` faz `fetch("https://dummyjson.com/products?limit=12")`, usa `try/catch/finally`, salva `data.products` em `produtos`, captura erro com mensagem amigável, e seta `carregando = false` no `finally`.
- Derivar `categorias = ["Todas", ...new Set(produtos.map(p => p.category))]`.
- Derivar `produtosFiltrados` aplicando:
  - `p.title.toLowerCase().includes(busca.toLowerCase())`
  - `categoria === "Todas" || p.category === categoria`
- Render:
  - Header da vitrine (mantido).
  - Barra de controles (novo bloco `vitrine-controles`) com:
    - `<input type="search">` controlado por `busca` (placeholder "Buscar produtos...").
    - `<select>` controlado por `categoria`, listando `categorias`.
  - Estados:
    - Se `carregando` → `<p className="vitrine-estado">Carregando produtos...</p>`
    - Senão se `erro` → `<p className="vitrine-estado vitrine-erro">Não foi possível carregar os produtos. Tente novamente mais tarde.</p>`
    - Senão se `produtosFiltrados.length === 0` → `<p className="vitrine-estado">Nenhum produto encontrado.</p>`
    - Senão → grid com `produtosFiltrados.map(p => <ProdutoCard key={p.id} produto={p} />)`.
- O componente antigo `FiltroCategorias` deixa de ser usado pela Vitrine (o filtro nativo `<select>` é o pedido da etapa). Manter o arquivo no projeto sem importá-lo, para não quebrar nada.

## 2. `src/components/ProdutoCard.jsx` (adaptar campos)

Trocar referências para os campos da DummyJSON:

- Imagem: `produto.thumbnail`, `alt={produto.title}`
- Título: `produto.title`
- Categoria: `produto.category`
- Preço: converter USD da API para BRL apenas formatando como BRL (didático, conforme pedido):
  `produto.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })`
- Renderização condicional (substitui `freteGratis`):
  - Se `produto.rating >= 4.5` → `<Selo texto="Produto destaque" cor="#16A34A" />`
  - Se `produto.stock > 0` → `<Selo texto="Disponível" cor="#14B8A6" />`
- Selo principal de destaque continua existindo, alimentado por `produto.category` (ou rótulo fixo "Em catálogo") para manter o visual premium.
- Remover usos de `produto.nome`, `produto.preco`, `produto.imagem`, `produto.parcelas`, `produto.avaliacao`, `produto.descricao` como obrigatórios (a DummyJSON tem `description` e `rating` — opcional exibir `description` e a estrela com `rating`).

## 3. `src/App.css` (acréscimos mínimos)

Adicionar estilos para:

- `.vitrine-controles` — flex/grid responsivo (input + select lado a lado em desktop, coluna em mobile), fundo branco, borda sutil, sombra suave, alinhado ao restante (paleta clara, azul-marinho `#0A2342`, dourado discreto).
- `.vitrine-busca` (input) e `.vitrine-select` — bordas arredondadas, foco azul-marinho.
- `.vitrine-estado` — texto centralizado, cor sóbria; `.vitrine-erro` em tom de alerta discreto (sem quebrar a paleta clara).

Nenhuma mudança nas cores existentes nem nos componentes Cabecalho/Diferenciais/Rodapé.

## 4. `src/App.jsx`

Já está simples. Apenas garantir que continua como `<Layout><Diferenciais /><Vitrine /></Layout>`. Sem lógica de fetch no App.

## 5. `README.md`

Adicionar uma seção **Etapa 2 — Semana 13** logo após a seção da Etapa 1, listando:

- Integração com API DummyJSON (`/products?limit=12`)
- `useState` e `useEffect`
- Estado de carregamento (`Carregando produtos...`)
- Estado de erro (mensagem amigável)
- Busca por nome em tempo real
- Filtro por categoria via `<select>`
- `ProdutoCard` adaptado para `title`, `price`, `thumbnail`, `category`
- Renderização condicional baseada em `rating`/`stock`

Manter todo o conteúdo da Etapa 1 já existente.

---

## Inspiração de design (21st.dev)

Padrão "search + select" acima de grid de produtos, paleta clara com hairlines, visto em referências de catálogo/commerce do 21st.dev (kokonutui, serafimcloud). Aplicado aos tokens claros já existentes do projeto — sem mudar a identidade Clean Tech Premium.

## Checklist de aceitação

- [ ] `npm run dev` roda sem erros.
- [ ] Produtos carregam da DummyJSON.
- [ ] "Carregando produtos..." aparece antes dos dados.
- [ ] Mensagem amigável em caso de erro.
- [ ] Card mostra `title`, `price` (BRL), `thumbnail`, `category`.
- [ ] Busca filtra em tempo real por título.
- [ ] Select filtra por categoria.
- [ ] "Nenhum produto encontrado" quando aplicável.
- [ ] Sem aviso de `key` no console.
- [ ] Identidade visual e estrutura de componentes da Etapa 1 preservadas.
