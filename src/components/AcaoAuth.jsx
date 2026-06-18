import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";

function AcaoAuth() {
  const { logado, usuario, sair } = useAuth();
  const navegar = useNavigate();

  function aoSair() {
    sair();
    navegar("/");
  }

  if (logado) {
    return (
      <div className="auth-acao">
        <span className="auth-acao-oi">
          Olá, <strong>{usuario || "aluno"}</strong>
        </span>
        <button
          type="button"
          className="auth-acao-btn auth-acao-btn--sair"
          onClick={aoSair}
        >
          Sair
        </button>
      </div>
    );
  }

  return (
    <div className="auth-acao">
      <Link to="/login" className="auth-acao-btn auth-acao-btn--entrar">
        Entrar
      </Link>
    </div>
  );
}

export default AcaoAuth;
