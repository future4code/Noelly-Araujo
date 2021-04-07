import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';
import CreatePlaylist from './Components/CreatePlaylist';
import Playlists from './Components/Playlists'

export default class App extends React.Component {
  state = {
    cPage: true,
  }

  handlePage = () => this.setState({ cPage: !this.state.cPage })

  render() {
    return (
      <div className="App">

        {
          this.state.currentPage
            ?
            <CreatePlaylist handlePage={this.handlePage} />
            :
            <Playlists handlePage={this.handlePage} />
        }

      </div>
    );
  }
}

