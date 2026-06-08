function TabelaGastos({ voltar, usuario, movimentacoes }) {

  // Filtra apenas as movimentações do tipo despesa
  const despesas = movimentacoes.filter((item) => item.tipo === 'despesa')

  // Vetor com os nomes dos meses utilizados para exibição
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

  // Formata valores monetários para o padrão brasileiro
  function formatarValor(valor) {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  // Recebe uma data e retorna o nome do mês correspondente
  function pegarNomeMes(data) {
    const dataObj = new Date(data + 'T00:00:00')
    return nomesMeses[dataObj.getMonth()]
  }

  // Agrupa todas as despesas por mês
  function agruparPorMes() {
    const grupos = {}

    despesas.forEach((despesa) => {
      const mes = pegarNomeMes(despesa.data)

      // Cria o grupo do mês caso ele ainda não exista
      if (!grupos[mes]) {
        grupos[mes] = []
      }

      // Adiciona a despesa ao respectivo mês
      grupos[mes].push(despesa)
    })

    return grupos
  }

  // Objeto contendo todas as despesas organizadas por mês
  const despesasPorMes = agruparPorMes()

  return (
    <>
      {/* Cabeçalho da página */}
      <header className="perfil-header">

        {/* Botão para retornar à tela anterior */}
        <button className="botao-voltar" onClick={voltar}>
          &lt;
        </button>

        {/* Informações do usuário */}
        <div className="boas-vindas">
          <h1>{usuario.nome}</h1>
          <p>tabela de gastos</p>
        </div>
      </header>

      <main className="pagina-gastos">

        {/* Card que exibe o valor total das despesas */}
        <section className="card-resumo-gastos">
          <h2>Despesas</h2>

          <strong>
            {formatarValor(
              despesas.reduce((total, item) => total + item.valor, 0)
            )}
          </strong>
        </section>

        {/* Verifica se existem despesas cadastradas */}
        {Object.keys(despesasPorMes).length === 0 ? (

          <section className="card-fluxo">
            <p>Nenhuma despesa cadastrada ainda.</p>
          </section>

        ) : (

          // Percorre todos os meses que possuem despesas
          Object.entries(despesasPorMes).map(([mes, listaDespesas]) => {

            // Seleciona as cinco maiores despesas do mês
            const cincoMaiores = [...listaDespesas]
              .sort((a, b) => b.valor - a.valor)
              .slice(0, 5)

            // Obtém o maior valor para calcular a escala do gráfico
            const maiorValor = Math.max(
              ...cincoMaiores.map((item) => item.valor)
            )

            return (
              <section className="bloco-mes-gastos" key={mes}>

                {/* Nome do mês */}
                <h2>{mes}</h2>

                <div className="card-grafico-gastos">
                  <div className="grafico-gastos">

                    {/* Gera uma barra para cada uma das maiores despesas */}
                    {cincoMaiores.map((despesa) => {

                      // Calcula a altura proporcional da barra
                      const altura =
                        maiorValor === 0
                          ? 10
                          : (despesa.valor / maiorValor) * 90

                      return (
                        <div className="gasto-coluna" key={despesa.id}>

                          {/* Barra do gráfico */}
                          <div
                            className="barra-gasto"
                            style={{ height: `${altura}px` }}
                            title={`${despesa.descricao}: ${formatarValor(
                              despesa.valor
                            )}`}
                          ></div>

                          {/* Categoria ou descrição da despesa */}
                          <span>
                            {despesa.categoria || despesa.descricao}
                          </span>
                        </div>
                      )
                    })}
                  </div>

                  {/* Legenda do gráfico */}
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