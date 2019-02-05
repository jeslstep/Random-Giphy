import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import ScrollableAnchor from 'react-scrollable-anchor';
// import {HashRouter as Router, Link} from 'react-router-dom';



class Search extends Component {
    // local state 
    state = {
        search: '',
        searchResults: [],
        giphy_url: '',
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
    gifUrl = (event) => {
          console.log('giphy url ', this.state.giphy_url)
          axios({
              method: 'POST',
              url: '/favorites',
              data: {giphy_url: this.state.giphy_url}
          }).then(response => {
              alert('Added to Favorites')
              this.setState({
                  giphy_url: ''
              })
          }).catch(error => {
              alert('Error', error);
              console.log('error',error)
          })
      }

    // sets giphy url into state 
    addGiphy = (giphy_url) => {
        if (giphy_url !== '') {
              this.setState({
                  giphy_url: giphy_url,
              })
              this.gifUrl();
        }
         
    }

  render() {
    return (
      <div>
          
         <pre>{JSON.stringify(this.state.giphy_url)}</pre>
        {/* <pre>{JSON.stringify(this.state.searchResults)}</pre>  */}
        <form onSubmit={this.gifSearch}>
            <input
            label="Search"
            onChange={this.handleChangeFor('search')} 
            value={this.state.search} 
            variant="outlined"
            />
            <br/>
            <br/>
           <Button variant="contained" color="primary" type="submit">Search</Button>
            <br/>
            <br/>
            <a href='#section1'> Scroll Down For Results </a>
        </form>
         <ScrollableAnchor id={'section1'}>
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
                        <section className="padding">
                        {/* <Router>
                            <Button
                            variant="contained" 
                            color="primary" 
                            >
                                <Link to="/giphyfavorites">Veiw Favorites</Link>
                            </Button>
                        </Router> */}
                        </section>
                        </div>
                    </Card>
                    </div>
            ))}
        </div>
         </ScrollableAnchor>
      </div>
    );
  }
  
}



export default Search;
