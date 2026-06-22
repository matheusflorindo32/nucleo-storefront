## Objetivo

Gerar 5 capturas de tela do projeto rodando localmente e salvar em `docs/prints/` para anexar no AVA.

## O que será capturado

| Arquivo | Rota | Estado |
|---|---|---|
| `docs/prints/01-home.png` | `/` | Vitrine carregada com produtos da DummyJSON |
| `docs/prints/02-detalhe.png` | `/produto/1` | Página de detalhe com galeria, selos e ações |
| `docs/prints/03-login.png` | `/login` | Tela de login com card e credenciais de teste |
| `docs/prints/04-minha-conta.png` | `/minha-conta` | Área logada (login via `aluno`/`1234` antes) |
| `docs/prints/05-404.png` | `/rota-inexistente` | Página 404 estilizada com sugestões |

## Como será feito

1. Script Playwright em `/tmp/browser/prints.py`:
   - Chromium headless, viewport 1280×900 (boa relação para README).
   - Para cada rota: `goto` com `wait_until="networkidle"`, pequeno delay para imagens/fontes, `page.screenshot(path=...)` (sem `full_page`, conforme diretriz).
   - Para `04-minha-conta`: preencher form em `/login` com `aluno` / `1234`, submeter, aguardar redirect, então capturar.
2. Salvar diretamente em `docs/prints/` do projeto.
3. Verificar visualmente cada PNG abrindo-os após gerar (QA obrigatório).

## Fora do escopo

- Sem alterações de código no app.
- Sem mudança de viewport mobile (somente desktop, que é o avaliado).
- Sem edição/anotação nas imagens.

## Resultado final

5 PNGs prontos em `docs/prints/`, versionados junto com o projeto, prontos para o envio acadêmico.

Posso seguir?