import React from 'react';
import axios from 'axios';
import { axiosConfig, baseUrl } from '../Parameters';
import styled from 'styled-components';


const Texth2 = styled.div`
>h2{
   padding-left: 55px;
}
`

const ListU = styled.div`
display: flex;
width: 30%;
flex-direction: column;
padding-left: 500px;
>div{display: flex; 
justify-content: space-between;
align-items: center;
}

`

export default class UserListPg extends React.Component {

    state = {
        users: []
    }


    componentDidMount() {
        this.getAllUsers()
    }

    getAllUsers = () => {
        axios.get(baseUrl, axiosConfig)
            .then((answer) => {
                this.setState({ users: answer.data })
            })

            .catch((erro) => {
                console.log(erro)
            })
    }

    deletUser = (id) => {
       if(window.confirm){
            alert('Deseja deletar esse usuário?')
            axios.delete(`${baseUrl}/${id}`, axiosConfig)
                .then((answer) => {
                    alert('Usuário deletado com sucesso!')
                    console.log(answer)
                    this.getAllUsers()
                })
                .catch((erro) => {
                    console.log(erro)

                });

            }
    };
    render() {
        return (
            <ListU>

                <Texth2>
                    <h2> Lista de Usuários</h2>
                </Texth2>
                {this.state.users.map((user) => {
                    return (
                        <div key={user.id}>
                            <p>{user.name}</p>
                            <button onClick={() => this.deletUser(user.id)}>Deletar</button>

                        </div>

                    );
                })}

            </ListU>

        )
    }
}