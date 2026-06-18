import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [logado, setLogado] = useState(
    () => localStorage.getItem("logado") === "true"
  );
  const [usuario, setUsuario] = useState(
    () => localStorage.getItem("usuarioNome") || ""
  );

  function entrar(nome) {
    setLogado(true);
    setUsuario(nome);
    localStorage.setItem("logado", "true");
    localStorage.setItem("usuarioNome", nome);
  }

  function sair() {
    setLogado(false);
    setUsuario("");
    localStorage.removeItem("logado");
    localStorage.removeItem("usuarioNome");
  }

  return (
    <AuthContext.Provider value={{ logado, usuario, entrar, sair }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
