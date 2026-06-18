# Plano de reajustes

Quatro frentes, dentro do escopo da Etapa 2 (sem rotas, sem login, sem carrinho).

## 1. Voltar a cara tech da loja (mais categorias)

A DummyJSON tem 4 categorias tech reais — vamos puxar todas as 4, não só smartphones:

- `smartphones` (celulares)
- `laptops` (computadores / notebooks)
- `tablets` (iPad e similares)
- `mobile-accessories` (acessórios — cabos, mouses Bluetooth, etc.)

`Vitrine.jsx` continua usando `Promise.all` nas 4 categorias, mas em vez de cortar em 12 produtos vai exibir **até 20**, distribuídos para garantir variedade (pegar até 5 de cada categoria, depois preencher). Assim o catálogo volta a ter notebook, tablet, acessório e celular juntos — visualmente igual à loja original da Etapa 1.

Observação honesta: a DummyJSON **não tem** categoria de "teclado mecânico", "headset gamer" ou "mouse gamer" como entidades separadas — só `mobile-accessories`. Esses tipos vão aparecer dentro dessa categoria quando existirem. Não dá para inventar categorias que a API não tem sem sair do escopo da Etapa 2 (que exige fetch real da API).

## 2. Restaurar a identidade da logo original

A logo gerada por IA será removida. Volta a **`LogoNTS` SVG inline** que era a identidade original da Etapa 1 (descrita no README): hexágono vetorial com gradientes lineares, circuitos decorativos, azul-marinho + teal + dourado champagne. Vantagens:

- É a identidade original do projeto (preserva memória visual).
- SVG inline = nítido em qualquer tamanho, sem fundo branco, sem CDN.
- Já estava previsto na arquitetura do projeto.

O `Cabecalho.jsx` passa a importar `LogoNTS` (novo componente em `src/components/LogoNTS.jsx`) no lugar do `<img src={logoNts.url}>`. O `.asset.json` da logo PNG fica órfão e pode ser removido depois.

## 3. Esconder as avaliações ruins

As notas da DummyJSON são baixas (2.x–3.x) e atrapalham. Em `ProdutoCard.jsx`:

- **Remover** o bloco `card-avaliacao` (estrela + nota).
- **Manter** apenas a regra condicional `produto.rating >= 4.5 → Selo "Produto destaque"` (raro, não polui). O selo "Disponível" (stock > 0) continua.

Mantém o conceito de renderização condicional exigido pela Etapa 2, sem expor números feios.

## 4. Footer funcional + GitHub real

### 4a. Links institucionais que existem

Hoje `#sobre`, `#contato`, `#politicas`, `#faq` são âncoras mortas. Criar 3 seções novas no fim da página (antes do rodapé), simples e leves, dentro do `App.jsx`:

- **`<SobreContato />`** — bloco único com duas colunas:
  - **Sobre o Núcleo** — 2 parágrafos curtos sobre a loja (acadêmico TADS/IFES).
  - **Contato** — e-mail, instituição, link "Fale com a gente" (mailto).
- **`<FAQ />`** — 4–6 perguntas em `<details>`/`<summary>` nativos (sem dependência), respondendo: o que é a loja, prazo de entrega (didático), trocas, frete, suporte, garantia.
- **`<Politicas />`** — bloco com 3 abas-acordeão também em `<details>`: Política de Privacidade, Política de Trocas, Termos de Uso — texto curto, claramente marcado como **projeto acadêmico**.

Âncoras: `#sobre`, `#contato`, `#faq`, `#politicas` passam a rolar para as seções reais. Visual segue a paleta Clean Tech já existente (cards brancos, hairlines, azul-marinho).

### 4b. Redes sociais com links reais

Em `Rodape.jsx`:

- **GitHub** → `https://github.com/matheusflorindo32/nucleo-storefront` (do README, autor: Matheus Florindo).
- **LinkedIn** → `https://linkedin.com/in/matheusflorindo`.
- **Instagram** → manter como `#` ou remover se você não tiver perfil (pergunto abaixo).

Todos abrem em nova aba (`target="_blank" rel="noopener noreferrer"`).

E-mail do rodapé `contato@nucleotads.store` vira `mailto:matheusdideusf@gmail.com` (do README) — ou outro que você prefira.

---

## Perguntas rápidas antes de eu construir

1. **Instagram do rodapé**: você tem um perfil pra linkar, ou removo o ícone?
2. **E-mail de contato**: uso `matheusdideusf@gmail.com` (do README) ou outro?
3. **Logo**: confirmo que devo restaurar a **SVG hexagonal original da Etapa 1** (descrita no README) — não a PNG gerada por IA, certo?

## Detalhes técnicos

- Arquivos afetados: `src/components/Vitrine.jsx`, `src/components/ProdutoCard.jsx`, `src/components/Cabecalho.jsx`, `src/components/Rodape.jsx`, `src/App.jsx`, `src/App.css`.
- Arquivos novos: `src/components/LogoNTS.jsx`, `src/components/SobreContato.jsx`, `src/components/FAQ.jsx`, `src/components/Politicas.jsx`.
- Sem novas dependências, sem Router, sem TS, sem Tailwind. CSS adicionado apenas em `App.css`.
- Etapa 2 preservada: `useState`, `useEffect`, `fetch`, carregando, erro, busca, filtro, condicional.
