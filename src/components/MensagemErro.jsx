// Bloco padrão de erro com opção de tentar novamente.
function MensagemErro({ mensagem, onTentarNovamente }) {
  return (
    <div className="msg-erro" role="alert">
      <span className="msg-erro-icone" aria-hidden="true">⚠️</span>
      <p className="msg-erro-texto">{mensagem}</p>
      {onTentarNovamente && (
        <button
          type="button"
          className="botao botao-secundario"
          onClick={onTentarNovamente}
        >
          Tentar novamente
        </button>
      )}
    </div>
  );
}

export default MensagemErro;
