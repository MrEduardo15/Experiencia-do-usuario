import React from 'react' //Importa o React para o projeto.
import ReactDOM from 'react-dom/client' //Importa a parte do React que consegue colocar a interface dentro do HTML.
import App from './App.jsx' //Importa o componente principal do projeto, que é o App.
import './index.css' //Importa o CSS global do projeto.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
//Main é ponto de entrada do React