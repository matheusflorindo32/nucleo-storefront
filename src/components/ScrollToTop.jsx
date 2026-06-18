import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Garante que ao trocar de rota a página comece do topo —
// comportamento padrão esperado de uma SPA.
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
