import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';

const ParticlesOptions = {
  particles: {
    number: {
      value: 30,
        density: {
          enable: true,
          value_area:500
        }
      }
    }
}

class App extends Component {
  render(){
    return (
      <div className ="app">
        <Particles className='particles'
          params={ParticlesOptions}
        />
        <Navigation />
        <Logo/>
        <Rank/>
        <ImageLinkForm/>
      </div>
    );
  }
}

export default App;