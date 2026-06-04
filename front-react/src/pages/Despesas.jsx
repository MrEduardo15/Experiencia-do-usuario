import { useState } from 'react'

function Despesas({ voltar, adicionarMovimentacao }) {
  const [descricao, setDescricao] = useState('')
  const [valor, setValor] = useState('')
  const [data, setData] = useState('')

  function salvarDespesa(event) {
    event.preventDefault()

    adicionarMovimentacao({
      tipo: 'despesa',
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
          <h1>Despesas</h1>
          <p>Cadastre seus gastos</p>
        </div>
      </header>

      <main>
        <section className="card-fluxo">
          <h3>Adicionar despesa</h3>

          <form className="formulario" onSubmit={salvarDespesa}>
            <label>Descrição</label>
            <input
              type="text"
              placeholder="Ex: Mercado"
              value={descricao}
              onChange={(event) => setDescricao(event.target.value)}
              required
            />

            <label>Valor</label>
            <input
              type="number"
              placeholder="Ex: 350"
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
              Salvar despesa
            </button>
          </form>
        </section>
      </main>
    </>
  )
}

export default Despesas