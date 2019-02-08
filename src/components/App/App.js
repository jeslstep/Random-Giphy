import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import GiphySearch from '../GiphySearch/GiphySearch';
import Footer from '../Footer/Footer';
import {HashRouter as Router, Route} from 'react-router-dom';
import GiphyFavorites from '../GiphyFavorites/GiphyFavorites';
import { Card } from '@material-ui/core';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000', 
    },
    secondary: {
      main: '#ffffff',
    },
  },
});

// #1a3d50

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
        console.log('trending results', response.data);
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
        <MuiThemeProvider theme={theme}>
          <Router>
              <div>
                  <Route path="/giphyfavorites" component={GiphyFavorites}/>
              </div>
          </Router>
           <header className="App-header">
           {/* giphy logo */}
            <div id="logo">
                {/* eslint-disable-next-line  */}
                <a href="https://giphy.com/" target="_blank">
                  <img height="auto" width="90" src="https://pmcvariety.files.wordpress.com/2016/10/giphy-logo-e1477932075273.png?w=867&h=490&crop=1" alt="Giphy logo"  />
                </a>
            </div>
            <h1 className="App-title">Random Trending Giphy</h1>
            </header>
            <div align="center" >
              <div >
              <Card id="card" elevation={5}>
              <div>
              <img height="auto" max-width="250" alt="gif" src={this.state.images}/> 
              </div>
              <br/>
              <div>
            <Button variant="contained" color="primary" onClick={this.getTrending}>Change Giphy</Button>
            </div>
            <br/>
            </Card>
            </div>
            <h1>Or</h1>
            <GiphySearch/>
         
        
          {/* must be display to credit giphy */}
          <Footer/>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
