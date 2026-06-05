function CategoriaDetalhes({ voltar, categoria, movimentacoes }) {
  const movimentacoesFiltradas = movimentacoes.filter(
    (item) => item.categoria === categoria
  )

  function formatarValor(valor) {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  }

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
          <h1>{categoria}</h1>
          <p>movimentações dessa categoria</p>
        </div>
      </header>

      <main>
        <section className="card-fluxo">
          <h3>Itens cadastrados</h3>

          {movimentacoesFiltradas.length === 0 ? (
            <p>Nenhuma movimentação cadastrada nessa categoria.</p>
          ) : (
            movimentacoesFiltradas.map((item) => (
              <div className="item-extrato" key={item.id}>
                <div>
                  <strong>{item.descricao}</strong>
                  <p>
                    {item.tipo} - {item.data}
                  </p>
                </div>

                <span className={pegarClasseValor(item.tipo)}>
                  {formatarValor(item.valor)}
                </span>
              </div>
            ))
          )}
        </section>
      </main>
    </>
  )
}

export default CategoriaDetalhes