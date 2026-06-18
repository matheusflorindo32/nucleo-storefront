function FiltroCategorias({ categorias, ativa }) {
  return (
    <div className="filtro-categorias" role="tablist" aria-label="Categorias">
      {categorias.map((cat) => (
        <button
          key={cat}
          type="button"
          role="tab"
          aria-selected={cat === ativa}
          className={`filtro-chip${cat === ativa ? " ativo" : ""}`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default FiltroCategorias;
