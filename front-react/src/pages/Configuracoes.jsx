function Configuracoes({ voltar }) {
  return (
    <>
      <header className="perfil-header">
        <button className="botao-voltar" onClick={voltar}>
          &lt;
        </button>

        <div className="boas-vindas">
          <h1>Configurações</h1>
          <p>Ajustes da sua conta</p>
        </div>
      </header>

      <main>
        <section className="card-fluxo">
          <h3>Preferências</h3>

          <div className="item-extrato">
            <div>
              <strong>Nome do usuário</strong>
              <p>Kamila</p>
            </div>
          </div>

          <div className="item-extrato">
            <div>
              <strong>Moeda</strong>
              <p>Real brasileiro - R$</p>
            </div>
          </div>

          <div className="item-extrato">
            <div>
              <strong>Notificações</strong>
              <p>Ativadas</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Configuracoes