// index.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const movieRoute = require("./routes/movies")
const { fetchData } = require("./lib/fetchData.js");


// fetchData();
// setInterval(fetchData, oneWeekInterval);

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Successful connection"))
  .catch(err => console.log(err));



app.use("/api/movies", movieRoute)

app.listen(8800, () => {
  console.log("Backend server is running on port 8800");
});
