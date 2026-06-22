import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext.jsx";

function CarrinhoIcone() {
  const { quantidadeTotal } = useCart();

  return (
    <Link
      to="/carrinho"
      className="carrinho-icone"
      aria-label={`Abrir carrinho (${quantidadeTotal} ${
        quantidadeTotal === 1 ? "item" : "itens"
      })`}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
      {quantidadeTotal > 0 && (
        <span className="carrinho-icone-badge" aria-hidden="true">
          {quantidadeTotal > 99 ? "99+" : quantidadeTotal}
        </span>
      )}
    </Link>
  );
}

export default CarrinhoIcone;
