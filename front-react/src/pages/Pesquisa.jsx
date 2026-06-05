import { useState } from 'react'

function Pesquisa({ voltar, usuario, movimentacoes, categorias }) {
  const [termoPesquisa, setTermoPesquisa] = useState('')

  function formatarValor(valor) {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  const movimentacoesFiltradas = movimentacoes.filter((item) => {
    const termo = termoPesquisa.toLowerCase()

    return (
      item.descricao.toLowerCase().includes(termo) ||
      item.tipo.toLowerCase().includes(termo) ||
      item.data.toLowerCase().includes(termo) ||
      (item.categoria && item.categoria.toLowerCase().includes(termo))
    )
  })

  const categoriasFiltradas = categorias.filter((categoria) =>
    categoria.toLowerCase().includes(termoPesquisa.toLowerCase())
  )

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
      <header className="header-pesquisa">
        <button className="botao-voltar" onClick={voltar}>
          &lt;
        </button>

        <h1>pesquisa</h1>

        <input
          type="text"
          placeholder="Digite o que quer buscar"
          value={termoPesquisa}
          onChange={(event) => setTermoPesquisa(event.target.value)}
          autoFocus
        />
      </header>

      <main className="pagina-pesquisa">
        {termoPesquisa === '' ? (
          <section className="estado-pesquisa">
            <h2>Olá, {usuario.nome.split(' ')[0]}</h2>
            <p>Pesquise por despesas, receitas, investimentos ou categorias.</p>
          </section>
        ) : (
          <>
            <section className="resultado-bloco">
              <h2>Movimentações encontradas</h2>

              {movimentacoesFiltradas.length === 0 ? (
                <p className="texto-vazio">Nenhuma movimentação encontrada.</p>
              ) : (
                movimentacoesFiltradas.map((item) => (
                  <div className="item-extrato" key={item.id}>
                    <div>
                      <strong>{item.descricao}</strong>
                      <p>
                        {item.tipo} - {item.categoria || 'Sem categoria'} - {item.data}
                      </p>
                    </div>

                    <span className={pegarClasseValor(item.tipo)}>
                      {formatarValor(item.valor)}
                    </span>
                  </div>
                ))
              )}
            </section>

            <section className="resultado-bloco">
              <h2>Categorias encontradas</h2>

              {categoriasFiltradas.length === 0 ? (
                <p className="texto-vazio">Nenhuma categoria encontrada.</p>
              ) : (
                <div className="resultado-categorias">
                  {categoriasFiltradas.map((categoria) => (
                    <span className="tag-categoria-pesquisa" key={categoria}>
                      {categoria}
                    </span>
                  ))}
                </div>
              )}
            </section>
          </>
        )}
      </main>
    </>
  )
}

export default Pesquisa