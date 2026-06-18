import { NavLink, Link, useLocation } from "react-router-dom";

function MenuTopo({ itens }) {
  const location = useLocation();
  const naHome = location.pathname === "/";

  return (
    <nav className="menu-topo" aria-label="Navegação principal">
      <ul className="menu-topo-lista">
        {itens.map((item) => {
          const ehAncora = item.href && item.href.startsWith("#");

          // Itens com `to` (rotas reais como /sobre-o-projeto) → NavLink dedicado.
          if (item.to) {
            return (
              <li key={item.label} className="menu-topo-item">
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    "menu-topo-link" + (isActive ? " ativo" : "")
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            );
          }

          // "Início" -> NavLink para "/", marca ativo automaticamente.
          if (!ehAncora || item.label === "Início") {
            return (
              <li key={item.label} className="menu-topo-item">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    "menu-topo-link" + (isActive ? " ativo" : "")
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            );
          }

          // Itens com âncora (#vitrine, #sobre, #faq, #contato):
          // na Home usam <a href> nativo (rolagem suave),
          // fora da Home viram Link para "/{#hash}".
          return (
            <li key={item.label} className="menu-topo-item">
              {naHome ? (
                <a href={item.href} className="menu-topo-link">
                  {item.label}
                </a>
              ) : (
                <Link to={`/${item.href}`} className="menu-topo-link">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default MenuTopo;
