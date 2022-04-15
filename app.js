const express = require("express");
const mongoose = require("mongoose");
const Movie = require("./model/Movie");

const app = express();

// body-parser
app.use(express.json());

// taking form-data inputs
app.use(express.urlencoded({ extended: false }));

// database connection

app.listen(5000, () => {
  console.log("Listening to port 5000.");
});

const mongoURI = "";

mongoose
  .connect(mongoURI)
  .then(console.log("Connected to database."))
  .catch((err) => {
    console.log(err);
    console.log("Error connecting to database !");
  });

// save movie api
app.post("/movies/save", async (req, res, next) => {
  try {
    await Movie.insertMany(req.body);
    res
      .status(200)
      .json({ success: true, message: "Movie saved.", data: null });
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .json({ success: false, message: "Server error.", data: null });
  }
});

// get movie api
app.post("/movies/get", async (req, res, next) => {
  try {
    let movies = await Movie.find(req.body);
    res
      .status(200)
      .json({ success: true, message: "Movie received.", data: movies });
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .json({ success: false, message: "Server error.", data: null });
  }
});
