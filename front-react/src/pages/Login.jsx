import { useState } from 'react'

function Login({ irParaCadastro, entrar }) {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')

  function fazerLogin(event) {
    event.preventDefault()

    if (email.trim() === '' || senha.trim() === '') {
      setErro('Preencha e-mail e senha.')
      return
    }

    entrar()
  }

  return (
    <main className="pagina-login">
      <section className="card-login">
        <div className="logo-login">
          <div className="linha-logo"></div>

          <div className="barras-logo barras-baixo">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="barras-logo barras-cima">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <h1>WELCOME</h1>

        <form className="form-login" onSubmit={fazerLogin}>
          <label>E-MAIL</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <label>SENHA</label>
          <input
            type="password"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
          />

          <small>*Senha com pelo menos 8 caracteres</small>

          {erro !== '' && <p className="erro-login">{erro}</p>}

          <button type="submit">ENTRAR</button>
        </form>

        <button className="botao-link-login" type="button">
          Esqueci minha senha
        </button>

        <button
          className="botao-cadastro-link"
          type="button"
          onClick={irParaCadastro}
        >
          Não possui uma conta? Cadastre-se
        </button>
      </section>
    </main>
  )
}

export default Login