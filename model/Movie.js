const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    movieName: String,
    leadActor: String,
    leadActress: String,
    releaseYear: Number,
    directorName: String,
});

let movieModel = mongoose.model('movie', MovieSchema);
module.exports = movieModel;