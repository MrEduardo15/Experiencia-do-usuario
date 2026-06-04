function Principal({
  saldo,
  receita,
  despesas,
  investimentos,
  irParaExtrato,
  irParaReceitas,
  irParaDespesas,
  irParaInvestimentos,
  irParaConfiguracoes
}) {
  const usuario = 'Kamila'
  function formatarValor(valor) {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  }
  return (
    <>
      <header className="perfil-header">
        <a href="#" style={{ textDecoration: 'none' }}>
          <div className="foto-perfil">
            <span>KA</span>
          </div>
        </a>

        <div className="boas-vindas">
            <h1>{usuario}</h1>
          <p>Olá, que bom te ver por aqui!</p>
        </div>

        <div className="icones-menu">
          {/* Ícone da lupa */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#10BE00"
          >
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>

          {/* Ícone do sino */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#10BE00"
          >
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
          </svg>

          {/* Ícone do chat */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#10BE00"
          >
            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 3H6v2h8v-2zm-4 3H6v2h4v-2z" />
          </svg>
        </div>
      </header>

      <main>
        <section className="secao-saldo">
          <h2 className="titulo-saldo">Saldo</h2>
          <p className="valor-saldo">{formatarValor(saldo)}</p>
        </section>

        <button className="link-extrato" onClick={irParaExtrato}>
          <span>Extrato</span>
          <span className="seta">&gt;</span>
        </button>

        <section className="card-fluxo">
          <h3>Fluxo de caixa</h3>

          <div className="container-grafico">
            [Gráfico aqui]
          </div>

          <div className="legenda">
            <span>
              <i className="dot-despesa"></i> Despesas
            </span>
            <span>
              <i className="dot-receita"></i> Receitas
            </span>
          </div>
        </section>

        <section className="container-cards">
          <button className="card-fluxo card-botao" onClick={irParaReceitas}>
            <h3>Receita</h3>
            <p className="valor-card">{formatarValor(receita)}</p>
          </button>

          <button className="card-fluxo card-botao" onClick={irParaDespesas}>
            <h3>Despesas</h3>
            <p className="valor-card">{formatarValor(despesas)}</p>
          </button>

          <button className="card-fluxo card-botao" onClick={irParaInvestimentos}>
            <h3>Investimentos</h3>
            <p className="valor-card">{formatarValor(investimentos)}</p>
          </button>

          <div className="card-fluxo card-mais">
            <h3>Mais</h3>
            <p className="simbolo-mais">+</p>
          </div>
        </section>

        <button className="botao-configuracoes" onClick={irParaConfiguracoes}>
          configurações
        </button>
      </main>
    </>
  )
}

export default Principal