function Perfil({ voltar, usuario }) {
  function esconderEmail(email) {
    const partes = email.split('@')

    if (partes.length !== 2) {
      return email
    }

    const nome = partes[0]
    const dominio = partes[1]

    const inicio = nome.slice(0, 3)

    return `${inicio}**********@${dominio}`
  }

  return (
    <>
      <header className="perfil-header">
        <button className="botao-voltar" onClick={voltar}>
          &lt;
        </button>

        <div className="foto-perfil">
          <span>{usuario.nome.charAt(0).toUpperCase()}</span>
        </div>

        <div className="boas-vindas">
          <h1>{usuario.nome.split(' ')[0]}</h1>
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

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#10BE00"
          >
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#10BE00"
          >
            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 3H6v2h8v-2zm-4 3H6v2h4v-2z" />
          </svg>
        </div>
      </header>

      <main className="pagina-perfil">
        <section className="titulo-info-pessoal">
          INFORMAÇÕES PESSOAIS
        </section>

        <section className="dados-perfil">
          <div className="grupo-info">
            <h2>NOME COMPLETO:</h2>
            <p>{usuario.nome}</p>
          </div>

          <div className="grupo-info">
            <h2>DATA DE NASCIMENTO:</h2>
            <p>{usuario.dataNascimento}</p>
          </div>

          <div className="grupo-info">
            <h2>EMAIL:</h2>
            <p>{esconderEmail(usuario.email)}</p>
          </div>

          <div className="grupo-info">
            <h2>TELEFONE:</h2>
            <p>{usuario.telefone}</p>
          </div>
        </section>
      </main>
    </>
  )
}

export default Perfil