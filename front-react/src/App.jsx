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
import Perfil from './pages/Perfil.jsx'
import ConselhosFinanceiros from './pages/ConselhosFinanceiros.jsx'
import Notificacoes from './pages/Notificacoes.jsx'
import Pesquisa from './pages/Pesquisa.jsx'
import Login from './pages/Login.jsx'
import Cadastro from './pages/Cadastro.jsx'
import Mensagens from './pages/Mensagens.jsx'

function App() {
  const [pagina, setPagina] = useState('login')
  const [usuario, setUsuario] = useState({
  nome: 'Kamila Dantas Luongo',
  telefone: '(11) 91845-4568',
  email: 'kamila@gmail.com',
  dataNascimento: '05/12/1980'
  })

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

  function entrarNoSistema() {
    setPagina('principal')
  }

  function cadastrarUsuario(dadosCadastro) {
    setUsuario({
      ...usuario,
      nome: dadosCadastro.nome,
      telefone: dadosCadastro.telefone,
      email: dadosCadastro.email,
      dataNascimento: dadosCadastro.dataNascimento
    })

    alert('Cadastro realizado com sucesso!')
    setPagina('login')
  }
  return (
    <>
      {pagina === 'principal' && (
        <Principal
          usuario={usuario}
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
          irParaPerfil={() => setPagina('perfil')}
          irParaConselhos={() => setPagina('conselhos')}
          irParaNotificacoes={() => setPagina('notificacoes')}
          irParaPesquisa={() => setPagina('pesquisa')}
          irParaMensagens={() => setPagina('mensagens')}
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
        <Configuracoes
          voltar={irParaPrincipal}
          usuario={usuario}
          setUsuario={setUsuario}
        />
      )}

      {pagina === 'categorias' && (
        <Categorias
          voltar={irParaPrincipal}
          categorias={categorias}
          adicionarCategoria={adicionarCategoria}
          abrirCategoria={abrirCategoria}
          usuario={usuario}

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
          usuario={usuario}
          movimentacoes={movimentacoes}
        />
      )}

      {pagina === 'perfil' && (
        <Perfil
          voltar={irParaPrincipal}
          usuario={usuario}
        />
      )}

      {pagina === 'conselhos' && (
        <ConselhosFinanceiros
          voltar={irParaPrincipal}
          usuario={usuario}
        />
      )}

      {pagina === 'notificacoes' && (
        <Notificacoes
          voltar={irParaPrincipal}
          usuario={usuario}
        />
      )}

      {pagina === 'pesquisa' && (
        <Pesquisa
          voltar={irParaPrincipal}
          usuario={usuario}
          movimentacoes={movimentacoes}
          categorias={categorias}
        />
      )}

      {pagina === 'login' && (
        <Login
          irParaCadastro={() => setPagina('cadastro')}
          entrar={entrarNoSistema}
        />
      )}

      {pagina === 'cadastro' && (
        <Cadastro
          voltarLogin={() => setPagina('login')}
          cadastrarUsuario={cadastrarUsuario}
        />
      )}

      {pagina === 'mensagens' && (
        <Mensagens
          voltar={irParaPrincipal}
          usuario={usuario}
        />
      )}
    </>
  )
}

export default App