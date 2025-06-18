// models/Movie.js
const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    title: { type: String },
    type: { type: String },
    desc: { type: String },
    year: { type: String },
    isAdult: { type: String },
    genre: { type: String },
    poster: {type: String},
    actors: {type: String},
    runtime: {type: String},
    imdbID: {type: String},
    imdbRating: {type: String}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", MovieSchema);
