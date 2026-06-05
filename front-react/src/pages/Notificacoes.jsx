function Notificacoes({ voltar, usuario }) {
  const notificacoes = [
    {
      id: 1,
      titulo: 'Nova atualização disponível',
      descricao: 'Agora você pode visualizar seus gastos separados por mês na tabela de gastos.',
      tipo: 'Atualização',
      data: 'Hoje'
    },
    {
      id: 2,
      titulo: 'Relatório mensal pronto',
      descricao: 'Seu resumo financeiro do mês já está disponível para consulta.',
      tipo: 'Resumo',
      data: 'Ontem'
    },
    {
      id: 3,
      titulo: 'Dica financeira da semana',
      descricao: 'Revise seus gastos fixos e veja se existem assinaturas que você não usa mais.',
      tipo: 'Conselho',
      data: '2 dias atrás'
    },
    {
      id: 4,
      titulo: 'Categorias atualizadas',
      descricao: 'Você pode criar novas categorias para organizar melhor suas despesas.',
      tipo: 'Categorias',
      data: '3 dias atrás'
    },
    {
      id: 5,
      titulo: 'Segurança da conta',
      descricao: 'Mantenha seus dados pessoais atualizados na tela de configurações.',
      tipo: 'Conta',
      data: '1 semana atrás'
    }
  ]

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
          <p>notificações</p>
        </div>
      </header>

      <main className="pagina-notificacoes">
        <section className="titulo-notificacoes">
          <h2>Notificações</h2>
          <p>Atualizações, avisos e novidades sobre sua conta.</p>
        </section>

        <section className="lista-notificacoes">
          {notificacoes.map((notificacao) => (
            <article className="card-notificacao" key={notificacao.id}>
              <div className="icone-notificacao">
                !
              </div>

              <div className="conteudo-notificacao">
                <div className="topo-notificacao">
                  <span className="tipo-notificacao">
                    {notificacao.tipo}
                  </span>

                  <span className="data-notificacao">
                    {notificacao.data}
                  </span>
                </div>

                <h3>{notificacao.titulo}</h3>

                <p>{notificacao.descricao}</p>
              </div>
            </article>
          ))}
        </section>
      </main>
    </>
  )
}

export default Notificacoes