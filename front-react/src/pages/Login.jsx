import { useState } from 'react'

function Login({ irParaCadastro, entrar }) {
  // Estados para armazenar os valores dos campos e possíveis mensagens de erro
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')

  // Função executada quando o formulário é enviado
  function fazerLogin(event) {
    // Evita o recarregamento da página ao enviar o formulário
    event.preventDefault()

    // Verifica se os campos de e-mail e senha foram preenchidos
    if (email.trim() === '' || senha.trim() === '') {
      setErro('Preencha e-mail e senha.')
      return
    }

    // Chama a função recebida por props para realizar o login
    entrar()
  }

  return (
    <main className="pagina-login">
      <section className="card-login">

        {/* Logo decorativa da tela de login */}
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

        {/* Título da página */}
        <h1>WELCOME</h1>

        {/* Formulário de login */}
        <form className="form-login" onSubmit={fazerLogin}>

          {/* Campo de e-mail */}
          <label>E-MAIL</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          {/* Campo de senha */}
          <label>SENHA</label>
          <input
            type="password"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
          />

          {/* Informação para o usuário sobre o tamanho mínimo da senha */}
          <small>*Senha com pelo menos 8 caracteres</small>

          {/* Exibe mensagem de erro caso exista */}
          {erro !== '' && <p className="erro-login">{erro}</p>}

          {/* Botão para enviar o formulário */}
          <button type="submit">ENTRAR</button>
        </form>

        {/* Botão para recuperação de senha */}
        <button className="botao-link-login" type="button">
          Esqueci minha senha
        </button>

        {/* Botão para navegar para a tela de cadastro */}
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