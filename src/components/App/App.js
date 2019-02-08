import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {HashRouter as Router, Route} from 'react-router-dom';
import GiphyFavorites from '../GiphyFavorites/GiphyFavorites';
import LandingPage from '../LandingPage/LandingPage';


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

class App extends Component {

render() {
   
    return (
        <MuiThemeProvider theme={theme}>
          <Router>
              <div>
                  <Route path="/" component={LandingPage}/>
                  <Route path="/giphyfavorites" component={GiphyFavorites}/>
              </div>
          </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
