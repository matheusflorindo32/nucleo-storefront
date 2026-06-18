function MenuTopo({ itens }) {
  return (
    <nav className="menu-topo" aria-label="Navegação principal">
      <ul className="menu-topo-lista">
        {itens.map((item) => (
          <li key={item.label} className="menu-topo-item">
            <a
              href={item.href}
              className={`menu-topo-link${item.ativo ? " ativo" : ""}`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MenuTopo;
