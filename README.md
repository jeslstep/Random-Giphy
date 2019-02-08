# Random-Giphy

Click the change giphy button to view twenty-five randomly trending gifs
and search for a gifs such as 'cats'.

a maximum of 42 search requests an hour, 1000 search requests a day 

# Website

https://random-giphy.herokuapp.com/

# Built with:
* React.js
* Giphy API
* Express
* Node.js
* Material UI


# Setup

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Steps to Get the Development Environment Running
1. Register for an account here: https://developers.giphy.com/docs/#api-keys. Click Create an app to get your API Key. 
2. Download this project.
3. open in editor (ex. VS code)
4. open a terminal window (control ~)
5. npm install
6. If you don't already have `nodemon`, install it globally with `npm install nodemon --global`.
Running the server code requires `nodemon`. 
7. Create a .env file and add your API key to the line below. then, copy and paste the line into the .env file.
8. GIPHY_API_KEY=YOUR_KEY_GOES_HERE
9. In seperate terminal windows (open a new termainal tab with `cmd + t` )you'll need two terminal tabs because we're using `nodemon`:
    a. npm run server
    b. npm run client

# Steps to Deploy on Heroku

## Heroku (one time)
Sign up for an account at https://signup.heroku.com/
You may have to give them a credit card, but you shouldn't need to pay for anything
Install Heroku CLI by typing `brew install heroku` in Terminal
Authenticate by typing heroku login in Terminal
Note: Your project also needs to have a git repository.

## Heroku Setup (every time)
1. In terminal, navigate to the project folder and type `heroku create`
2. Login in if prompted
3. Type `git remote -v` to ensure it added successfully
4. Make sure your PORT is configured correctly as: `const PORT = process.env.PORT || 5000;`


1. Remove the build/ line from your .gitignore 
2. start script in your package.json starts your node server and not React (Heroku won't need to build the React app)
    a. "start": "node server/server.js",
3. Make sure your package.json contains a build script:
    a. "build": "react-scripts build"
4. `npm run build`
5. `git commit`
6. `git add .` 
7. `git commit -m "YOUR COMMIT MESSAGE"`
8. `git Push`
9. Push to heroku `git push heroku master`

# Completed Steps
1. Feature displayRandomGiphy -- get a random trending giphy from the Giphy Api by pressed the change giphy button
2. Feature giphySearch -- search for a giphy 
3. Feature mongoDatabase -- add mongo database to store favorite giphy urls
4. Feature addToFavorites -- add ability to select giphys as favorites
5. Feature favoritesComponent -- component that displays all favorite gifs 

# Next Steps
1. Feature addLogin -- add passport.js 






