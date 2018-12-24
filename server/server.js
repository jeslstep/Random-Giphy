const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');


require('dotenv').config();

const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/


app.get('/trending', (req,res)=>{
    axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=${process.env.GIPHY_API_KEY}`)
    .then ((response)=>{
        res.send(response.data.data)
    })
    .catch ((error)=>{
        res.sendStatus(500);
        console.log('error getting giphy trending', error);
    })
})

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});