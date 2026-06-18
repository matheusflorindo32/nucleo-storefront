import { useLocation } from "react-router-dom";
import Cabecalho from "./Cabecalho.jsx";
import Rodape from "./Rodape.jsx";

function Layout({ children }) {
  const { pathname } = useLocation();
  const naHome = pathname === "/";

  return (
    <div className="app-shell">
      <Cabecalho mostrarHero={naHome} />
      <main className="app-main">{children}</main>
      <Rodape />
    </div>
  );
}

export default Layout;
