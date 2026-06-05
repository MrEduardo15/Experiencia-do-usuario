import { useState } from 'react'

function Mensagens({ voltar, usuario }) {
  const [novaMensagem, setNovaMensagem] = useState('')

  const [mensagens, setMensagens] = useState([
    {
      id: 1,
      autor: 'sistema',
      texto: 'Olá! Eu sou seu assistente financeiro. Posso te ajudar com dúvidas sobre gastos, receitas e organização.'
    },
    {
      id: 2,
      autor: 'sistema',
      texto: 'Uma dica: acompanhe sua tabela de gastos para entender melhor seus maiores custos do mês.'
    }
  ])

  function enviarMensagem(event) {
    event.preventDefault()

    if (novaMensagem.trim() === '') {
      return
    }

    const mensagemUsuario = {
      id: Date.now(),
      autor: 'usuario',
      texto: novaMensagem
    }

    const respostaSistema = {
      id: Date.now() + 1,
      autor: 'sistema',
      texto: 'Entendi! Essa é uma simulação de atendimento. Para melhorar seu controle financeiro, revise suas categorias e acompanhe o extrato.'
    }

    setMensagens([...mensagens, mensagemUsuario, respostaSistema])
    setNovaMensagem('')
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
          <p>mensagens</p>
        </div>
      </header>

      <main className="pagina-mensagens">
        <section className="card-chat">
          <div className="topo-chat">
            <h2>Assistente financeiro</h2>
            <p>Atendimento simulado</p>
          </div>

          <div className="lista-mensagens">
            {mensagens.map((mensagem) => (
              <div
                className={
                  mensagem.autor === 'usuario'
                    ? 'mensagem mensagem-usuario'
                    : 'mensagem mensagem-sistema'
                }
                key={mensagem.id}
              >
                <p>{mensagem.texto}</p>
              </div>
            ))}
          </div>

          <form className="form-mensagem" onSubmit={enviarMensagem}>
            <input
              type="text"
              placeholder="Digite sua mensagem..."
              value={novaMensagem}
              onChange={(event) => setNovaMensagem(event.target.value)}
            />

            <button type="submit">
              Enviar
            </button>
          </form>
        </section>
      </main>
    </>
  )
}

export default Mensagens