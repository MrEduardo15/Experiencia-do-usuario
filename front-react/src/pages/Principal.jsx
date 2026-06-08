function Principal({
  usuario,
  saldo,
  receita,
  despesas,
  investimentos,
  irParaExtrato,
  irParaReceitas,
  irParaDespesas,
  irParaInvestimentos,
  irParaConfiguracoes,
  irParaCategorias,
  irParaTabelaGastos,
  irParaPerfil,
  irParaConselhos,
  irParaNotificacoes,
  irParaPesquisa,
  irParaMensagens
}) {

  // Função que gera as iniciais do nome do usuário
  // Exemplo: "João Silva" -> "JS"
  function pegarIniciais(nome) {
    return nome
      .split(' ')
      .map((parte) => parte.charAt(0))
      .join('')
      .substring(0, 2)
      .toUpperCase()
  }

  // Função que formata valores monetários para o padrão brasileiro
  function formatarValor(valor) {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  // Calcula a altura das barras do gráfico proporcionalmente ao maior valor
  function calcularAltura(valor) {
    const maiorValor = Math.max(receita, despesas, investimentos)

    // Evita divisão por zero quando não existem valores
    if (maiorValor === 0) {
      return '10px'
    }

    const altura = (valor / maiorValor) * 130

    return `${altura}px`
  }

  return (
    <>
      {/* Cabeçalho principal da aplicação */}
      <header className="perfil-header">

        {/* Botão para acessar o perfil do usuário */}
        <button
          className="botao-perfil"
          onClick={irParaPerfil}
          type="button"
        >
          <div className="foto-perfil">
            <span>{pegarIniciais(usuario.nome)}</span>
          </div>
        </button>

        {/* Mensagem de boas-vindas */}
        <div className="boas-vindas">
          <h1>{usuario.nome}</h1>
          <p>Olá, que bom te ver por aqui!</p>
        </div>

        {/* Grupo de ícones de acesso rápido */}
        <div className="icones-menu">

          {/* Botão de pesquisa */}
          <button
            className="botao-icone-header"
            onClick={irParaPesquisa}
            type="button"
            aria-label="Abrir pesquisa"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#10BE00"
            >
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          </button>

          {/* Botão de notificações */}
          <button
            className="botao-icone-header"
            onClick={irParaNotificacoes}
            type="button"
            aria-label="Abrir notificações"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#10BE00"
            >
              <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
            </svg>
          </button>

          {/* Botão de mensagens */}
          <button
            className="botao-icone-header"
            onClick={irParaMensagens}
            type="button"
            aria-label="Abrir mensagens"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#10BE00"
            >
              <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 3H6v2h8v-2zm-4 3H6v2h4v-2z" />
            </svg>
          </button>
        </div>
      </header>

      <main>

        {/* Área que exibe o saldo total */}
        <section className="secao-saldo">
          <h2 className="titulo-saldo">Saldo</h2>
          <p className="valor-saldo">{formatarValor(saldo)}</p>
        </section>

        {/* Link para a tela de extrato */}
        <button className="link-extrato" onClick={irParaExtrato}>
          <span>Extrato</span>
          <span className="seta">&gt;</span>
        </button>

        <section className="area-dashboard">

          {/* Coluna lateral contendo gráfico e configurações */}
          <div className="coluna-grafico">

            {/* Card do gráfico de fluxo de caixa */}
            <section className="card-fluxo">
              <h3>Fluxo de caixa</h3>

              <div className="container-grafico">

                {/* Barra de despesas */}
                <div
                  className="barra-grafico barra-despesa"
                  style={{ height: calcularAltura(despesas) }}
                  title={`Despesas: ${formatarValor(despesas)}`}
                ></div>

                {/* Barra de receitas */}
                <div
                  className="barra-grafico barra-receita"
                  style={{ height: calcularAltura(receita) }}
                  title={`Receitas: ${formatarValor(receita)}`}
                ></div>

                {/* Barra de investimentos */}
                <div
                  className="barra-grafico barra-investimento"
                  style={{ height: calcularAltura(investimentos) }}
                  title={`Investimentos: ${formatarValor(investimentos)}`}
                ></div>
              </div>

              {/* Legenda do gráfico */}
              <div className="legenda">
                <span>
                  <i className="dot-despesa"></i> Despesas
                </span>

                <span>
                  <i className="dot-receita"></i> Receitas
                </span>

                <span>
                  <i className="dot-investimento"></i> Investimentos
                </span>
              </div>
            </section>

            {/* Botão para acessar configurações/dados pessoais */}
            <button className="botao-configuracoes" onClick={irParaConfiguracoes}>
              dados pessoais
            </button>
          </div>

          {/* Grade principal de funcionalidades */}
          <section className="grade-menu">

            {/* Card de receitas */}
            <button className="card-fluxo card-botao" onClick={irParaReceitas}>
              <h3>Receita</h3>
              <p className="valor-card">{formatarValor(receita)}</p>
            </button>

            {/* Card de despesas */}
            <button className="card-fluxo card-botao" onClick={irParaDespesas}>
              <h3>Despesas</h3>
              <p className="valor-card">{formatarValor(despesas)}</p>
            </button>

            {/* Card de investimentos */}
            <button className="card-fluxo card-botao" onClick={irParaInvestimentos}>
              <h3>Investimentos</h3>
              <p className="valor-card">{formatarValor(investimentos)}</p>
            </button>

            {/* Acesso à tabela de gastos */}
            <button
              className="card-fluxo card-botao card-centralizado"
              onClick={irParaTabelaGastos}
            >
              <h3>Tabela de gastos</h3>
            </button>

            {/* Acesso às categorias */}
            <button
              className="card-fluxo card-botao card-centralizado"
              onClick={irParaCategorias}
            >
              <h3>Categorias</h3>
            </button>

            {/* Acesso aos conselhos financeiros */}
            <button
              className="card-fluxo card-botao card-centralizado"
              onClick={irParaConselhos}
            >
              <h3>Conselhos financeiros</h3>
            </button>

          </section>
        </section>
      </main>
    </>
  )
}

export default Principal