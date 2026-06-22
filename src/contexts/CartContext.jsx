import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);
const CHAVE = "nts-carrinho";

function lerCarrinho() {
  try {
    const raw = localStorage.getItem(CHAVE);
    if (!raw) return [];
    const lista = JSON.parse(raw);
    return Array.isArray(lista) ? lista : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [itens, setItens] = useState(() => lerCarrinho());

  useEffect(() => {
    localStorage.setItem(CHAVE, JSON.stringify(itens));
  }, [itens]);

  function adicionar(produto, qtd = 1) {
    if (!produto || !produto.id) return;
    setItens((atual) => {
      const existente = atual.find((i) => i.id === produto.id);
      if (existente) {
        return atual.map((i) =>
          i.id === produto.id ? { ...i, qtd: i.qtd + qtd } : i
        );
      }
      return [
        ...atual,
        {
          id: produto.id,
          title: produto.title,
          price: produto.price,
          thumbnail: produto.thumbnail,
          category: produto.category,
          qtd,
        },
      ];
    });
  }

  function remover(id) {
    setItens((atual) => atual.filter((i) => i.id !== id));
  }

  function mudarQtd(id, qtd) {
    const nova = Math.max(1, Math.min(99, Number(qtd) || 1));
    setItens((atual) =>
      atual.map((i) => (i.id === id ? { ...i, qtd: nova } : i))
    );
  }

  function limpar() {
    setItens([]);
  }

  const { quantidadeTotal, subtotal } = useMemo(() => {
    const q = itens.reduce((acc, i) => acc + i.qtd, 0);
    const s = itens.reduce((acc, i) => acc + i.qtd * (i.price || 0), 0);
    return { quantidadeTotal: q, subtotal: s };
  }, [itens]);

  return (
    <CartContext.Provider
      value={{
        itens,
        quantidadeTotal,
        subtotal,
        adicionar,
        remover,
        mudarQtd,
        limpar,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
