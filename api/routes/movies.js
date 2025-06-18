const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.js");

// Inline controller function
router.get("/movies", async (req, res) => {
  try {
    const movies = await Movie.find(); // Fetch all movies from MongoDB
    res.status(200).json(movies);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to get movies" });
  }
});

module.exports = router;
