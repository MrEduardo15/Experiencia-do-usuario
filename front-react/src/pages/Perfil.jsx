function Perfil({ voltar, usuario }) {

  // Função que oculta parte do e-mail para preservar a privacidade do usuário
  function esconderEmail(email) {
    const partes = email.split('@')

    // Verifica se o e-mail possui formato válido
    if (partes.length !== 2) {
      return email
    }

    const nome = partes[0]
    const dominio = partes[1]

    // Mantém apenas os três primeiros caracteres visíveis
    const inicio = nome.slice(0, 3)

    return `${inicio}**********@${dominio}`
  }

  return (
    <>
      {/* Cabeçalho da página de perfil */}
      <header className="perfil-header">

        {/* Botão para retornar à tela anterior */}
        <button className="botao-voltar" onClick={voltar}>
          &lt;
        </button>

        {/* Avatar do usuário exibindo a primeira letra do nome */}
        <div className="foto-perfil">
          <span>{usuario.nome.charAt(0).toUpperCase()}</span>
        </div>

        {/* Área de boas-vindas exibindo apenas o primeiro nome */}
        <div className="boas-vindas">
          <h1>{usuario.nome.split(' ')[0]}</h1>
        </div>
      </header>

      <main className="pagina-perfil">

        {/* Título da seção de dados pessoais */}
        <section className="titulo-info-pessoal">
          INFORMAÇÕES PESSOAIS
        </section>

        {/* Área contendo os dados do usuário */}
        <section className="dados-perfil">

          {/* Nome completo */}
          <div className="grupo-info">
            <h2>NOME COMPLETO:</h2>
            <p>{usuario.nome}</p>
          </div>

          {/* E-mail com parte dos caracteres ocultos */}
          <div className="grupo-info">
            <h2>EMAIL:</h2>
            <p>{esconderEmail(usuario.email)}</p>
          </div>

          {/* Telefone cadastrado */}
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