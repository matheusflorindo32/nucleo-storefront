# Plano — Ajustes do cabeçalho

## 1. `src/components/Cabecalho.jsx`
- Reduzir o `.cabecalho-top`: logo menor para tirar o excesso de espaço branco acima do hero.
- Substituir o badge "Clean Tech · Vitrine Acadêmica" por algo mais discreto e profissional: **"Vitrine de Produtos"**.
- Remover totalmente o bloco `<ul className="hero-chips">` (React + Vite, Componentes reutilizáveis, Clean Tech) — não aparecerá mais nada disso na home.

## 2. `src/App.css`
- `.cabecalho-top`: reduzir padding vertical (de 20px para 10px) para enxugar a faixa branca.
- `.logo-img`: reduzir `max-width` de 420px para 280px (e ajustar responsivo).
- `.hero-content`: diminuir padding superior (de 72px para 48px) para subir o conteúdo.
- Remover regras `.hero-chips` e `.hero-chip` (sem uso após remoção).

## 3. `package.json`
- Adicionar script `"build:dev": "vite build --mode development"` para resolver o erro de build `Script not found "build:dev"`.

## Não muda
Nenhuma lógica, nenhum componente novo, nada das próximas semanas. Continua React + Vite + JS puro, sem useState/useEffect/API/Router.
