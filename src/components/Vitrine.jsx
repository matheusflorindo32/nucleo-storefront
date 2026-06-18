import ProdutoCard from "./ProdutoCard.jsx";

const produtos = [
  {
    id: 1,
    nome: "Notebook Núcleo Pro",
    preco: 4599.9,
    categoria: "Computadores",
    descricao:
      "Alta performance para estudos, programação e projetos digitais.",
    freteGratis: true,
    destaque: "Mais vendido",
    imagem:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    nome: "Mouse Apex Precision",
    preco: 189.9,
    categoria: "Periféricos",
    descricao:
      "Precisão e conforto para longas jornadas de desenvolvimento.",
    freteGratis: true,
    destaque: "Alta precisão",
    imagem:
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    nome: "Teclado TADS Mechanical",
    preco: 349.9,
    categoria: "Periféricos",
    descricao:
      "Teclado mecânico ideal para programação, estudo e produtividade.",
    freteGratis: false,
    destaque: "Dev choice",
    imagem:
      "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    nome: "Monitor Científico View 24",
    preco: 899.9,
    categoria: "Monitores",
    descricao:
      "Tela ampla para código, pesquisa, dashboards e aulas online.",
    freteGratis: true,
    destaque: "Full HD",
    imagem:
      "https://images.unsplash.com/photo-1546538915-a9e2c8d0a1f5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    nome: "Headset Tropa Comms",
    preco: 279.9,
    categoria: "Áudio",
    descricao:
      "Comunicação limpa para aulas, reuniões e trabalho remoto.",
    freteGratis: false,
    destaque: "Áudio limpo",
    imagem:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    nome: "Webcam Aula Pro HD",
    preco: 219.9,
    categoria: "Imagem",
    descricao:
      "Imagem nítida para apresentações, reuniões e ensino a distância.",
    freteGratis: true,
    destaque: "Home office",
    imagem:
      "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?auto=format&fit=crop&w=800&q=80",
  },
];

function Vitrine() {
  return (
    <section className="vitrine">
      <div className="vitrine-header">
        <h2 className="vitrine-title">Vitrine de Produtos</h2>
        <p className="vitrine-sub">
          Seleção curada para estudantes, devs e pesquisadores.
        </p>
      </div>

      <div className="vitrine-grid">
        {produtos.map((produto) => (
          <ProdutoCard key={produto.id} produto={produto} />
        ))}
      </div>
    </section>
  );
}

export default Vitrine;
