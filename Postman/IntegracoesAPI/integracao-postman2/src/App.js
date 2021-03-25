
import React from 'react';
import styled from 'styled-components';
import './App.css';
import CreateUserPg from './Pagesaplication/CreateUserPg';
import UserListPg from './Pagesaplication/UsersListPg';

const Header = styled.div`
width: 100%;
background-color: orange;
height: 50px;

`
const Init = styled.div`

padding-left: 25px;
`


export default class App extends React.Component {
  state = {
    mudar: 'criarUsuario',

  }

  onChangePage = () => {
    if (this.state.mudar === 'criarUsuario') {
      this.setState({ mudar: 'listaDeUsuario' })
    } else if (this.state.mudar === 'listaDeUsuario') {
      this.setState({ mudar: 'criarUsuario' })
    }
  }


  selectPage = () => {
    switch (this.state.mudar) {
      case 'criarUsuario':
        return <CreateUserPg />
      case 'listaDeUsuario':
        return <UserListPg />
      default:
        return <div></div>
    }
  }

  render() {

    return (

      <div className="App">
        <Header />
        <Init>
          <h1>Labenusers</h1>
          <button onClick={this.onChangePage}>Ver páginas</button>
        </Init>
        {this.selectPage()}
      </div>
    );
  }

}

