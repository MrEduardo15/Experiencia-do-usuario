function TabelaGastos({ voltar, usuario, movimentacoes }) {
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
            <h1>{usuario.nome}</h1>
            <p>tabela de gastos</p>
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
      </main>
    </>
  )
}

export default TabelaGastos