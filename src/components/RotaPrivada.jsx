import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";

function RotaPrivada({ children }) {
  const { logado } = useAuth();
  const location = useLocation();

  if (!logado) {
    return <Navigate to="/login" replace state={{ de: location.pathname }} />;
  }
  return children;
}

export default RotaPrivada;
