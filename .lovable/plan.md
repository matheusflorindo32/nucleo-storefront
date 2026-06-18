# Plano — Ajustes finais Etapa 2

Quatro frentes, todas dentro do escopo da Etapa 2 (sem Spline, sem Router, sem libs novas, sem TS, sem Tailwind).

## 1. Reescrever copy do hero (alinhar com o que a vitrine entrega)

Hoje o hero promete "estuda, desenvolve e cria" + "Suporte por devs", mas a API entrega smartphones, notebooks, tablets e áudio. A copy não bate. Vou reescrever em `Cabecalho.jsx`:

- **Badge**: `Vitrine de Produtos` → `Tecnologia em destaque`
- **Título**: `Equipamentos inteligentes para quem estuda, desenvolve e cria` →
  `Tecnologia premium para o seu **núcleo de produtividade**`
- **Subtítulo**: substituir "estudantes, desenvolvedores e pesquisadores" por algo coerente com o catálogo real:
  > `Smartphones, notebooks, tablets e acessórios selecionados para quem vive conectado a estudo, trabalho e criação.`
- **Chips** (3 atuais): trocar por algo que reflete a vitrine real
  - `Smartphones de ponta`
  - `Notebooks para produtividade`
  - `Áudio & acessórios`
- Frase de apoio "Tecnologia, ciência e inovação em um só núcleo" — **mantida** (é a tagline da marca).

## 2. Hero visual — efeito tipo Spline em CSS/SVG puro

Inspirado no `serafim/splite` do 21st.dev (orbe luminoso pulsante, brilho radial, partículas orbitando) — **recriado 100% em CSS** + SVG inline, sem dependências.

Em `Cabecalho.jsx` + `App.css`, evoluir o bloco `.hero-visual` atual (que já tem `ring`, `halo`, `hex`, `dots`):

- **Núcleo central**: substituir o quadradinho `product-mock` por um **orbe SVG** com gradiente radial azul-marinho → teal, com brilho interno e linhas de circuito vetoriais cruzando.
- **Anéis orbitais**: 3 anéis elípticos animados (`@keyframes` de rotação lenta, 20s/30s/40s).
- **Partículas**: 6–8 pontos pequenos orbitando em paths SVG (animação CSS `offset-path` ou `transform: rotate` nos containers).
- **Glow**: filtro `drop-shadow` em camadas, paleta teal/azul/dourado.
- **Performance**: tudo `will-change: transform`, animações em GPU, sem JS.

Resultado: visual "núcleo de energia tech" premium, similar ao Spline em peso visual, mas zero runtime 3D. Adaptado à paleta Clean Tech (azul-marinho `#0A2342`, teal `#14B8A6`, dourado `#C8A24A`, fundo claro).

## 3. Categorias em português + FAQ sem "DummyJSON"

### 3a. `Vitrine.jsx` — exibir nomes em PT no `<select>` e nos cards

Criar um mapa simples (sem trocar a chave real usada no filtro):

```js
const rotulos = {
  "smartphones": "Smartphones",
  "laptops": "Notebooks",
  "tablets": "Tablets",
  "mobile-accessories": "Áudio & Acessórios",
};
```

- `<select>` mostra `rotulos[cat]` mas o `value` continua sendo a chave da API (busca/filtro inalterados).
- `ProdutoCard.jsx` exibe `rotulos[produto.category] || produto.category` no selo e na linha de categoria.

### 3b. `FAQ.jsx` — reescrever perguntas sem mencionar "DummyJSON"

Substituir as perguntas que vazam o nome da API. Nova lista (6 perguntas):

1. **O que é a Núcleo TADS Store?** — Vitrine digital de tecnologia criada como projeto integrador do curso TADS do IFES.
2. **Quais produtos vocês oferecem?** — Smartphones, notebooks, tablets e acessórios selecionados para estudo, trabalho e criação.
3. **Como funciona a busca e o filtro?** — Busca filtra pelo nome em tempo real; filtro mostra apenas itens da categoria escolhida.
4. **Os preços estão em Real?** — Sim, todos os valores são apresentados em Real brasileiro (BRL).
5. **Como acompanhar o projeto?** — O código-fonte está disponível no GitHub (link no rodapé).
6. **Posso usar este projeto como referência?** — Sim, sob licença MIT. Basta dar os créditos ao autor.

Em `Politicas.jsx`: trocar a frase "Imagens e dados de produtos pertencem à API pública DummyJSON" por "Imagens e dados de produtos são de demonstração para fins acadêmicos".

## 4. Atualizar `README.md` para refletir o projeto atual

O README hoje descreve a Etapa 1 (6 produtos fixos). Atualizar:

- **Visão geral**: mencionar que o projeto evoluiu para Etapa 2 com integração de API.
- **Stack**: adicionar `useState`, `useEffect`, `fetch` como conceitos novos.
- **Arquitetura**: atualizar diagrama de componentes para incluir `LogoNTS`, `Diferenciais`, `MenuTopo`, `FiltroCategorias`, `SobreContato`, `FAQ`, `Politicas`.
- **Estrutura de componentes**: atualizar a descrição da `Vitrine` (estado + fetch + filtros) e do `ProdutoCard` (campos da API).
- **API de Produtos**: substituir a tabela dos 6 produtos fixos por uma seção descrevendo o consumo da DummyJSON (esse README é para o professor avaliar — aí sim é correto citar a API):
  - Endpoint usado: `https://dummyjson.com/products/category/{categoria}`
  - Categorias consumidas: smartphones, laptops, tablets, mobile-accessories
  - Estratégia: `Promise.all` paralelo, até 5 por categoria, máx. 20 produtos
- **Roadmap**: marcar Fase 2 como ✅ Concluída.
- **Checklist da Etapa 2**: adicionar uma seção nova com todos os itens cumpridos (useState, useEffect, carregando, erro, busca, filtro, condicional baseada em rating/stock).
- **Preview**: atualizar descrição para mencionar as seções Sobre/Contato, FAQ e Políticas.

Manter intactos: licença MIT, autor, links institucionais, contexto acadêmico.

---

## Arquivos afetados

- `src/components/Cabecalho.jsx` (copy + hero visual)
- `src/components/Vitrine.jsx` (rótulos PT no select)
- `src/components/ProdutoCard.jsx` (rótulos PT)
- `src/components/FAQ.jsx` (reescrita)
- `src/components/Politicas.jsx` (frase ajustada)
- `src/App.css` (animações do orbe + ajustes do hero)
- `README.md` (atualização completa Etapa 2)

## Garantias

- Zero dependência nova (sem Spline, sem `@splinetool/*`, sem framer-motion, sem Three).
- `useState`/`useEffect`/`fetch` da Etapa 2 permanecem intactos.
- Busca, filtro, carregando, erro, renderização condicional — tudo preservado.
- Paleta Clean Tech Premium mantida (fundo claro, azul-marinho, teal, dourado).
- Identidade `LogoNTS` SVG inline mantida.

## Inspiração

Hero orbe: `serafim/splite` (21st.dev) — recriado em CSS/SVG puro. Padrão "central glowing orb + orbital rings" também presente em magicui e motion-primitives, traduzido para a paleta Clean Tech do projeto.
