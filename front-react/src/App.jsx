import { useState } from 'react'

import Principal from './pages/Principal.jsx'
import Extrato from './pages/Extrato.jsx'
import Receitas from './pages/Receitas.jsx'
import Despesas from './pages/Despesas.jsx'
import Investimentos from './pages/Investimentos.jsx'
import Configuracoes from './pages/Configuracoes.jsx'
import Categorias from './pages/Categorias.jsx'
import CategoriaDetalhes from './pages/CategoriaDetalhes.jsx'
import TabelaGastos from './pages/TabelaGastos.jsx'

function App() {
  const [pagina, setPagina] = useState('principal')

  const [categorias, setCategorias] = useState([
    'Aluguel',
    'Assinaturas',
    'Roupas',
    'Fast-food',
    'Mercado',
    'Faculdade',
    'Shopping',
    'Conta de luz',
    'Cosméticos',
    'Conta de água'
  ])

  const [movimentacoes, setMovimentacoes] = useState([
    {
      id: 1,
      tipo: 'receita',
      descricao: 'Salário',
      valor: 2500,
      data: '2026-05-17',
      categoria: 'Faculdade'
    },
    {
      id: 2,
      tipo: 'despesa',
      descricao: 'Mercado',
      valor: 350,
      data: '2026-05-18',
      categoria: 'Mercado'
    },
    {
      id: 3,
      tipo: 'investimento',
      descricao: 'Reserva mensal',
      valor: 200,
      data: '2026-05-19',
      categoria: 'Shopping'
    },
    {
      id: 4,
      tipo: 'despesa',
      descricao: 'Fast-food',
      valor: 80,
      data: '2026-03-05',
      categoria: 'Fast-food'
    },
    {
      id: 5,
      tipo: 'despesa',
      descricao: 'Aluguel',
      valor: 900,
      data: '2026-03-10',
      categoria: 'Aluguel'
    },
    {
      id: 6,
      tipo: 'despesa',
      descricao: 'Faculdade',
      valor: 600,
      data: '2026-03-15',
      categoria: 'Faculdade'
    },
    {
      id: 7,
      tipo: 'despesa',
      descricao: 'Shopping',
      valor: 150,
      data: '2026-02-08',
      categoria: 'Shopping'
    },
    {
      id: 8,
      tipo: 'despesa',
      descricao: 'Conta de luz',
      valor: 220,
      data: '2026-02-12',
      categoria: 'Conta de luz'
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

  const [categoriaSelecionada, setCategoriaSelecionada] = useState('')


  function abrirCategoria(categoria) {
    setCategoriaSelecionada(categoria)
    setPagina('categoriaDetalhes')
  }

  function irParaPrincipal() {
    setPagina('principal')
  }

  function adicionarCategoria(novaCategoria) {
    const categoriaFormatada = novaCategoria.trim()

    if (categoriaFormatada === '') {
      return
    }

    const categoriaJaExiste = categorias.some(
      (categoria) =>
        categoria.toLowerCase() === categoriaFormatada.toLowerCase()
    )

    if (categoriaJaExiste) {
      alert('Essa categoria já existe.')
      return
    }

    setCategorias([...categorias, categoriaFormatada])
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
          irParaCategorias={() => setPagina('categorias')}
          irParaTabelaGastos={() => setPagina('tabelaGastos')}
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
          categorias={categorias}
          adicionarMovimentacao={adicionarMovimentacao}
        />
      )}

      {pagina === 'despesas' && (
        <Despesas
          voltar={irParaPrincipal}
          categorias={categorias}
          adicionarMovimentacao={adicionarMovimentacao}
        />
      )}

      {pagina === 'investimentos' && (
        <Investimentos
          voltar={irParaPrincipal}
          categorias={categorias}
          adicionarMovimentacao={adicionarMovimentacao}
        />
      )}

      {pagina === 'configuracoes' && (
        <Configuracoes voltar={irParaPrincipal} />
      )}

      {pagina === 'categorias' && (
        <Categorias
          voltar={irParaPrincipal}
          categorias={categorias}
          adicionarCategoria={adicionarCategoria}
          abrirCategoria={abrirCategoria}
        />
      )}

      {pagina === 'categoriaDetalhes' && (
        <CategoriaDetalhes
          voltar={() => setPagina('categorias')}
          categoria={categoriaSelecionada}
          movimentacoes={movimentacoes}
        />
      )}

      {pagina === 'tabelaGastos' && (
        <TabelaGastos
          voltar={irParaPrincipal}
          movimentacoes={movimentacoes}
        />
      )}
    </>
  )
}

export default App