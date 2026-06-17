function Selo({ texto, cor = "#1E5AA8" }) {
  return (
    <span className="selo" style={{ backgroundColor: cor }}>
      {texto}
    </span>
  );
}

export default Selo;
