import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';




class GiphyFavorites extends Component {


// get giphy upon page load
componentDidMount() {
    this.getfavorites();
}


    // local state 
    state = {
       dbResults: [],
    }

// GET request for giphy from the server
  getfavorites = () => {
    axios.get('/favorites')
      .then((response) => {
        console.log('favorite results', response.data);
         this.setState({
             dbResults: response.data
         });
      })
      .catch((error) => {
        alert('error in making get request', error);
      })
  }

    // delete an giphy
  deleteGiphy = (giphyId) => {
       axios({
         method: 'DELETE',
         url: `favorites/${giphyId}`
       }).then(() => {
         alert("Deleted!");
         this.getfavorites();
       }).catch(error => {
         alert("Unable to Delete", "Not deleted", "warning", error);
       });
     }


  render() {
    return (
      <div>
           <pre>FAVORITES</pre>
          <div>
            {this.state.dbResults.map ( gif => (
                 <div height="auto" max-width="250" className="App">
                    <Card id ="card">
                    <CardMedia
                        component="img"
                        height="auto" 
                        max-width="250"  
                        src={gif.giphy_url} 
                        alt="a gif that has been choosen as a favorite" 
                        title="a gif that has been choosen as a favorite" 
                    />
                    <Button
                        variant="contained" 
                        color="primary" 
                        onClick={() => this.deleteGiphy(gif._id)}
                        >
                        Delete
                    </Button>
                    </Card>
                    </div>
            ))}
        </div>
     
      </div>
    );
  }
  
}



export default GiphyFavorites;
