## Problema

O print `02-detalhe.png` está mostrando **"Essence Mascara Lash Princess"** (categoria *beauty*) porque o script de geração navegou para `/produto/1`, e na DummyJSON o id `1` é um produto de beleza — fora do escopo da Núcleo TADS Store (smartphones, notebooks, tablets, áudio & acessórios).

A página `/produto/:id` em si está correta — ela só renderiza o que o id pedir. O bug é só no script de captura.

## Correção

Atualizar o script Playwright de prints para abrir um produto **de tecnologia** real da vitrine antes de capturar o detalhe. Estratégia robusta (não depende de id fixo da DummyJSON que pode mudar):

1. Ir para `/` e esperar a vitrine carregar.
2. Clicar no primeiro `ProdutoCard` (link `a[href^="/produto/"]`).
3. Esperar a página de detalhe carregar (imagem + título visíveis).
4. Tirar o screenshot como `docs/prints/02-detalhe.png`.

Fallback: se por algum motivo o clique falhar, navegar direto para `/produto/121` (iPhone 5s — smartphone na DummyJSON v2).

## Validação

- Reabrir o print novo e confirmar visualmente que é um produto tech (smartphone/notebook/tablet/acessório), com badge de categoria condizente.
- Conferir que o resto do layout premium continua intacto (breadcrumb, galeria, especificações, garantia/envio, reviews).

## Fora do escopo

- Não mexer em `src/pages/Detalhe.jsx`, `src/services/api.js` ou em qualquer componente — a página está correta.
- Não regerar os outros prints (01, 03, 04, 05), que já estão validados.
