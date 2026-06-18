import { Link } from "react-router-dom";

function NaoEncontrado() {
  return (
    <section className="nao-encontrado">
      <span className="nao-encontrado-codigo">404</span>
      <h1 className="nao-encontrado-titulo">Página não encontrada</h1>
      <p className="nao-encontrado-texto">
        O endereço acessado não existe ou foi movido.
      </p>
      <Link to="/" className="nao-encontrado-cta">
        Voltar para a loja
      </Link>
    </section>
  );
}

export default NaoEncontrado;
