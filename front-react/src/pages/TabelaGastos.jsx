function TabelaGastos({ voltar, movimentacoes }) {
  const despesas = movimentacoes.filter((item) => item.tipo === 'despesa')

  const nomesMeses = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro'
  ]

  function formatarValor(valor) {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  function pegarNomeMes(data) {
    const dataObj = new Date(data + 'T00:00:00')
    return nomesMeses[dataObj.getMonth()]
  }

  function agruparPorMes() {
    const grupos = {}

    despesas.forEach((despesa) => {
      const mes = pegarNomeMes(despesa.data)

      if (!grupos[mes]) {
        grupos[mes] = []
      }

      grupos[mes].push(despesa)
    })

    return grupos
  }

  const despesasPorMes = agruparPorMes()

  return (
    <>
      <header className="perfil-header">
        <button className="botao-voltar" onClick={voltar}>
          &lt;
        </button>

        <div className="boas-vindas">
          <h1>Kamila</h1>
          <p>tabela de gastos</p>
        </div>

        <div className="icones-menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#10BE00"
          >
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#10BE00"
          >
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
          </svg>

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

      <main className="pagina-gastos">
        <section className="card-resumo-gastos">
          <h2>Despesas</h2>
          <strong>
            {formatarValor(
              despesas.reduce((total, item) => total + item.valor, 0)
            )}
          </strong>
        </section>

        {Object.keys(despesasPorMes).length === 0 ? (
          <section className="card-fluxo">
            <p>Nenhuma despesa cadastrada ainda.</p>
          </section>
        ) : (
          Object.entries(despesasPorMes).map(([mes, listaDespesas]) => {
            const cincoMaiores = [...listaDespesas]
              .sort((a, b) => b.valor - a.valor)
              .slice(0, 5)

            const maiorValor = Math.max(
              ...cincoMaiores.map((item) => item.valor)
            )

            return (
              <section className="bloco-mes-gastos" key={mes}>
                <h2>{mes}</h2>

                <div className="card-grafico-gastos">
                  <div className="grafico-gastos">
                    {cincoMaiores.map((despesa) => {
                      const altura =
                        maiorValor === 0
                          ? 10
                          : (despesa.valor / maiorValor) * 90

                      return (
                        <div className="gasto-coluna" key={despesa.id}>
                          <div
                            className="barra-gasto"
                            style={{ height: `${altura}px` }}
                            title={`${despesa.descricao}: ${formatarValor(
                              despesa.valor
                            )}`}
                          ></div>

                          <span>{despesa.categoria || despesa.descricao}</span>
                        </div>
                      )
                    })}
                  </div>

                  <div className="legenda-gastos">
                    <span>
                      <i></i>
                      Despesas de {mes}
                    </span>
                  </div>
                </div>
              </section>
            )
          })
        )}

        <button className="botao-flutuante-gasto">
          +
        </button>
      </main>
    </>
  )
}

export default TabelaGastos