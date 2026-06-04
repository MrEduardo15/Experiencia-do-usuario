import { useState } from 'react'

import Principal from './pages/Principal.jsx'
import Extrato from './pages/Extrato.jsx'
import Receitas from './pages/Receitas.jsx'
import Despesas from './pages/Despesas.jsx'
import Investimentos from './pages/Investimentos.jsx'
import Configuracoes from './pages/Configuracoes.jsx'

function App() {
  const [pagina, setPagina] = useState('principal')

  const [movimentacoes, setMovimentacoes] = useState([
    {
      id: 1,
      tipo: 'receita',
      descricao: 'Salário',
      valor: 2500,
      data: '2026-05-17'
    },
    {
      id: 2,
      tipo: 'despesa',
      descricao: 'Mercado',
      valor: 350,
      data: '2026-05-18'
    },
    {
      id: 3,
      tipo: 'investimento',
      descricao: 'Reserva mensal',
      valor: 200,
      data: '2026-05-19'
    }
  ])

  const totalReceitas = movimentacoes
    .filter((item) => item.tipo === 'receita')
    .reduce((total, item) => total + item.valor, 0)

  const totalDespesas = movimentacoes
    .filter((item) => item.tipo === 'despesa')
    .reduce((total, item) => total + item.valor, 0)

  const totalInvestimentos = movimentacoes
    .filter((item) => item.tipo === 'investimento')
    .reduce((total, item) => total + item.valor, 0)

  const saldo = totalReceitas - totalDespesas - totalInvestimentos

  function irParaPrincipal() {
    setPagina('principal')
  }

  function adicionarMovimentacao(novaMovimentacao) {
    setMovimentacoes([
      ...movimentacoes,
      {
        id: Date.now(),
        ...novaMovimentacao
      }
    ])

    setPagina('principal')
  }

  return (
    <>
      {pagina === 'principal' && (
        <Principal
          saldo={saldo}
          receita={totalReceitas}
          despesas={totalDespesas}
          investimentos={totalInvestimentos}
          irParaExtrato={() => setPagina('extrato')}
          irParaReceitas={() => setPagina('receitas')}
          irParaDespesas={() => setPagina('despesas')}
          irParaInvestimentos={() => setPagina('investimentos')}
          irParaConfiguracoes={() => setPagina('configuracoes')}
        />
      )}

      {pagina === 'extrato' && (
        <Extrato
          movimentacoes={movimentacoes}
          voltar={irParaPrincipal}
        />
      )}

      {pagina === 'receitas' && (
        <Receitas
          voltar={irParaPrincipal}
          adicionarMovimentacao={adicionarMovimentacao}
        />
      )}

      {pagina === 'despesas' && (
        <Despesas
          voltar={irParaPrincipal}
          adicionarMovimentacao={adicionarMovimentacao}
        />
      )}

      {pagina === 'investimentos' && (
        <Investimentos
          voltar={irParaPrincipal}
          adicionarMovimentacao={adicionarMovimentacao}
        />
      )}

      {pagina === 'configuracoes' && (
        <Configuracoes voltar={irParaPrincipal} />
      )}
    </>
  )
}

export default App