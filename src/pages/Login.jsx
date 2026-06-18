import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const { entrar, logado } = useAuth();
  const navegar = useNavigate();
  const location = useLocation();
  const destino = location.state?.de || "/minha-conta";

  useEffect(() => {
    document.title = "Entrar — Núcleo TADS Store";
  }, []);

  useEffect(() => {
    if (logado) navegar(destino, { replace: true });
  }, [logado, destino, navegar]);

  function aoEnviar(e) {
    e.preventDefault();
    if (usuario.trim() === "aluno" && senha === "1234") {
      entrar(usuario.trim());
      navegar(destino, { replace: true });
    } else {
      setErro("Usuário ou senha inválidos. Use aluno / 1234.");
    }
  }

  return (
    <section className="auth-wrap">
      <div className="auth-card">
        <span className="auth-eyebrow">Área do aluno</span>
        <h1 className="auth-title">Entrar na sua conta</h1>
        <p className="auth-sub">
          Acesse sua área pessoal para acompanhar pedidos e favoritos.
        </p>

        <form className="auth-form" onSubmit={aoEnviar} noValidate>
          <label className="auth-label">
            Usuário
            <input
              type="text"
              className="auth-input"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="aluno"
              autoComplete="username"
              required
            />
          </label>

          <label className="auth-label">
            Senha
            <input
              type="password"
              className="auth-input"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="••••"
              autoComplete="current-password"
              required
            />
          </label>

          {erro && (
            <p className="auth-erro" role="alert">
              {erro}
            </p>
          )}

          <button type="submit" className="botao botao-primario auth-submit">
            Entrar
          </button>
        </form>

        <div className="auth-dica" aria-label="Credenciais de teste">
          <strong>Acesso de teste:</strong> usuário <code>aluno</code> · senha{" "}
          <code>1234</code>
        </div>

        <Link to="/" className="auth-voltar">
          ← Voltar ao catálogo
        </Link>
      </div>
    </section>
  );
}

export default Login;
