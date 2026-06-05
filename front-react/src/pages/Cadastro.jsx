import { useState } from 'react'

function Cadastro({ voltarLogin, cadastrarUsuario }) {
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  const [erro, setErro] = useState('')
  const [dataNascimento, setDataNascimento] = useState('')

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

  function fazerCadastro(event) {
    event.preventDefault()

   if (
    nome.trim() === '' ||
    telefone.trim() === '' ||
    dataNascimento.trim() === '' ||
    email.trim() === '' ||
    senha.trim() === '' ||
    confirmarSenha.trim() === ''
    ) {
    setErro('Preencha todos os campos.')
    return
    }

    if (senha.length < 8) {
      setErro('A senha precisa ter pelo menos 8 caracteres.')
      return
    }

    if (senha !== confirmarSenha) {
      setErro('As senhas não são iguais.')
      return
    }

    cadastrarUsuario({
        nome,
        telefone,
        email,
        dataNascimento
    })
  }

  return (
    <main className="pagina-login">
      <section className="card-login card-cadastro">
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

        <h1>CADASTRE-SE</h1>

        <form className="form-login" onSubmit={fazerCadastro}>
          <label>NOME COMPLETO</label>
          <input
            type="text"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />

          <label>TELEFONE</label>
          <input
            type="tel"
            value={telefone}
            onChange={(event) => setTelefone(formatarTelefone(event.target.value))}
            placeholder="(00) 00000-0000"
            maxLength="15"
          />

        <label>DATA DE NASCIMENTO</label>
        <input
            type="date"
            value={dataNascimento}
            onChange={(event) => setDataNascimento(event.target.value)}
        />

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

          <label>CONFIRMAR SENHA</label>
          <input
            type="password"
            value={confirmarSenha}
            onChange={(event) => setConfirmarSenha(event.target.value)}
          />

          <small>*Senha com pelo menos 8 caracteres</small>

          {erro !== '' && <p className="erro-login">{erro}</p>}

          <button type="submit">CADASTRAR</button>
        </form>

        <div className="linha-ou">
          <span></span>
          <p>Realize Login por outras plataformas</p>
          <span></span>
        </div>

        <button className="botao-google" type="button">
          Google
        </button>

        <button className="botao-facebook" type="button">
          Facebook
        </button>

        <button
          className="botao-cadastro-link"
          type="button"
          onClick={voltarLogin}
        >
          Já possui uma conta? Entrar
        </button>
      </section>
    </main>
  )
}

export default Cadastro