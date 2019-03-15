import React, { Component } from 'react';
import Accueil from './composant/Accueil';
import './App.css';
import Connexion from "./composant/Connexion";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connexion : false
    }
  }

  connect() {
    this.setState({
      connexion: true
    });
  }


  render() {
    return (
        this.state.connexion === false ?
              <Connexion connect={() => this.connect()}/>
              :
              <Accueil/>

    );
  }
}

export default App;
