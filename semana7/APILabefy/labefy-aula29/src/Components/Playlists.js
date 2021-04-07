import axios from 'axios';
import React from 'react';
import { baseUrl, axiosConfig, headers } from "../parameters";
import styled from "styled-components";


const Button = styled.div ``

const Div = styled.div``
const Details = styled.div``

const Main = styled.div ``

const Container = styled.div``

const Btn = styled.div``

export default class Playlists extends React.Component {
    state = {
        playlists: [],
        tracks: [],
        detailPage: true,
    }

    componentDidMount() {
        this.getAllPlaylists()
    }


    getAllPlaylists = async () => {
        try {
            const response = await axios.get(baseUrl, headers)
            this.setState({ playlists: response.data.result.list }, () => console.log(this.state.playlists))
        } catch (err) {
            console.log(err)
        }
    }

    deletePlaylist = async (id) => {
        try {
            await axios.delete(`${baseUrl}/${id}`, headers)
        } catch (error) {
            console.log(error)
            alert('Erro, por favor selecione a playlist e tente novamente.')
        }
    }

    getTracks = async (id) => {
        try{
            const response = await axios.get(`${baseUrl}/${id}/tracks`, headers)
            this.setState({tracks: response.data.result.tracks}, () => console.log(this.state.tracks))
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        const playlists = this.state.playlists.map((list) => {
            return (
                <div>
                    <Main key={list.id}>
                        
                        <li>{list.name}</li>
                    </Main>
                    <button onClick={() => this.handleDetailPage(list.id)}>Mais detalhes</button>
                    <button onClick={() => this.deletePlaylist(list.id)}>Deletar</button>
                </div>)
        })
        return (<Container>
            {
            this.state.detailPage
            ?
            (<>
                <h2>Playlists criadas</h2>
                {playlists}
                <Btn onClick={this.props.handlePage}>Voltar</Btn>
            </>)
            :
            <Details 
            listID={this.state.listID}
            handlePage={this.handleDetailPage}
            />
            }
            </Container>
        )
    }
}