import { CATEGORIAS_TECH, rotularCategoria } from "../services/api.js";

// Hook simples — devolve a lista fixa de categorias de tecnologia + helpers.
// Mantido como hook por consistência com o restante da camada de dados
// e para facilitar trocar por fetch de categorias no futuro, se necessário.
export function useCategorias() {
  return {
    categorias: CATEGORIAS_TECH,
    rotular: rotularCategoria,
  };
}
