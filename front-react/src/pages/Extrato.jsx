// Componente que mostra o extrato das movimentações financeiras do usuário.
function Extrato({ voltar, movimentacoes }) {
  function formatarValor(valor) {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  // Define a classe CSS do valor com base no tipo de movimentação para exibir cores diferentes.
  function pegarClasseValor(tipo) {
    if (tipo === 'receita') {
      return 'valor-positivo'
    }

    if (tipo === 'despesa') {
      return 'valor-negativo'
    }

    return 'valor-investimento'
  }

  return (
    <>
      <header className="perfil-header">
        <button className="botao-voltar" onClick={voltar}>
          &lt;
        </button>

        <div className="boas-vindas">
          <h1>Extrato</h1>
          <p>Veja suas movimentações financeiras</p>
        </div>
      </header>

      <main>
        <section className="card-fluxo">
          <h3>Movimentações</h3>

          {movimentacoes.map((item) => (
            <div className="item-extrato" key={item.id}>
              <div>
                <strong>{item.descricao}</strong>
                <p>{item.tipo} - {item.categoria || 'Sem categoria'} - {item.data}</p>
              </div>

              <span className={pegarClasseValor(item.tipo)}>
                {formatarValor(item.valor)}
              </span>
            </div>
          ))}
        </section>
      </main>
    </>
  )
}

export default Extrato