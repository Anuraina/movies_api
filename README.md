# movies_api
Api to save and get movies from database.

## APIs

save movies
>POST localhost:5000/movies/save

get movies
>POST localhost:5000/movies/get

## Install dependencies

>npm install

## Run app

>node app.js

## Movies Schema

{
    
    movieName: String,

    leadActor: String,
    
    leadActress: String,
    
    releaseYear: Number,
   
    directorName: String,

}
