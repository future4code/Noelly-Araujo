import React, { useState } from 'react';
import logo from './logo.svg';
import User from './Components/User';
import Mach from './Components/Mach';

import './App.css';

import styled from 'styled-components';



function App() {
  const [paginaAtual, setPaginaAtual] = useState('User')


  const changePage = () => {

  }


  return (
    <TelaPrincipal>

      <QuadroPrincipal>

        {paginaAtual === 'User' ? <User /> : <Mach />}
      </QuadroPrincipal>



    </TelaPrincipal>
  );
}


export default App;


const TelaPrincipal = styled.div` 
background-color: #efefef;
width: 100%;
height: 100vh;
justify-content: center;
align-items: center;
display: flex;
`
const QuadroPrincipal = styled.div`
display: flex;

border: solid 3px;
height: 60%;
width: 350px;;
`