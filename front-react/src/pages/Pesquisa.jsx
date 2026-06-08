import { useState } from 'react'

function Pesquisa({ voltar, usuario, movimentacoes, categorias }) {
  // Estado responsável por armazenar o texto digitado na pesquisa
  const [termoPesquisa, setTermoPesquisa] = useState('')

  // Função que formata valores numéricos para o padrão monetário brasileiro
  function formatarValor(valor) {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  // Filtra as movimentações de acordo com o termo digitado pelo usuário
  const movimentacoesFiltradas = movimentacoes.filter((item) => {
    const termo = termoPesquisa.toLowerCase()

    return (
      item.descricao.toLowerCase().includes(termo) ||
      item.tipo.toLowerCase().includes(termo) ||
      item.data.toLowerCase().includes(termo) ||
      (item.categoria && item.categoria.toLowerCase().includes(termo))
    )
  })

  // Filtra as categorias de acordo com o termo pesquisado
  const categoriasFiltradas = categorias.filter((categoria) =>
    categoria.toLowerCase().includes(termoPesquisa.toLowerCase())
  )

  // Define a classe CSS que será aplicada ao valor conforme o tipo da movimentação
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
      {/* Cabeçalho da tela de pesquisa */}
      <header className="header-pesquisa">

        {/* Botão para retornar à tela anterior */}
        <button className="botao-voltar" onClick={voltar}>
          &lt;
        </button>

        {/* Título da página */}
        <h1>pesquisa</h1>

        {/* Campo de pesquisa */}
        <input
          type="text"
          placeholder="Digite o que quer buscar"
          value={termoPesquisa}
          onChange={(event) => setTermoPesquisa(event.target.value)}
          autoFocus
        />
      </header>

      <main className="pagina-pesquisa">

        {/* Exibe mensagem inicial quando nenhuma pesquisa foi realizada */}
        {termoPesquisa === '' ? (
          <section className="estado-pesquisa">
            <h2>Olá, {usuario.nome.split(' ')[0]}</h2>
            <p>Pesquise por despesas, receitas, investimentos ou categorias.</p>
          </section>
        ) : (
          <>
            {/* Seção de resultados das movimentações */}
            <section className="resultado-bloco">
              <h2>Movimentações encontradas</h2>

              {/* Verifica se existem movimentações encontradas */}
              {movimentacoesFiltradas.length === 0 ? (
                <p className="texto-vazio">Nenhuma movimentação encontrada.</p>
              ) : (
                movimentacoesFiltradas.map((item) => (
                  <div className="item-extrato" key={item.id}>
                    <div>

                      {/* Descrição da movimentação */}
                      <strong>{item.descricao}</strong>

                      {/* Informações complementares */}
                      <p>
                        {item.tipo} - {item.categoria || 'Sem categoria'} - {item.data}
                      </p>
                    </div>

                    {/* Valor da movimentação com estilo baseado no tipo */}
                    <span className={pegarClasseValor(item.tipo)}>
                      {formatarValor(item.valor)}
                    </span>
                  </div>
                ))
              )}
            </section>

            {/* Seção de resultados das categorias */}
            <section className="resultado-bloco">
              <h2>Categorias encontradas</h2>

              {/* Verifica se existem categorias encontradas */}
              {categoriasFiltradas.length === 0 ? (
                <p className="texto-vazio">Nenhuma categoria encontrada.</p>
              ) : (
                <div className="resultado-categorias">

                  {/* Exibe cada categoria encontrada */}
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