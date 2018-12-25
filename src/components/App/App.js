import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import {
  withStyles
} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 5,
    marginRight: theme.spacing.unit * 5,
    marginLeft: theme.spacing.unit * 5,

    paddingTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 5,
    backgroundColor: '#1a3d50'
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#efbf42', 
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
    const { classes } = this.props;
    return (
        <MuiThemeProvider theme={theme}>
       
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Random Trending Giphy</h1>
        </header>
         <Paper className={classes.root} elevation={5}>
         <div>
           <img height="300" width="auto" alt="gif" src={this.state.images}/> 
         </div>
         <div>
           <Button variant="contained" color="primary" onClick={this.getTrending}>Change imgage</Button>
         </div>
        <br/>
         </Paper>
      </div>
     
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
