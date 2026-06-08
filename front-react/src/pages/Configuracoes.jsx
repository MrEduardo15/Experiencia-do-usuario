import { useState } from 'react'

// Componente de configurações de conta que permite editar dados pessoais do usuário.
function Configuracoes({ voltar, usuario, setUsuario }) {
  const [nome, setNome] = useState(usuario.nome)
  const [telefone, setTelefone] = useState(usuario.telefone)
  const [email, setEmail] = useState(usuario.email)
  const [mensagem, setMensagem] = useState('')

  function salvarAlteracoes(event) {
    event.preventDefault()

    setUsuario({
      nome,
      telefone,
      email
    })

    setMensagem('Alterações salvas com sucesso!')
  }

  // Formata o telefone digitado para o padrão brasileiro (00) 00000-0000.
  function formatarTelefone(valor) {
  const numeros = valor.replace(/\D/g, '')

  if (numeros.length <= 2) {
    return numeros
  }

  if (numeros.length <= 7) {
    return `(${numeros.slice(0, 2)}) ${numeros.slice(2)}`
  }

  return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7, 11)}`
  }

  return (
    <>
      <header className="perfil-header">
        <button className="botao-voltar" onClick={voltar}>
          &lt;
        </button>

        <div className="boas-vindas">
          <h1>{usuario.nome}</h1>
          <p>configurações da conta</p>
        </div>
      </header>

      <main className="pagina-configuracoes">
        <section className="card-perfil-config">
          <div className="avatar-config">
            {usuario.nome.charAt(0).toUpperCase()}
          </div>

          <div>
            <h2>{usuario.nome}</h2>
            <p>Edite suas informações pessoais</p>
          </div>
        </section>

        <section className="card-configuracoes">
          <h2>Dados pessoais</h2>

          <form className="form-configuracoes" onSubmit={salvarAlteracoes}>
            <label>Nome</label>
            <input
              type="text"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              placeholder="Digite seu nome"
              required
            />

            <label>Telefone</label>
            <input
            type="tel"
            value={telefone}
            onChange={(event) => setTelefone(formatarTelefone(event.target.value))}
            placeholder="(00) 00000-0000"
            maxLength="15"
            required
            />

            <label>E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Digite seu e-mail"
              required
            />

            {mensagem !== '' && (
              <p className="mensagem-sucesso">{mensagem}</p>
            )}

            <button className="botao-salvar-config" type="submit">
              Salvar alterações
            </button>
          </form>
        </section>
      </main>
    </>
  )
}

export default Configuracoes