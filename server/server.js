const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const mongoose = require('mongoose');
const giphyRouter = require('./routes/giphy.router');

require('dotenv').config();

const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- ROUTE for MongoDB ---------- **/


app.use('/favorites', giphyRouter);

/** ---------- MONGOOSE CONNECTION ---------- **/
// mongo connection to database
const databaseUrl = process.env.MONGODB_URI;
mongoose.connect(databaseUrl, {
    useNewUrlParser: true 
});

mongoose.connection.once('connected', () => {
    console.log('mongoose connected to: ', databaseUrl);
});

mongoose.connection.on('error', (error) => {
    console.log('mongoose connection error: ', error);
});

/** ---------- ROUTES for Giphy API---------- **/
app.get('/trending', (req, res) => {
    axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=${process.env.GIPHY_API_KEY}`)
        .then((response) => {
            res.send(response.data.data)
        })
        .catch((error) => {
            res.sendStatus(500);
            console.log('error getting giphy trending', error);
        })
})

app.post('/search', (req, res) => {
    console.log('search', req.body.search);
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${req.body.search}&api_key=${process.env.GIPHY_API_KEY}`)
        .then((response) => {
            res.send(response.data.data);
        })
        .catch((error) => {
            res.sendStatus(500);
            console.log('error in giphy search', error);
        })
})



/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});