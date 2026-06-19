import { useEffect, useState } from "react";
import { buscarProdutosTech } from "../services/api.js";

// Encapsula carregamento, erro e re-tentativa da vitrine.
// Uso: const { produtos, carregando, erro, recarregar } = useProdutos();
export function useProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [tentativa, setTentativa] = useState(0);

  useEffect(() => {
    let ativo = true;
    async function carregar() {
      try {
        setCarregando(true);
        setErro(null);
        const lista = await buscarProdutosTech();
        if (ativo) setProdutos(lista);
      } catch (_) {
        if (ativo)
          setErro(
            "Não foi possível carregar os produtos. Tente novamente mais tarde."
          );
      } finally {
        if (ativo) setCarregando(false);
      }
    }
    carregar();
    return () => {
      ativo = false;
    };
  }, [tentativa]);

  function recarregar() {
    setTentativa((t) => t + 1);
  }

  return { produtos, carregando, erro, recarregar };
}
