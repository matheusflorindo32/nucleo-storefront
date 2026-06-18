## Diagnóstico do PDF anterior

Você está certo: o print do **Detalhe** veio com o hero "Tecnologia premium para o seu núcleo de produtividade" colado no topo — e esse bloco **não pertence à página de detalhe**. Isso é um bug real do `src/components/Cabecalho.jsx`, que hoje renderiza o `<section className="hero">` dentro do `<header>`. Como o `Layout.jsx` usa o Cabecalho em todas as rotas, o hero da Home vaza para `/produto/:id` e `*`.

Além disso, as imagens ficaram pequenas demais no PDF retrato — perde-se a leitura de cards, preços e selos.

---

## Parte 1 — Corrigir o bug do hero (dentro do escopo)

É uma correção de **apresentação**, não muda rotas, fetch, useState ou useEffect. 100% compatível com a Etapa 3.

- Em `Cabecalho.jsx`: receber prop `mostrarHero` (default `false`) e só renderizar o `<section className="hero">` quando `true`.
- Em `Layout.jsx` (ou em cada página): a Home passa `<Cabecalho mostrarHero />`; Detalhe e 404 não passam.

Resultado: o print do Detalhe fica limpo (só logo + menu + conteúdo da PDP), como o professor espera.

---

## Parte 2 — PDF v2 "Premium Elite" da entrega

Mesma identidade Núcleo TADS Store (navy `#0A2342`, teal `#14B8A6`, verde `#16A34A`, dourado `#C8A24A`, ink `#0F172A`), mas reconstruído para os prints respirarem.

### Estrutura (8–9 páginas)

```
1. CAPA (retrato)
   ├─ Faixa navy com gradiente sutil teal→verde
   ├─ "ENTREGA · SEMANA 14" eyebrow
   ├─ Título grande + subtítulo
   └─ Aluno · IFES · data

2. DADOS DA ENTREGA (retrato)
   ├─ Tabela com Projeto / Etapa / Stack / Repositório / Preview / Aluno
   └─ Chips das tecnologias usadas

3. PRINT 01 — LISTA (PAISAGEM, full-bleed)
   └─ Home recortada em 2 colunas lado a lado (acima e abaixo do scroll),
      ocupando ~95% da página A4 deitada → texto e cards legíveis

4. PRINT 02 — DETALHE (PAISAGEM, full-bleed)
   ├─ Print limpo (sem hero) ocupando a página inteira deitada
   └─ Anotações laterais com setas apontando: useParams, breadcrumb,
      galeria, specs, políticas, reviews

5. ARQUITETURA DE ROTAS (retrato)
   └─ Diagrama ASCII das 3 rotas + fluxo card → /produto/:id

6. O QUE JÁ FUNCIONA (retrato)
   └─ Grid de 10 cards (já existia, mantido)

7. ONDE TRAVEI (retrato)
   └─ 3 dificuldades + trecho de código

8. PEDIDO DE FEEDBACK (retrato)
   └─ 5 cards (rotas, pages/, layout detalhe, loading/erro, useSearchParams)

9. PRÓXIMOS PASSOS (retrato)
   └─ Roadmap mini para Etapa 4
```

### Decisões técnicas do PDF

- ReportLab com **`pageBreakBefore` + tamanho de página por seção** (algumas A4 retrato, outras A4 paisagem) usando `NextPageTemplate`.
- Recapturar os dois prints em viewport **1920×1200** para alta resolução.
- Para o Print 01 (página inteira muito alta), dividir a imagem em duas metades lado a lado — fica enorme e legível.
- Para o Print 02, captura no detalhe **já sem o hero** (depois do fix da Parte 1), em viewport largo, ocupando full-bleed.
- Anotações com setas em SVG sobre o print do detalhe (texto + linha + dot).

---

## Parte 3 — Sua pergunta: "Download de especificações" e outros bônus

### Resposta direta

**Sim, dá pra colocar e é estratégico.** Não invade nada do que o PDF da Etapa 3 proíbe (sem login, sem rota protegida, sem projeto novo, sem libs novas). É feature de **apresentação na página de detalhe**, e mostra que você sabe trabalhar com o JSON que vem da API.

### Implementação proposta do download

Botão **"Baixar especificações"** no bloco de preço da PDP. Ao clicar:
- Gera um arquivo `.txt` (ou `.json`) com nome, marca, SKU, peso, dimensões, preço, garantia, envio, política de trocas e link da API.
- Tudo em **JavaScript puro** com `Blob` + `URL.createObjectURL` — zero libs.
- Acessível, com `aria-label` e ícone SVG inline.

**Por que é estratégico:** demonstra (a) que você manipula a resposta da API além de só exibir, (b) UX real de e-commerce ("ficha técnica"), (c) sem nada de backend.

### Outras melhorias que respeitam o escopo

Listo do **mais seguro** para o **mais ousado** — escolha quais entram:

| # | Melhoria | Por que cabe na Etapa 3 | Risco escopo |
|---|---|---|---|
| 1 | **Scroll-to-top ao trocar rota** (componente `<ScrollToTop />` com `useLocation` + `useEffect`) | É comportamento padrão de SPA — pura navegação | Nenhum |
| 2 | **Botão "Compartilhar"** (Web Share API + fallback copiar link) na PDP | URL já existe (`/produto/:id`), só reusa | Nenhum |
| 3 | **Imprimir ficha** (`window.print()`) com CSS `@media print` enxuto | Frontend puro | Nenhum |
| 4 | **404 inteligente** — busca 3 produtos sugeridos via `/products?limit=3` e mostra como cards clicáveis | Reusa fetch + Link; reforça navegação | Nenhum |
| 5 | **Página `/sobre-o-projeto`** (rota nova) explicando arquitetura SPA, com link no menu | Mostra MAIS rotas, que é o tema da etapa | Nenhum — fortalece a etapa |
| 6 | **Skeleton na vitrine** também (hoje só no detalhe) | Loading reforçado é item recomendado pelo PDF | Nenhum |
| 7 | **Histórico "Vistos recentemente"** (últimos 4 IDs em `localStorage`) na Home | Persistência leve, sem login | Baixo — mas vale citar como bônus |
| 8 | **Ordenação na vitrine** (menor preço / maior rating) com `useSearchParams` | Reusa o que já existe | Nenhum |

**Minha recomendação:** entrar **#1, #2, #3, #4, #5, #8** + o **download de especificações**. Esse pacote:
- Não toca em login/rota protegida/carrinho/checkout (proibições da etapa).
- **Adiciona uma 4ª rota** (`/sobre-o-projeto`), o que reforça exatamente o que a Semana 14 pede.
- Dá ao professor coisas concretas para elogiar sem você fugir do tema.

Deixo de fora:
- **#7 (Vistos recentemente)** — usa `localStorage`, que costuma ser introduzido na Etapa 4. Se quiser, fica para depois.

---

## Arquivos afetados (quando aprovado e mudar para build)

**Código do app:**
- `src/components/Cabecalho.jsx` — prop `mostrarHero`.
- `src/components/Layout.jsx` — não renderiza mais o hero por padrão.
- `src/pages/Home.jsx` — passa `mostrarHero` para o Cabecalho (ou renderiza o hero diretamente).
- `src/pages/Detalhe.jsx` — botões "Baixar especificações", "Compartilhar", "Imprimir".
- `src/pages/NaoEncontrado.jsx` — fetch de 3 sugestões reais.
- `src/pages/SobreProjeto.jsx` — **novo arquivo** (única criação).
- `src/App.jsx` — registra a rota `/sobre-o-projeto`.
- `src/components/MenuTopo.jsx` — adiciona item "Sobre o projeto".
- `src/components/ScrollToTop.jsx` — **novo arquivo** (helper de rota).
- `src/main.jsx` — envolve com `<ScrollToTop />`.
- `src/components/Vitrine.jsx` — skeleton + ordenação opcional.
- `src/App.css` — estilos dos novos botões, skeleton, print media query.

**Documento de entrega:**
- `/mnt/documents/nucleo-tads-store-entrega-semana14-v2.pdf` — nova versão.
- Recapturar `print-home.png` e `print-detalhe.png` em 1920×1200 após o fix do hero.

---

## Decisões que preciso de você antes de implementar

1. **Topo, top de tudo:** topar a correção do hero (deixar hero **só na Home**)? É o que tira o "imagem errada" do PDF.
2. **Pacote de bônus:** vai com a recomendação (download + 1, 2, 3, 4, 5, 8) ou prefere um subconjunto?
3. **Nome da rota nova:** `/sobre-o-projeto`, `/sobre`, ou `/projeto`?

Se topar tudo como está, eu já gero o PDF v2 + faço as edições de código numa única passada quando você aprovar o plano.
