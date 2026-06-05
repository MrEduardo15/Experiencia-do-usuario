import { useState } from 'react'

function Receitas({ voltar, categorias, adicionarMovimentacao }) {
  const [categoria, setCategoria] = useState('')
  const [descricao, setDescricao] = useState('')
  const [valor, setValor] = useState('')
  const [data, setData] = useState('')

  function salvarReceita(event) {
    event.preventDefault()

    adicionarMovimentacao({
      tipo: 'receita',
      categoria,
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
          <h1>Receitas</h1>
          <p>Controle o dinheiro que entra</p>
        </div>
      </header>

      <main>
        <section className="card-fluxo">
          <h3>Adicionar receita</h3>

          <form className="formulario" onSubmit={salvarReceita}>
            <label>Descrição</label>
            <input
                type="text"
                placeholder="Ex: Salário"
                value={descricao}
                onChange={(event) => setDescricao(event.target.value)}
                required
            />

            <label>Valor</label>
            <input
                type="number"
                placeholder="Ex: 2500"
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

            <label>Categoria</label>
            <select
                value={categoria}
                onChange={(event) => setCategoria(event.target.value)}
                required
            >
                <option value="">Selecione uma categoria</option>

                {categorias.map((item) => (
                <option key={item} value={item}>
                    {item}
                </option>
                ))}
            </select>

            <button type="submit" className="botao-configuracoes">
                Salvar receita
            </button>
            </form>
        </section>
      </main>
    </>
  )
}

export default Receitas