import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
// set state
state = {
  images: ''
};



// get giphy upon page load
componentDidMount() {
  this.getTrending();
}

// randomly show a gif
getRndIntergert = (min,max)=> {
  return Math.floor (Math.random() * (max-min))+ min;
}
// GET request for giphy from the server
getTrending = () => {
  axios.get('/trending')
    .then((response) => {
      console.log(response.data);
      this.setState(
        {
          images: response.data[this.getRndIntergert(1, response.data.length)].images.fixed_width.url
        })
      ;
    })
    .catch((error) => {
      alert('error in making get request', error);
    })
}



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">APIS</h1>
          <h4><i>APIS</i></h4>
        </header>
         <pre>The giphs trending are: { JSON.stringify(this.state.images) } </pre> 
         <div>
           <img height="auto" width="300" alt="gif" src={this.state.images}/> 
         </div>
         <div>
           <button onClick={this.getTrending}>Change imgage</button>
         </div>
        <br/>
      </div>
    );
  }
}

export default App;
