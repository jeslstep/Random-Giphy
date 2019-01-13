# Random-Giphy

Click the change giphy button to view twenty-five randomly trending gifs
and search for a gifs such as 'cats'.

This is a 3/4 stack app (no DB) -- MongoDB to be added

# Setup

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Prerequisites

Running the server code requires `nodemon`. If you don't already have `nodemon`, install it globally with `npm install nodemon --global`. 
Between the server and client, you'll need two terminal tabs because we're using `nodemon`, both our client side and server side will automatically spin back up when changes are made!

## Aquire a giphy api key

Read through the Giphy documentation 
Register an account in order to get your API Key. This key is used for all of your requests to authenticate your app to Giphy.
https://developers.giphy.com/docs/#api-keys

## Steps to Get the Development Environment Running

Download this project.
open in editor (I use VS code)
open a terminal window (control ~)
npm install
Create a .env file and add your API key to the line below. then, copy and paste the line into the .env file.
GIPHY_API_KEY=YOUR_KEY_GOES_HERE
In seperate terminal windows (open a new termainal tab with `cmd + t` ):
    npm run server
    npm run client

## Steps to Deploy

# Completed Steps

feature displayRandomGiphy -- allows user to get a random trending giphy from the Giphy Api by pressed the change giphy button
feature giphySearch -- allow user to search for a giphy 

# Next Steps

feature mongoDatabase -- add mongo database to store giphy urls
feature addToFavorites -- add ability to select giphys as favorites
feature favoritesComponent -- component that displays all favorite gifs 




