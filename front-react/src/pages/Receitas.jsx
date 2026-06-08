import { useState } from 'react'

function Receitas({ voltar, categorias, adicionarMovimentacao }) {
  // Estados responsáveis por armazenar os dados do formulário
  const [categoria, setCategoria] = useState('')
  const [descricao, setDescricao] = useState('')
  const [valor, setValor] = useState('')
  const [data, setData] = useState('')

  // Função executada ao enviar o formulário
  function salvarReceita(event) {
    // Evita o recarregamento da página
    event.preventDefault()

    // Envia os dados da nova receita para o componente pai
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
      {/* Cabeçalho da página */}
      <header className="perfil-header">

        {/* Botão para voltar à tela anterior */}
        <button className="botao-voltar" onClick={voltar}>
          &lt;
        </button>

        {/* Título e descrição da página */}
        <div className="boas-vindas">
          <h1>Receitas</h1>
          <p>Controle o dinheiro que entra</p>
        </div>
      </header>

      <main>
        <section className="card-fluxo">

          {/* Título do formulário */}
          <h3>Adicionar receita</h3>

          {/* Formulário de cadastro de receita */}
          <form className="formulario" onSubmit={salvarReceita}>

            {/* Campo de descrição da receita */}
            <label>Descrição</label>
            <input
              type="text"
              placeholder="Ex: Salário"
              value={descricao}
              onChange={(event) => setDescricao(event.target.value)}
              required
            />

            {/* Campo de valor da receita */}
            <label>Valor</label>
            <input
              type="number"
              placeholder="Ex: 2500"
              value={valor}
              onChange={(event) => setValor(event.target.value)}
              required
            />

            {/* Campo de data da receita */}
            <label>Data</label>
            <input
              type="date"
              value={data}
              onChange={(event) => setData(event.target.value)}
              required
            />

            {/* Seleção da categoria da receita */}
            <label>Categoria</label>
            <select
              value={categoria}
              onChange={(event) => setCategoria(event.target.value)}
              required
            >
              <option value="">Selecione uma categoria</option>

              {/* Gera dinamicamente as opções disponíveis */}
              {categorias.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            {/* Botão para salvar a receita */}
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