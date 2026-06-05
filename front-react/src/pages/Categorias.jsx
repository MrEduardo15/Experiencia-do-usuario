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