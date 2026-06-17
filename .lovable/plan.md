## Núcleo TADS Store — Semana 12 / Etapa 1

### Observação importante sobre o template atual
O projeto Lovable atual está configurado com **TanStack Start + TypeScript + Tailwind**, o que conflita com os requisitos (React + Vite + JavaScript puro, `.jsx`, CSS próprio, sem Tailwind, sem TS, sem roteador). Para cumprir a especificação fielmente, irei **substituir a estrutura atual** por um projeto React + Vite + JavaScript limpo dentro deste mesmo workspace.

### Ações de limpeza
- Remover: `src/routes/`, `src/router.tsx`, `src/server.ts`, `src/start.ts`, `src/routeTree.gen.ts`, `src/styles.css`, `src/components/ui/`, `src/hooks/`, `src/lib/`, `tsconfig.json`, `components.json`.
- Substituir `package.json` por um mínimo: `react`, `react-dom`, `vite`, `@vitejs/plugin-react`.
- Substituir `vite.config.ts` por `vite.config.js` simples com plugin React.
- Criar `index.html` na raiz (padrão Vite).

### Estrutura final
```text
nucleo-tads-store/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    └── components/
        ├── Layout.jsx
        ├── Cabecalho.jsx
        ├── Rodape.jsx
        ├── Vitrine.jsx
        ├── ProdutoCard.jsx
        ├── Botao.jsx
        └── Selo.jsx
```

### Componentes (resumo de responsabilidades)
- **Layout.jsx** — recebe `children`, renderiza `<Cabecalho /> <main>{children}</main> <Rodape />`.
- **Cabecalho.jsx** — prop `titulo`; logo SVG inline (hexágono azul-marinho com monograma "NTS", pequenos pontos/linhas de circuito em verde/dourado, inspirada na imagem enviada), nome da loja, frase principal e hero de apresentação com subfrase.
- **Rodape.jsx** — "Desenvolvido por Matheus Florindo de Deus — 2026".
- **Vitrine.jsx** — array fixo `produtos` (6 itens conforme spec, cada um com `imagem` via URL estática do Unsplash), `.map()` com `key={produto.id}` passando `produto` ao `ProdutoCard`.
- **ProdutoCard.jsx** — recebe `produto`; mostra imagem (com moldura circular e glow), nome, categoria, descrição, preço formatado em BRL via `toLocaleString`, `<Selo />` de destaque, `<Selo />` "Frete grátis" condicional (`produto.freteGratis && ...`), e `<Botao />`.
- **Botao.jsx** — props `texto` (default "Ver produto") e `onClick` opcional; genérico.
- **Selo.jsx** — props `texto` e `cor`; genérico.

### App.jsx
Apenas monta: `<Layout><Vitrine /></Layout>`.

### Estilo (App.css)
CSS próprio implementando a paleta exata:
- Fundo `#F8FAFC`, seções secundárias `#EEF6F8`, cards `#FFFFFF`.
- Tipografia system-ui, títulos azul-marinho `#0A2342`.
- Cards: `border-radius: 16px`, sombra suave, leve translate no hover (sensação 3D só com CSS).
- Moldura circular atrás da imagem com gradiente azul→verde-água e `box-shadow` em `rgba(20,184,166,0.18)` (glow).
- Selos arredondados pill, cor configurável via prop (passada como `style={{ background: cor }}`).
- Botão azul tecnológico `#1E5AA8` com hover mais escuro e leve elevação.
- Grid responsivo da vitrine: `repeat(auto-fill, minmax(260px, 1fr))`.
- Cabeçalho com faixa branca + linha sutil dourada `#C8A24A`.

### Restrições respeitadas
Sem `useState`, sem `useEffect`, sem API/DummyJSON, sem React Router, sem TypeScript, sem Tailwind, sem Framer Motion, sem Spline, sem login/carrinho/detalhe. Tudo componentizado fora do `App.jsx`.

### README.md
Conteúdo conforme especificado no pedido.

### Verificação final
Após implementar, rodar o build automático para garantir que o Vite compila e a página exibe cabeçalho + 6 cards + rodapé.
