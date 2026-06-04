import { useState } from 'react'

function Investimentos({ voltar, adicionarMovimentacao }) {
  const [descricao, setDescricao] = useState('')
  const [valor, setValor] = useState('')
  const [data, setData] = useState('')

  function salvarInvestimento(event) {
    event.preventDefault()

    adicionarMovimentacao({
      tipo: 'investimento',
      descricao,
      valor: Number(valor),
      data
    })
  }

  return (
    <>
      <header className="perfil-header">
        <button className="botao-voltar" onClick={voltar}>
          &lt;
        </button>

        <div className="boas-vindas">
          <h1>Investimentos</h1>
          <p>Acompanhe sua reserva financeira</p>
        </div>
      </header>

      <main>
        <section className="card-fluxo">
          <h3>Novo investimento</h3>

          <form className="formulario" onSubmit={salvarInvestimento}>
            <label>Descrição</label>
            <input
              type="text"
              placeholder="Ex: Reserva mensal"
              value={descricao}
              onChange={(event) => setDescricao(event.target.value)}
              required
            />

            <label>Valor</label>
            <input
              type="number"
              placeholder="Ex: 200"
              value={valor}
              onChange={(event) => setValor(event.target.value)}
              required
            />

            <label>Data</label>
            <input
              type="date"
              value={data}
              onChange={(event) => setData(event.target.value)}
              required
            />

            <button type="submit" className="botao-configuracoes">
              Salvar investimento
            </button>
          </form>
        </section>
      </main>
    </>
  )
}

export default Investimentos