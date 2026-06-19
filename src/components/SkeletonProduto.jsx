// Placeholder visual exibido enquanto a vitrine carrega os produtos.
function SkeletonProduto() {
  return (
    <div className="card card--skeleton" aria-hidden="true">
      <div className="skeleton skeleton--img" />
      <div className="card-body">
        <div className="skeleton skeleton--line skeleton--line-short" />
        <div className="skeleton skeleton--line" />
        <div className="skeleton skeleton--line skeleton--line-price" />
      </div>
    </div>
  );
}

export default SkeletonProduto;
