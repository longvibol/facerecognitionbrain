import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from'clarifai';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css'; 

 
const app = new Clarifai.App({
 apiKey: 'bdb543636cd140228578a63942618fe5'
});

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
  constructor() {
    super();
    this.state= {
      input: '',
      imageUrl:'',
    }
  }

  onInputChange = (event) =>{
    //event.target.value: to get what we change on input
    this.setState({input: event.target.value});

  }

  onButtonSubmit = () => {
      this.setState({imageUrl: this.state.input});
      app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input).then(
        function(response) {
          console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
        },
        function(err) {
        // there was an error
        }
      );
  }

  render(){
    return (
      <div className ="app">
        <Particles className='particles'
          params={ParticlesOptions}
        />
        <Navigation />
        <Logo/>
        <Rank/>
        <ImageLinkForm 
          onInputChange= {this.onInputChange} 
          onButtonSubmit = {this.onButtonSubmit} 
        />
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;