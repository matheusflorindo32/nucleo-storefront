## Trocar a logo SVG pela imagem enviada

**O que fazer**
1. Subir a imagem `ChatGPT Image 17 de jun. de 2026, 19_24_13.png` como asset Lovable (`src/assets/logo-nts.png.asset.json`) usando `lovable-assets create` direto de `/mnt/user-uploads/`.
2. Editar `src/components/Cabecalho.jsx`:
   - Remover o componente `LogoNTS` (SVG inline).
   - Importar o asset: `import logoNts from "../assets/logo-nts.png.asset.json"`.
   - Como a imagem enviada já contém o ícone hexagonal + o texto "Núcleo TADS Store" + tagline, exibir somente `<img src={logoNts.url} alt="Núcleo TADS Store" className="logo-img" />` no cabeçalho, removendo o bloco `.logo-text` (título e tagline duplicados).
3. Ajustar `src/App.css`:
   - Adicionar `.logo-img { max-width: 420px; width: 100%; height: auto; display: block; }`.
   - Remover/ajustar regras antigas de `.logo-svg`, `.logo-text`, `.logo-title`, `.logo-tagline` que ficarão sem uso.
   - Manter responsivo: em telas pequenas, `max-width: 280px`.
4. `App.jsx` continua passando `titulo="Núcleo TADS Store"` — vamos remover esse prop, já que o texto agora vive na imagem (ou manter como `alt` apenas).

**Sem mudanças** em outros componentes, regras da Semana 12, ou dependências. Continua React + Vite + JS puro, sem `useState`/`useEffect`/API.
