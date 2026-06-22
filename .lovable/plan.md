## Diagnóstico da tela atual

A `/minha-conta` hoje parece amadora porque:
- 4 cards genéricos, todos iguais, com emojis grandes e badges "decorativas" sem função real
- Hierarquia fraca: o "Olá, aluno 👋" compete com o botão "Sair" e não há painel principal
- Nenhuma informação real do usuário (sem avatar, sem metadados de sessão, sem atividade)
- Cards são "placas" estáticas — sem hover refinado, sem dado quantitativo, sem ação clara
- Layout em grid 4 colunas iguais → sensação de "template", não de produto

## Direção de design (inspiração 21st.dev)

Padrões observados em dashboards premium do 21st.dev (autores: serafimcloud, kokonutui, aceternity — seções "account", "settings", "profile dashboard"):

- **Bento assimétrico**: 1 card hero grande (perfil + sessão) + cards menores em torno
- **Sidebar de navegação interna** vertical com ícones lineares (lucide) — não emojis
- **Dado quantitativo em destaque**: número grande + label pequeno em caps
- **Hairline borders + glass surface** sobre fundo levemente texturizado
- **Eyebrow em mono uppercase**, título em display serif/grotesk, corpo neutro
- **Estados claros**: "Sessão ativa" como pill com ponto verde pulsante
- **Micro-motion**: fade-up escalonado nos cards (framer-motion já no projeto? senão CSS keyframes)

## Nova arquitetura da página

```text
┌─────────────────────────────────────────────────────────┐
│ Breadcrumb · Início / Minha conta            [Sair ▸]   │
├─────────────────────────────────────────────────────────┤
│  PERFIL HERO (col-span 2)        │  SESSÃO (col-span 1) │
│  ● avatar gerado com inicial     │  ● ponto verde pulse │
│  Olá, aluno                      │  Sessão ativa        │
│  Membro desde · 22/06/2026       │  Login: aluno        │
│  Plano: Estudante TADS           │  Expira: localStorage│
│                                   │  Origem: simulada    │
├──────────────┬──────────────┬──────────────┬───────────┤
│ STAT pedidos │ STAT favs    │ STAT visitas │ STAT cred │
│   0          │   0          │   12         │  ∞        │
│ em aberto    │ salvos       │ nesta sessão │ acadêmico │
├──────────────┴──────────────┴──────────────┴───────────┤
│  ATIVIDADE RECENTE                   ATALHOS RÁPIDOS    │
│  • Login realizado · agora           → Ver vitrine      │
│  • Visitou /produto/1                → Sobre o projeto  │
│  • Visitou /sobre-o-projeto          → FAQ              │
│  (timeline com linha vertical)       → Sair             │
└─────────────────────────────────────────────────────────┘
```

## Implementação (escopo cirúrgico)

**Arquivos tocados:**
1. `src/pages/MinhaConta.jsx` — reescrever com nova estrutura (perfil, stats, atividade, atalhos)
2. `src/App.css` — substituir bloco `.conta-*` (linhas ~2296–2375) por novo design system local com prefixo `.mc-*`
3. **Não cria** novas dependências (mantém simplicidade acadêmica — sem framer-motion novo, sem lucide novo se não estiver instalado; usa SVGs inline)

**Tokens visuais (reaproveitam variáveis existentes):**
- Surface principal: `linear-gradient(180deg, #fff, #f8fafc)` + `border: 1px solid var(--borda)` + `border-radius: 20px`
- Card hero perfil: gradient sutil marinho→água + avatar circular 72px com inicial em serif
- Stats: número 40px peso 700 cor `--marinho`, label 11px uppercase tracking-wide `--texto-2`
- Pill "sessão ativa": fundo `rgba(22,163,74,0.1)`, dot 8px verde com `@keyframes pulse`
- Timeline: linha vertical 1px `--borda` + dots 8px água
- Hover cards: `translateY(-2px)` + shadow `0 12px 30px -12px rgba(10,35,66,0.15)` + border `--azul-tech`

**Atividade recente**: derivada de `localStorage` (últimas rotas visitadas via um pequeno hook `useHistoricoNavegacao` opcional) OU lista estática didática com timestamp do login (`localStorage.getItem('nts-login-ts')`). Vou pela **opção estática didática + timestamp real do login** para evitar overengineering.

**Dados exibidos:**
- Membro desde: data do primeiro login salva em `localStorage` ao logar
- Sessão ativa desde: timestamp do login atual
- Stats: pedidos=0, favoritos=0, visitas nesta sessão=contador em sessionStorage incrementado em `useEffect`, créditos=∞

**Pequena alteração em `AuthContext.jsx`**: ao fazer login, salvar `nts-login-ts` e `nts-membro-desde` (se ainda não existir) em localStorage. Mantém escopo acadêmico — apenas 2 linhas extras.

## Acessibilidade
- Cabeçalho `<h1>` único, cards são `<article>` com `<h2>`
- Pill sessão com `aria-label="Sessão ativa"`
- Botão sair com `aria-label` explícito
- Contraste AA em todos os textos sobre superfícies claras

## Fora do escopo
- Não mexer em outras páginas
- Não adicionar libs (framer-motion, lucide-react) se já não estiverem
- Não criar backend / banco — tudo localStorage como pede a rubrica
- Não trocar a paleta global

## Resultado esperado
Tela `/minha-conta` parecendo dashboard de produto real (nível Linear/Vercel account), mantendo a simplicidade acadêmica e a stack atual. Após aprovação, executo e tiro novo print `04-minha-conta.png` em `docs/prints/`.