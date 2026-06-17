import Cabecalho from "./Cabecalho.jsx";
import Rodape from "./Rodape.jsx";

function Layout({ children }) {
  return (
    <div className="app-shell">
      <Cabecalho titulo="Núcleo TADS Store" />
      <main className="app-main">{children}</main>
      <Rodape />
    </div>
  );
}

export default Layout;
