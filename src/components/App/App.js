import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import GiphySearch from '../GiphySearch/GiphySearch';
import Footer from '../Footer/Footer'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    marginTop: theme.spacing.unit * 1,
    marginBottom: theme.spacing.unit * 1,
    marginRight: theme.spacing.unit * 0,
    marginLeft: theme.spacing.unit * 0,

    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    backgroundColor: '#8b0000'
  },
  background: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 5,
    backgroundColor: '#222'
  }
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000', 
    },
    secondary: {
      main: '#1a3d50',
    },
  },
});

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
    const { classes } = this.props;
    return (
        <MuiThemeProvider theme={theme}>
           <header className="App-header">
            <div id="logo">
            <a href="https://giphy.com/" target="_blank">
              <img height="auto" width="90px" src="https://pmcvariety.files.wordpress.com/2016/10/giphy-logo-e1477932075273.png?w=867&h=490&crop=1" alt="Giphy logo"  />
             </a>
            </div>
            <h1 className="App-title">Random Trending Giphy</h1>
            </header>
            <div align="center" className={classes.background}>
            <div id="paperDiv" className="App">
            <Paper className={classes.root} elevation={5}>
            <div>
            <img height="250" width="250" alt="gif" src={this.state.images}/> 
            </div>
            <br/>
            <div>
           <Button variant="contained" color="primary" onClick={this.getTrending}>Change Giphy</Button>
            </div>
            <br/>
            </Paper>
            </div>
            <div className="App">
            <h1>Or</h1>
            <GiphySearch/>
          </div>
          <Footer/>
      </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
