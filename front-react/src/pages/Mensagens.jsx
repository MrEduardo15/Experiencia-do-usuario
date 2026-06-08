import { useState } from 'react'

function Mensagens({ voltar, usuario }) {
  // Estado que armazena o texto digitado pelo usuário
  const [novaMensagem, setNovaMensagem] = useState('')

  // Estado que armazena todas as mensagens do chat
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

  // Função responsável por enviar uma nova mensagem
  function enviarMensagem(event) {
    // Impede o recarregamento da página ao enviar o formulário
    event.preventDefault()

    // Verifica se a mensagem está vazia
    if (novaMensagem.trim() === '') {
      return
    }

    // Cria o objeto da mensagem enviada pelo usuário
    const mensagemUsuario = {
      id: Date.now(),
      autor: 'usuario',
      texto: novaMensagem
    }

    // Simula uma resposta automática do sistema
    const respostaSistema = {
      id: Date.now() + 1,
      autor: 'sistema',
      texto: 'Entendi! Essa é uma simulação de atendimento. Para melhorar seu controle financeiro, revise suas categorias e acompanhe o extrato.'
    }

    // Adiciona a mensagem do usuário e a resposta do sistema à lista de mensagens
    setMensagens([...mensagens, mensagemUsuario, respostaSistema])

    // Limpa o campo de texto após o envio
    setNovaMensagem('')
  }

  return (
    <>
      {/* Cabeçalho da página de mensagens */}
      <header className="perfil-header">

        {/* Botão para voltar à tela anterior */}
        <button className="botao-voltar" onClick={voltar}>
          &lt;
        </button>

        {/* Foto de perfil representada pela primeira letra do nome do usuário */}
        <div className="foto-perfil">
          <span>{usuario.nome.charAt(0).toUpperCase()}</span>
        </div>

        {/* Área de identificação do usuário */}
        <div className="boas-vindas">
          <h1>{usuario.nome.split(' ')[0]}</h1>
          <p>mensagens</p>
        </div>
      </header>

      <main className="pagina-mensagens">
        <section className="card-chat">

          {/* Informações do chat */}
          <div className="topo-chat">
            <h2>Assistente financeiro</h2>
            <p>Atendimento simulado</p>
          </div>

          {/* Lista de mensagens do chat */}
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

          {/* Formulário para envio de novas mensagens */}
          <form className="form-mensagem" onSubmit={enviarMensagem}>
            <input
              type="text"
              placeholder="Digite sua mensagem..."
              value={novaMensagem}
              onChange={(event) => setNovaMensagem(event.target.value)}
            />

            {/* Botão para enviar a mensagem */}
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