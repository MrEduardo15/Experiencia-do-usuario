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
