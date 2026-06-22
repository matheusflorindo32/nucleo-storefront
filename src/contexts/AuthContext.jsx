import { createContext, useContext, useState } from "react";
import { loginDummy } from "../services/api.js";

const AuthContext = createContext(null);

function lerPerfil() {
  try {
    const raw = localStorage.getItem("nts-perfil");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [logado, setLogado] = useState(
    () => localStorage.getItem("logado") === "true"
  );
  const [usuario, setUsuario] = useState(
    () => localStorage.getItem("usuarioNome") || ""
  );
  const [perfil, setPerfil] = useState(() => lerPerfil());
  const [token, setToken] = useState(
    () => localStorage.getItem("nts-token") || ""
  );

  function aplicarSessao(nome, perfilNovo, tokenNovo) {
    setLogado(true);
    setUsuario(nome);
    setPerfil(perfilNovo);
    setToken(tokenNovo || "");
    localStorage.setItem("logado", "true");
    localStorage.setItem("usuarioNome", nome);
    if (perfilNovo) {
      localStorage.setItem("nts-perfil", JSON.stringify(perfilNovo));
    } else {
      localStorage.removeItem("nts-perfil");
    }
    if (tokenNovo) localStorage.setItem("nts-token", tokenNovo);
    else localStorage.removeItem("nts-token");

    const agora = new Date().toISOString();
    localStorage.setItem("nts-login-ts", agora);
    if (!localStorage.getItem("nts-membro-desde")) {
      localStorage.setItem("nts-membro-desde", agora);
    }
  }

  // Login com fallback offline (aluno/1234) + DummyJSON real
  async function entrar(nome, senha) {
    const nomeLimpo = (nome || "").trim();

    // Fallback didático offline — mantém compatibilidade com a rubrica
    if (nomeLimpo === "aluno" && senha === "1234") {
      aplicarSessao(
        nomeLimpo,
        {
          tipo: "simulado",
          firstName: "Aluno",
          lastName: "TADS",
          email: "aluno@tads.local",
          image: "",
        },
        ""
      );
      return { ok: true, modo: "simulado" };
    }

    // Login real via DummyJSON
    try {
      const dados = await loginDummy(nomeLimpo, senha);
      aplicarSessao(
        dados.username || nomeLimpo,
        {
          tipo: "dummyjson",
          firstName: dados.firstName,
          lastName: dados.lastName,
          email: dados.email,
          image: dados.image,
          gender: dados.gender,
        },
        dados.accessToken || ""
      );
      return { ok: true, modo: "dummyjson" };
    } catch (e) {
      return { ok: false, erro: e.message || "Falha no login" };
    }
  }

  function sair() {
    setLogado(false);
    setUsuario("");
    setPerfil(null);
    setToken("");
    localStorage.removeItem("logado");
    localStorage.removeItem("usuarioNome");
    localStorage.removeItem("nts-login-ts");
    localStorage.removeItem("nts-perfil");
    localStorage.removeItem("nts-token");
  }

  return (
    <AuthContext.Provider
      value={{ logado, usuario, perfil, token, entrar, sair }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
