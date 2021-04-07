import logo from './logo.svg';
import './App.css';
import React from 'react';




export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>ETAPA 1- DADOS GERAIS</h1>

        <h3>1. Qual é o seu nome?</h3>
        <input placeholder="digite aqui seu nome" />

        <h3>2. Qual a sua idade?</h3>
        <input placeholder="digite aqui sua idade" />

        <h3>3. Qual o seu e-mail?</h3>

        <input placeholder="digite aqui seu e-mail" />

        <h3>4. Qual a sua escolaridade?</h3>
        <button>Clica em mim</button>

      </div>

    );
  };
}

