## Objetivo
Criar um vídeo curto (~2 minutos) de apresentação geral do projeto Núcleo TADS Store, com seu avatar do HeyGen como narrador e screenshots do projeto aparecendo em sequência.

## Pré-requisito
A integração com HeyGen precisa estar reconectada/ autorizada no projeto. Identifiquei que a conexão atual está expirada (HTTP 401). Antes de gerar o vídeo, você precisa reconectar sua conta HeyGen em Configurações > Integrações.

## Etapas do plano

1. **Reconectar HeyGen**
   - Acessar as configurações do projeto e reconectar a integração HeyGen.
   - Confirmar quando estiver pronto para eu prosseguir.

2. **Coletar assets visuais**
   - Reutilizar as screenshots já existentes em `docs/prints/`:
     - `01-home.png` (home/hero)
     - `02-catalogo.png` (catálogo de produtos)
     - `03-detalhe.png` (página de detalhe)
     - `04-carrinho.png` (carrinho de compras)
     - `05-login.png` (tela de login)
     - `06-carrinho.png` (carrinho atualizado)
     - `07-login-real.png` (login real com API)
     - `08-minha-conta.png` (área logada)
   - Se alguma estiver faltando ou desatualizada, regenerar via Playwright.

3. **Definir roteiro e prompt para o avatar**
   - Criar um roteiro de ~2 minutos dividido em blocos de 15-20 segundos.
   - Cada bloco será narrado pelo avatar e acompanhado por uma screenshot.
   - Roteiro sugerido:
     - Abertura: apresentação do projeto
     - Home e destaques
     - Catálogo com filtros e busca
     - Página de detalhe do produto
     - Carrinho de compras e modal de confirmação
     - Login real com API DummyJSON
     - Minha conta (rota protegida)
     - Fechamento: tecnologias usadas e convite

4. **Identificar o avatar no HeyGen**
   - Listar os avatar groups do usuário e selecionar o look desejado.
   - Se necessário, solicitar o avatar_id/look específico.

5. **Gerar o vídeo**
   - Usar a ferramenta `create_video_from_avatar` do HeyGen com:
     - `avatar_id` do look escolhido
     - Roteiro completo como input
     - Screenshots como assets visuais (upload ou referência por URL, conforme suportado pela API)
   - Alternativa: se o HeyGen não permitir composição com imagens diretamente, gerar o áudio/vídeo do avatar e montar a edição final com Remotion no sandbox, combinando avatar e screenshots.

6. **Entrega**
   - Exportar o vídeo final em MP4 para `/mnt/documents/`.
   - Informar duração, resolução e caminho do arquivo.

## Decisões pendentes
- Você quer que eu gere também uma trilha/áudio de fundo, ou prefere apenas a narração do avatar?
- Deseja legendas embutidas no vídeo?
- Prefere que o avatar apareça em tela cheia, em um canto (picture-in-picture) sobre as screenshots, ou alternando entre avatar e tela?

## Resultado esperado
Vídeo MP4 de ~2 minutos, com avatar humanizado apresentando o projeto e navegando visualmente pelas principais telas do Núcleo TADS Store.