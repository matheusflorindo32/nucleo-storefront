import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";

function AcaoAuth() {
  const { logado, usuario, perfil, sair } = useAuth();
  const navegar = useNavigate();

  function aoSair() {
    sair();
    navegar("/");
  }

  if (logado) {
    const nomeExibido = perfil?.firstName || usuario || "aluno";
    return (
      <div className="auth-acao">
        {perfil?.image ? (
          <img
            src={perfil.image}
            alt=""
            className="auth-acao-avatar"
            aria-hidden="true"
          />
        ) : (
          <span className="auth-acao-avatar auth-acao-avatar--letra" aria-hidden="true">
            {nomeExibido.charAt(0).toUpperCase()}
          </span>
        )}
        <span className="auth-acao-oi">
          Olá, <strong>{nomeExibido}</strong>
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
