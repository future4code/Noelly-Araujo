import React from 'react'
import styled from 'styled-components'
import { baseUrl, headers } from './utils/Api'
import axios from 'axios'


const ContainerC = styled.div``

const Btns = styled.div``

export default class Details extends React.Component {

    state={
        tracks:[],
    }

    componentDidMount() {
        this.getTracks()
    }

    getTracks = async () => {
        try{
            const res = await axios.get(`${baseUrl}/${this.props.listID}/tracks`, headers)
            this.setState({tracks: res.data.result.tracks})
        } catch (err) {
            console.log(err)
        }
    }
    render () {

        const trackList = this.state.tracks.map((data) => {
            return (
                <ContainerC key={data.id}>
                    <p>Artista: {data.artist}</p>
                    <p>Música: {data.name}</p>
                    <iframe width="320" height="240" src={data.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </ContainerC>
            )
        })

        return (
            <div>
                <Btns onClick={this.props.handlePage}>Voltar</Btns>
                {trackList}
            </div>
        )
    }
}