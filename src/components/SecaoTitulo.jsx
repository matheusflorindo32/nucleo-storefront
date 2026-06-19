// Cabeçalho padronizado de seção: eyebrow + título + subtítulo opcional.
function SecaoTitulo({ eyebrow, titulo, subtitulo, alinhamento = "centro" }) {
  return (
    <header className={`secao-titulo secao-titulo--${alinhamento}`}>
      {eyebrow && <span className="secao-titulo-eyebrow">{eyebrow}</span>}
      <h2 className="secao-titulo-titulo">{titulo}</h2>
      {subtitulo && <p className="secao-titulo-sub">{subtitulo}</p>}
    </header>
  );
}

export default SecaoTitulo;
