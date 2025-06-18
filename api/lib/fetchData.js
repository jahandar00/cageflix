const axios = require("axios");
const mongoose = require("mongoose")
const Movie = require("./models/Movie");
const fs = require("fs");
const readline = require("readline");
const path = require("path");


const CAGE_ID = "nm0000115";
const PRINCIPALS_PATH = path.join(
  __dirname,
  "/title.principals.tsv"
);
const BASICS_PATH = path.join(
  __dirname,
  "/title.basics.tsv"
);
const OMDB_API_KEY = process.env.OMDB_API_KEY; 

// Get Cage tconsts

async function getCageMovieIDs() {
  const stream = fs.createReadStream(PRINCIPALS_PATH);
  const rl = readline.createInterface({ input: stream });

  const tconsts = new Set();

  for await (const line of rl) {
    const [tconst, , nconst, category] = line.split("\t");

    if (nconst === CAGE_ID && category.includes("actor")) {
      tconsts.add(tconst);
    }
  }

  return Array.from(tconsts);
}

// Parse and save to MongoDB

async function saveMoviesToMongo(tconstList) {
  const stream = fs.createReadStream(BASICS_PATH);
  const rl = readline.createInterface({ input: stream });

  let headers = [];

  for await (const line of rl) {
    const cols = line.split("\t");

    if (!headers.length) {
      headers = cols;
      continue;
    }

    const row = {};
    headers.forEach((h, i) => (row[h] = cols[i]));

    if (tconstList.includes(row.tconst)) {
      let plot = "N/A";
      let poster = "N/A"
      let actors = "N/A"
      let runtime = "N/A"
      let imdbID = "N/A"
      let imdbRating = "N/A"
      try {
        const omdbRes = await axios.get(
          `https://www.omdbapi.com/?i=${row.tconst}&apikey=${OMDB_API_KEY}`
        );
        if (omdbRes.data && omdbRes.data.Plot && omdbRes.data.Poster && omdbRes.data.Actors && omdbRes.data.Runtime && omdbRes.data.imdbID && omdbRes.data.imdbRating) {
          plot = omdbRes.data.Plot;
          poster = omdbRes.data.Poster;
          actors = omdbRes.data.Actors
          runtime = omdbRes.data.Runtime;
          imdbID = omdbRes.data.imdbID;
          imdbRating = omdbRes.data.imdbRating;
        }
      } catch (err) {
        console.warn(`OMDb fetch failed for ${row.tconst}`);
      }

      const movie = new Movie({
        title: row.primaryTitle,
        type: row.titleType,
        desc: plot,
        year: row.startYear,
        isAdult: row.isAdult,
        genre: row.genres,
        poster: poster,
        actors: actors,
        runtime: runtime,
        imdbID: imdbID,
        imdbRating: imdbRating
      });

      await movie.save();
      console.log(`Saved: ${movie.title}`);
    }
  }

  console.log("All Cage movies saved.");
}

// run

export const fetchData = () => async () => {
  try {
    console.log("Starting Cageflix import...");
    const tconstList = await getCageMovieIDs();
    await saveMoviesToMongo(tconstList);
    console.log(" Cageflix import complete.");
  } catch (err) {
    console.error("Import failed:", err);
  }
};