import React, { useState } from 'react';
import logo from './logo.svg';
import User from './Components/User';
import Mach from './Components/Mach';
import './App.css';
import styled from 'styled-components';



function App() {
  const [paginaAtual, setPaginaAtual] = useState('User')

  

  const changePage = () => {
    if (paginaAtual === 'User') {
      setPaginaAtual('Mach')
    } else {
      setPaginaAtual('User')
    }
  }

  const showPage = () => {
    switch (paginaAtual) {
      case 'User':
        return <User />
      case 'Mach':
        return <Mach />
      default:
        return <User />
    }
  }


  return (
    <TelaPrincipal>
 
      <QuadroPrincipal>
        
        <Header changepage={changePage} />
        {showPage()}

        

      </QuadroPrincipal>



    </TelaPrincipal>

  )
};
export default App;


const TelaPrincipal = styled.div` 
background-color: #efefef;
width: 100%;
height: 100vh;
justify-content: center;
align-items: center;
display: flex;
overflow: hidden;
`
const QuadroPrincipal = styled.div`
display: flex;
background-color: white;

border: solid 3px;
height: 60%;
width: 350px;
button{
  width: 45px;
  height: 25px;
  align-items: right;
  margin-left: 80px;
  
}
`

const Header = styled.div`

`
