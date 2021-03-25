import React from 'react';
import axios from 'axios';
import { baseUrl, axiosConfig } from '../Parameters';
import styled from 'styled-components';



const UserC = styled.div`
padding-left: 55px;


`

export default class CreateUserPg extends React.Component {
    state = {
        name: '',
        email: ''
    }

    handleName = (event) => {
        this.setState({ name: event.target.value })
    }

    handleEmail = (event) => {
        this.setState({ email: event.target.value })
    }


    criarUsuario = () => {
        const body = {
            name: this.state.name,
            email: this.state.email
        }
        axios.post(baseUrl, body, axiosConfig)
            .then((answer) => {
                console.log(answer)
                alert('Usuário criado com sucesso!')
                this.setState({ name: '', email: '' })
            })

            .catch((erro) => {
                alert('Por favor verique seus dados e tente novamente.')
                console.log(erro)

            })

    }

    render() {
        return (
            <div>
                <UserC>
                    <h2> Criar Usuário</h2>
                </UserC>
                <input onChange={this.handleName} value={this.state.name} placeholder='Digite seu nome' />
                <input onChange={this.handleEmail} value={this.state.email} placeholder='digite seu e-mail' />
                <button onClick={this.criarUsuario}>Feito</button>

            </div>
        )
    }
}