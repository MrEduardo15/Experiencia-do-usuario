import { useState } from 'react'

function Categorias({ voltar, categorias, adicionarCategoria, abrirCategoria, usuario }) {
  const [novaCategoria, setNovaCategoria] = useState('')

  function salvarCategoria(event) {
    event.preventDefault()

    adicionarCategoria(novaCategoria)
    setNovaCategoria('')
  }

  return (
    <>
      <header className="perfil-header">
        <button className="botao-voltar" onClick={voltar}>
          &lt;
        </button>

        <div className="boas-vindas">
          <h1>{usuario.nome}</h1>
          <p>categorias</p>
        </div>
      </header>

      <main className="pagina-categorias">
        <section className="grade-categorias">
          {categorias.map((categoria) => (
            <button
              className="card-categoria"
              key={categoria}
              onClick={() => abrirCategoria(categoria)}
              type="button"
            >
              {categoria}
            </button>
          ))}
        </section>

        <form className="form-nova-categoria" onSubmit={salvarCategoria}>
          <input
            type="text"
            placeholder="Digite uma nova categoria"
            value={novaCategoria}
            onChange={(event) => setNovaCategoria(event.target.value)}
          />

          <button className="botao-nova-categoria" type="submit">
            nova categoria
          </button>
        </form>
      </main>
    </>
  )
}

export default Categorias