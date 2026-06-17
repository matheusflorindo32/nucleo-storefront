function Botao({ texto = "Ver produto", onClick, tipo = "primario" }) {
  return (
    <button className={`botao botao-${tipo}`} onClick={onClick} type="button">
      {texto}
    </button>
  );
}

export default Botao;
