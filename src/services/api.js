// Camada de serviços — centraliza o acesso à API pública DummyJSON.
// Mantém os componentes/hooks livres de URLs hardcoded e facilita testes.

const BASE_URL = "https://dummyjson.com";

// Categorias usadas pela vitrine (loja de tecnologia) com rótulos em português.
export const CATEGORIAS_TECH = [
  { id: "smartphones", label: "Smartphones" },
  { id: "laptops", label: "Notebooks" },
  { id: "tablets", label: "Tablets" },
  { id: "mobile-accessories", label: "Áudio & Acessórios" },
];

export function rotularCategoria(cat) {
  const encontrada = CATEGORIAS_TECH.find((c) => c.id === cat);
  return encontrada ? encontrada.label : cat;
}

async function getJSON(url) {
  const resposta = await fetch(url);
  if (!resposta.ok) {
    throw new Error(`Falha na requisição: ${resposta.status}`);
  }
  return resposta.json();
}

// Busca produtos das categorias de tecnologia e devolve uma lista única.
export async function buscarProdutosTech({ porCategoria = 5, limite = 20 } = {}) {
  const respostas = await Promise.all(
    CATEGORIAS_TECH.map((c) =>
      getJSON(`${BASE_URL}/products/category/${c.id}`)
    )
  );
  const variados = respostas.flatMap((r) =>
    (r.products || []).slice(0, porCategoria)
  );
  return variados.slice(0, limite);
}

export async function buscarProdutoPorId(id) {
  return getJSON(`${BASE_URL}/products/${id}`);
}

// Login real na API pública DummyJSON.
// Retorna { accessToken, refreshToken, id, username, firstName, lastName, email, image, ... }
export async function loginDummy(username, password) {
  const resposta = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password, expiresInMins: 60 }),
  });
  if (!resposta.ok) {
    throw new Error("Credenciais inválidas");
  }
  return resposta.json();
}

export async function buscarDestaquesPorCategoria(categorias = []) {
  const respostas = await Promise.all(
    categorias.map((cat) =>
      getJSON(
        `${BASE_URL}/products/category/${cat}?limit=1&select=id,title,thumbnail,category,price`
      ).catch(() => null)
    )
  );
  return respostas
    .filter(Boolean)
    .map((d) => d.products?.[0])
    .filter(Boolean);
}
