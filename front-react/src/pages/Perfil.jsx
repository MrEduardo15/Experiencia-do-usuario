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

  function formatarData(data) {
    if (!data) {
        return ''
    }

    if (data.includes('/')) {
        return data
    }

    const partes = data.split('-')

    if (partes.length !== 3) {
        return data
    }

    return `${partes[2]}/${partes[1]}/${partes[0]}`
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
            <p>{formatarData(usuario.dataNascimento)}</p>
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