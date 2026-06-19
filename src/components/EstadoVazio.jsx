// Estado vazio reutilizável — usado em busca sem resultados, listas vazias etc.
function EstadoVazio({ titulo, descricao, children, icone = "🔍" }) {
  return (
    <div className="estado-vazio" role="status">
      <span className="estado-vazio-icone" aria-hidden="true">
        {icone}
      </span>
      <h3 className="estado-vazio-titulo">{titulo}</h3>
      {descricao && <p className="estado-vazio-desc">{descricao}</p>}
      {children && <div className="estado-vazio-acao">{children}</div>}
    </div>
  );
}

export default EstadoVazio;
