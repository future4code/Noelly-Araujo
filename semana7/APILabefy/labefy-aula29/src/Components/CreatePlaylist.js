import React from 'react';
import axios from 'axios';
import { baseUrl, headers } from '../parameters';
import styled from 'styled-components';


const MainContainer = styled.div`


`

export default class CreatePlaylist extends React.Component {

    state = {
        namePlaylist: '',
    }


    handleNamePlay = (event) => {
        this.setState({ namePlaylist: event.target.value })
    }

    clickPlaylist = () => {
        this.createPlaylist()
        this.setState({ namePlaylist: '' })
    }

    createPlaylist = () => {
        const body = { name: this.state.namePlaylist }


        axios
            .post(baseUrl, body, headers)
            .then((answer) => {
                console.log(answer)
                alert('Playlist criada com sucesso!')
                this.setState({ name: '' })
            })
            .catch((error) => {
                console.log(error)
            })
    }
  

    render() {

        return (
            <MainContainer>
                <h1>Bem-vindo(a) Labefy !Aqui a música não para!</h1>
                <h2>Comece a criar suas playlists</h2>
                <input
                    onChange={this.handlePlay}
                    value={this.namePlaylist}
                />
                <button onClick={this.clickPlaylist}>Criar Playlist</button>
                <button onClick={this.props.handlePage}>Veja aqui suas playlists</button>
               
            </MainContainer>
        )
    }
}

