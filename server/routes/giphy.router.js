const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// MONGOOSE SCHEMA //
const Schema = mongoose.Schema;

// create a schema for a koala
const giphySchema = new Schema({
    giphy_url: { type: String, required: true},
});

const Giphy = mongoose.model('Giphy', giphySchema);

// Get favorite gifs
router.get('/', (req,res) => {
    Giphy.find({})
    .then((results) => {
        console.log(results)
        res.send(results);
    })
    .catch((error) => {
        console.log('error in GET request to db for favorite gifs', error);
        res.sendStatus(500);
    });
    
})

// POST new favorite giphy
router.post('/', (req, res) => {
   const payload = req.body;
   Giphy.create(payload)
      .then((results) =>{
         res.sendStatus(200)
      })
      .catch((error) => {
         console.log('Error posting favorite giphy to db: ', error)
      })
})

module.exports = router;