import { useEffect, useState } from "react";
import { buscarProdutoPorId } from "../services/api.js";

// Carrega um produto pelo id, expondo estados de loading/erro/não encontrado.
export function useProdutoDetalhe(id) {
  const [produto, setProduto] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [naoEncontrado, setNaoEncontrado] = useState(false);
  const [tentativa, setTentativa] = useState(0);

  useEffect(() => {
    let ativo = true;
    async function carregar() {
      try {
        setCarregando(true);
        setErro(null);
        setNaoEncontrado(false);
        const dados = await buscarProdutoPorId(id);
        if (!ativo) return;
        // DummyJSON devolve { message: "..." } com status 200 para id inexistente.
        if (!dados || !dados.id) {
          setNaoEncontrado(true);
          setProduto(null);
        } else {
          setProduto(dados);
        }
      } catch (e) {
        if (!ativo) return;
        // 404 do fetch também é tratado como "não encontrado".
        if (String(e?.message || "").includes("404")) {
          setNaoEncontrado(true);
          setProduto(null);
        } else {
          setErro(
            "Não foi possível carregar os detalhes do produto. Tente novamente mais tarde."
          );
        }
      } finally {
        if (ativo) setCarregando(false);
      }
    }
    carregar();
    return () => {
      ativo = false;
    };
  }, [id, tentativa]);

  function recarregar() {
    setTentativa((t) => t + 1);
  }

  return { produto, carregando, erro, naoEncontrado, recarregar };
}
