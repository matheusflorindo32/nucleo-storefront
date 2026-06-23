# Prompt para HeyGen — Vídeo de Apresentação (Núcleo TADS Store)

Duração-alvo: ~2 minutos · Idioma: Português (Brasil) · Tom: profissional, didático e confiante.

---

## 1. Instruções gerais para o avatar (cole no campo "Instructions" / "Voice style")

> Fale em português do Brasil, com ritmo natural e didático, como um(a) desenvolvedor(a) apresentando um projeto acadêmico de e-commerce. Use entonação leve e segura, faça pequenas pausas entre os blocos para casar com as trocas de tela. Evite gírias. Soe orgulhoso(a) do trabalho, sem exagero.

---

## 2. Configuração sugerida no HeyGen

- **Avatar:** seu avatar pessoal (Photo Avatar ou Instant Avatar já treinado).
- **Voice:** voz clonada sua **ou** uma voz pt-BR natural (ex.: "Francisca", "Antônio" — neural).
- **Background:** Picture-in-Picture — avatar no canto inferior direito, em círculo, sobre as screenshots.
- **B-roll / Screens:** subir as imagens da pasta `docs/prints/` (01 a 08) e alinhar pelos timestamps abaixo.
- **Resolução:** 1080p · **Aspect ratio:** 16:9 · **Legendas:** ativadas (pt-BR).

---

## 3. Roteiro (script) — cole no campo de texto principal

> Copie tudo o que está entre as linhas. Cada bloco `[CENA]` indica qual screenshot deve aparecer naquele trecho.

---

**[CENA 1 — 0:00–0:12 · print: 01-home.png]**

Olá! Eu sou [SEU NOME] e vou te mostrar o Núcleo TADS Store, um e-commerce que desenvolvi como projeto do curso de Tecnologia em Análise e Desenvolvimento de Sistemas. Ele foi construído em React com Vite, usando React Router, Context API e a API pública DummyJSON.

**[CENA 2 — 0:12–0:28 · print: 01-home.png]**

Na página inicial, temos um hero com chamada principal, categorias em destaque, uma seção de diferenciais, depoimentos, FAQ e um formulário de captura de leads. Toda a navegação acontece em SPA, com rolagem suave e cabeçalho fixo.

**[CENA 3 — 0:28–0:45 · print: 02-catalogo.png]**

No catálogo, os produtos são carregados da API DummyJSON através de um hook customizado chamado useProdutos. O usuário pode buscar por nome, filtrar por categoria e ordenar por preço ou avaliação. Todos os filtros ficam salvos na URL, então é possível compartilhar o link já filtrado.

**[CENA 4 — 0:45–0:58 · print: 03-detalhe.png]**

Ao clicar em um produto, abrimos a página de detalhe. Aqui usamos o hook useProdutoDetalhe, que busca os dados do item pelo ID na URL, mostra galeria de imagens, descrição, preço com desconto, estoque e avaliação. Há também um botão para adicionar ao carrinho.

**[CENA 5 — 0:58–1:15 · print: 06-carrinho.png]**

O carrinho é gerenciado por um Context dedicado, com persistência em localStorage. O usuário pode aumentar a quantidade, remover itens e ver o subtotal calculado com useMemo. Para esvaziar o carrinho, implementei um modal de confirmação acessível, com ARIA, no lugar do window.confirm padrão.

**[CENA 6 — 1:15–1:32 · print: 07-login-real.png]**

A tela de login faz autenticação real contra a API DummyJSON, retornando um JWT que fica salvo no AuthContext. Também há um fallback offline com usuário e senha de teste, caso a API esteja indisponível. Mensagens de erro são exibidas de forma clara.

**[CENA 7 — 1:32–1:45 · print: 08-minha-conta.png]**

A rota "Minha Conta" é protegida pelo componente RotaPrivada: se o usuário não estiver autenticado, é redirecionado para o login e, após entrar, volta automaticamente para a página que tentou acessar. Dentro dela vemos os dados do usuário e o botão de logout.

**[CENA 8 — 1:45–2:00 · print: 01-home.png]**

O projeto cumpre os quatro requisitos obrigatórios — useState, useEffect, React Router e consumo de API — e ainda traz dois bônus: login real com rota protegida e carrinho persistente com modal customizado. Obrigado por assistir! O código completo está no repositório do GitHub.

---

## 4. Timeline para sincronizar as screenshots

| Início | Fim   | Imagem               |
|--------|-------|----------------------|
| 0:00   | 0:28  | 01-home.png          |
| 0:28   | 0:45  | 02-catalogo.png      |
| 0:45   | 0:58  | 03-detalhe.png       |
| 0:58   | 1:15  | 06-carrinho.png      |
| 1:15   | 1:32  | 07-login-real.png    |
| 1:32   | 1:45  | 08-minha-conta.png   |
| 1:45   | 2:00  | 01-home.png          |

---

## 5. Dicas finais

- Antes de gerar, leia o roteiro em voz alta cronometrando — se passar de 2:10, encurte a Cena 2 ou a Cena 8.
- Use a função **"Add captions"** do HeyGen para legendas automáticas em pt-BR.
- Se o avatar ficar muito estático, ative o modo "Expressive" ou aumente os gestos para nível médio.
- Substitua `[SEU NOME]` pelo seu nome real antes de gerar.
