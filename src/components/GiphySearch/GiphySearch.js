import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { TextField } from '@material-ui/core';


class Search extends Component {
    // local state 
    state = {
        search: '',
        searchResults: [],
    }

    // sets the user input in state
    handleChangeFor = (propertyName) => {
     return (event) => {
       this.setState({
                [propertyName]: event.target.value
       });
     }
    }

    // POST request to send search for giphy to the server
    gifSearch = (event) => {
          event.preventDefault();
          console.log('search', this.state.search)
          axios({
              method: 'POST',
              url: '/search',
              data: {search: this.state.search}
          }).then(response => {
              console.log('search results', response.data);
              this.setState({
                  searchResults: response.data
              })
              this.setState({
                  search: ''
              })
          }).catch(error => {
              alert('Error', error);
              console.log('error',error)
          })
      }

    // POST request to send search for giphy url to the server
    addGiphy = (giphy_url) => {
        axios({
            method: 'POST',
            url: '/favorites',
            data: {
                giphy_url: giphy_url
            }
        }).then(response => {
            alert('Added to Favorites')
        }).catch(error => {
            alert('Error', error);
            console.log('error', error)
        })     
    }

  render() {
    return (
      <div>
          <h1 className="App-title">Search and Add Favorites</h1>
        <form onSubmit={this.gifSearch}>
            <TextField
            label="Search"
            onChange={this.handleChangeFor('search')} 
            value={this.state.search} 
            variant="outlined"
            />
            <br/>
            <br/>
           <Button variant="contained" color="primary" type="submit">Search</Button>
        </form>
   
          <div>
            {this.state.searchResults.map ( gif => (
                 <div height="auto" max-width="250" className="App">
                    <Card id ="card">
                    <CardMedia
                    component="img"
                    height="auto" 
                    max-width="250"  
                    src={gif.images.fixed_width.url} 
                    alt={gif.description} 
                    title= {gif.description}
                    />
                        <div className="backgroundColor" align="center">
                        <section className="padding">
                        <Button 
                            className="a"
                            variant="contained" 
                            color="primary" 
                            type="submit" 
                            onClick = { () => this.addGiphy(gif.images.fixed_width.url) }>
                        Favorite
                        </Button>
                        </section>
                        </div>
                    </Card>
                    </div>
            ))}
        </div>
      </div>
    );
  }
  
}



export default Search;
