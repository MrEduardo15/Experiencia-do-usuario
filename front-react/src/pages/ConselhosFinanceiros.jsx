// Componente que exibe uma lista de conselhos financeiros estáticos para o usuário.
function ConselhosFinanceiros({ voltar, usuario }) {
  const conselhos = [
    {
      titulo: 'Controle seus gastos',
      texto: 'Anote suas despesas do dia a dia para entender para onde seu dinheiro está indo.',
      categoria: 'Organização'
    },
    {
      titulo: 'Evite compras por impulso',
      texto: 'Antes de comprar algo, espere alguns minutos e pense se aquilo é realmente necessário.',
      categoria: 'Consumo'
    },
    {
      titulo: 'Separe uma reserva de emergência',
      texto: 'Guarde uma pequena parte do seu dinheiro todos os meses para imprevistos.',
      categoria: 'Segurança'
    },
    {
      titulo: 'Compare preços',
      texto: 'Pesquisar antes de comprar ajuda a economizar e evitar gastos desnecessários.',
      categoria: 'Economia'
    },
    {
      titulo: 'Defina metas financeiras',
      texto: 'Crie objetivos claros, como juntar dinheiro para uma viagem, curso ou compra importante.',
      categoria: 'Planejamento'
    },
    {
      titulo: 'Revise assinaturas',
      texto: 'Confira serviços que você paga todo mês e veja se ainda usa todos eles.',
      categoria: 'Despesas fixas'
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
          <p>conselhos financeiros</p>
        </div>
      </header>

      <main className="pagina-conselhos">
        <section className="titulo-conselhos">
          <h2>Conselhos financeiros</h2>
          <p>Pequenas atitudes que podem melhorar sua organização financeira.</p>
        </section>

        <section className="grade-conselhos">
          {conselhos.map((conselho) => (
            <article className="card-conselho" key={conselho.titulo}>
              <span className="categoria-conselho">
                {conselho.categoria}
              </span>

              <h3>{conselho.titulo}</h3>

              <p>{conselho.texto}</p>
            </article>
          ))}
        </section>
      </main>
    </>
  )
}

export default ConselhosFinanceiros