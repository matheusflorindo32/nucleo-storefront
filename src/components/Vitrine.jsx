import ProdutoCard from "./ProdutoCard.jsx";
import FiltroCategorias from "./FiltroCategorias.jsx";

const produtos = [
  {
    id: 1,
    nome: "Notebook Núcleo Pro",
    preco: 4599.9,
    parcelas: "12x R$ 383,32 sem juros",
    avaliacao: 4.9,
    categoria: "Computadores",
    descricao:
      "Alta performance para estudos, programação e projetos digitais.",
    freteGratis: true,
    destaque: "Mais vendido",
    imagem:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    nome: "Mouse Apex Precision",
    preco: 189.9,
    parcelas: "4x R$ 47,47",
    avaliacao: 4.7,
    categoria: "Periféricos",
    descricao: "Precisão e conforto para longas jornadas de desenvolvimento.",
    freteGratis: true,
    destaque: "Alta precisão",
    imagem:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    nome: "Teclado TADS Mechanical",
    preco: 349.9,
    parcelas: "6x R$ 58,32",
    avaliacao: 4.8,
    categoria: "Periféricos",
    descricao:
      "Teclado mecânico ideal para programação, estudo e produtividade.",
    freteGratis: false,
    destaque: "Dev choice",
    imagem:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    nome: "Monitor Científico View 24",
    preco: 899.9,
    parcelas: "10x R$ 89,99",
    avaliacao: 4.6,
    categoria: "Monitores",
    descricao: "Tela ampla para código, pesquisa, dashboards e aulas online.",
    freteGratis: true,
    destaque: "Full HD",
    imagem:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    nome: "Headset Tropa Comms",
    preco: 279.9,
    parcelas: "5x R$ 55,98",
    avaliacao: 4.5,
    categoria: "Áudio",
    descricao: "Comunicação limpa para aulas, reuniões e trabalho remoto.",
    freteGratis: false,
    destaque: "Áudio limpo",
    imagem:
      "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    nome: "Webcam Aula Pro HD",
    preco: 219.9,
    parcelas: "4x R$ 54,97",
    avaliacao: 4.4,
    categoria: "Imagem",
    descricao:
      "Imagem nítida para apresentações, reuniões e ensino a distância.",
    freteGratis: true,
    destaque: "Home office",
    imagem:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 7,
    nome: "SSD NVMe Núcleo 1TB",
    preco: 559.0,
    parcelas: "10x R$ 55,90",
    avaliacao: 4.9,
    categoria: "Armazenamento",
    descricao:
      "Velocidade extrema para boot, compilação e cargas de dados pesadas.",
    freteGratis: true,
    destaque: "Ultra rápido",
    imagem:
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    nome: "Cadeira Ergo Code",
    preco: 1499.0,
    parcelas: "12x R$ 124,92",
    avaliacao: 4.7,
    categoria: "Ergonomia",
    descricao:
      "Postura correta para horas seguidas escrevendo código com conforto.",
    freteGratis: true,
    destaque: "Conforto pro",
    imagem:
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 9,
    nome: "Mesa Digitalizadora Studio",
    preco: 829.9,
    parcelas: "10x R$ 82,99",
    avaliacao: 4.6,
    categoria: "Imagem",
    descricao:
      "Para design, UI e ilustração digital com sensibilidade profissional.",
    freteGratis: false,
    destaque: "Criativos",
    imagem:
      "https://images.unsplash.com/photo-1561883088-039e53143d73?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 10,
    nome: "Hub USB-C 8 em 1",
    preco: 299.0,
    parcelas: "5x R$ 59,80",
    avaliacao: 4.5,
    categoria: "Acessórios",
    descricao:
      "HDMI, USB 3.0, leitor SD e energia para o setup completo do dev.",
    freteGratis: true,
    destaque: "Setup pro",
    imagem:
      "https://images.unsplash.com/photo-1625961332771-3f40b0e2bdcf?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 11,
    nome: "Livro Clean Architecture",
    preco: 159.9,
    parcelas: "3x R$ 53,30",
    avaliacao: 4.9,
    categoria: "Livros técnicos",
    descricao:
      "Leitura essencial para arquitetar sistemas robustos e escaláveis.",
    freteGratis: false,
    destaque: "Essencial",
    imagem:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 12,
    nome: "Roteador Wi-Fi 6 Mesh",
    preco: 1199.0,
    parcelas: "10x R$ 119,90",
    avaliacao: 4.6,
    categoria: "Redes",
    descricao:
      "Cobertura estável para home office, lives e ambientes de pesquisa.",
    freteGratis: true,
    destaque: "Wi-Fi 6",
    imagem:
      "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?auto=format&fit=crop&w=600&q=80",
  },
];

const categoriasUnicas = ["Todos", ...new Set(produtos.map((p) => p.categoria))];

function Vitrine() {
  return (
    <section className="vitrine" id="vitrine">
      <div className="vitrine-header">
        <span className="vitrine-eyebrow">Catálogo</span>
        <h2 className="vitrine-title">Vitrine de Produtos</h2>
        <p className="vitrine-sub">
          Seleção curada para estudantes, devs e pesquisadores —{" "}
          {produtos.length} produtos disponíveis.
        </p>
      </div>

      <FiltroCategorias categorias={categoriasUnicas} ativa="Todos" />

      <div className="vitrine-grid">
        {produtos.map((produto) => (
          <ProdutoCard key={produto.id} produto={produto} />
        ))}
      </div>
    </section>
  );
}

export default Vitrine;
