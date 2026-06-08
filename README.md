# Sistema de Gestão Financeira

Projeto desenvolvido para a disciplina de Experiência do Usuário, com foco na criação de uma interface interativa para controle financeiro pessoal.

A aplicação foi construída com React e simula funcionalidades de um sistema financeiro sem utilizar banco de dados. Todos os dados são manipulados em memória com useState, permitindo navegação entre telas, cadastro de informações, filtros, gráficos simples e interações voltadas para UX.

## Objetivo do Projeto

O objetivo do projeto é oferecer uma experiência simples e intuitiva para o usuário organizar suas finanças pessoais, permitindo visualizar saldo, receitas, despesas, investimentos, categorias, extrato, notificações, mensagens e conselhos financeiros.

## Tecnologias Utilizadas

* React
* JavaScript
* HTML
* CSS
* Vite
* Local state com useState

## Funcionalidades

### Login e Cadastro

* Tela de login simulada.
* Tela de cadastro simulada.
* Cadastro com nome completo, telefone, data de nascimento, e-mail e senha.
* Validação simples de campos.
* Máscara automática para telefone.
* Acesso ao sistema sem banco de dados.

### Dashboard Principal

* Exibição do nome do usuário.
* Avatar com iniciais do nome.
* Exibição de saldo total.
* Cards de receitas, despesas e investimentos.
* Gráfico simples de fluxo de caixa.
* Acesso rápido para extrato, categorias, tabela de gastos, conselhos financeiros, notificações, pesquisa e mensagens.

### Receitas, Despesas e Investimentos

* Cadastro de movimentações financeiras.
* Cada movimentação possui descrição, valor, data e categoria.
* Atualização automática dos totais no dashboard.
* Dados armazenados temporariamente no estado da aplicação.

### Extrato

* Lista de movimentações cadastradas.
* Exibição de receitas, despesas e investimentos.
* Valores diferenciados por tipo de movimentação.
* Exibição da categoria e data de cada item.

### Categorias

* Lista de categorias financeiras.
* Criação de novas categorias.
* Validação para evitar categorias duplicadas.
* Cada categoria pode ser acessada para visualizar movimentações relacionadas.

### Detalhes por Categoria

* Exibe movimentações vinculadas a uma categoria específica.
* Mostra descrição, tipo, data e valor de cada movimentação.

### Tabela de Gastos

* Tela voltada para análise de despesas.
* Separação dos gastos por mês.
* Exibição das cinco maiores despesas de cada mês.
* Gráfico visual simples com base nos valores cadastrados.

### Perfil

* Tela somente para visualização das informações pessoais.
* Exibe nome completo, data de nascimento, e-mail e telefone.
* Os dados são atualizados conforme alterações feitas na tela de configurações.

### Configurações

* Permite editar nome, telefone e e-mail.
* Atualiza as informações do usuário no restante da aplicação.
* Telefone com máscara automática.

### Conselhos Financeiros

* Tela com dicas financeiras simuladas.
* Cards com conselhos sobre organização, consumo, economia, planejamento e segurança financeira.

### Notificações

* Tela simulada de notificações.
* Exibe avisos sobre atualizações, relatórios, dicas financeiras e segurança da conta.

### Pesquisa

* Tela de pesquisa acessada pelo ícone de lupa.
* Permite buscar por descrição, tipo, data ou categoria.
* Exibe movimentações e categorias encontradas.

### Mensagens

* Tela simulada de chat.
* Usuário pode digitar uma mensagem.
* O sistema responde automaticamente com uma mensagem simulada de assistente financeiro.

## Estrutura do Projeto

text
src
├── pages
│   ├── Cadastro.jsx
│   ├── CategoriaDetalhes.jsx
│   ├── Categorias.jsx
│   ├── Configuracoes.jsx
│   ├── ConselhosFinanceiros.jsx
│   ├── Despesas.jsx
│   ├── Extrato.jsx
│   ├── Investimentos.jsx
│   ├── Login.jsx
│   ├── Mensagens.jsx
│   ├── Notificacoes.jsx
│   ├── Perfil.jsx
│   ├── Pesquisa.jsx
│   ├── Principal.jsx
│   ├── Receitas.jsx
│   └── TabelaGastos.jsx
├── App.jsx
├── main.jsx
└── index.css


## Como Executar o Projeto

### 1. Instalar as dependências

bash
npm install


### 2. Rodar o projeto

bash
npm run dev


### 3. Abrir no navegador

Depois de rodar o comando, o terminal irá mostrar um link parecido com:

text
http://localhost:5173/


Abra esse link no navegador para visualizar o projeto.

## Observação sobre Banco de Dados

Este projeto não utiliza banco de dados, pois o foco é a interface, a experiência do usuário e a simulação das funcionalidades.

Os dados são armazenados temporariamente com useState, ou seja, ao atualizar a página, as informações cadastradas durante o uso podem ser perdidas.

## Conceitos de React Utilizados

* Componentes
* Props
* Estado com useState
* Renderização condicional
* Eventos com onClick e onSubmit
* Formulários controlados
* Manipulação de arrays com map, filter, reduce e sort

## Possíveis Melhorias Futuras

* Salvar dados no localStorage.
* Adicionar banco de dados.
* Criar autenticação real.
* Melhorar os gráficos.
* Adicionar edição e exclusão de movimentações.
* Adicionar modo escuro.
* Criar filtros por período.
* Melhorar responsividade em telas menores.