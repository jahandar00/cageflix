#  Cageflix – A Nicolas Cage Movie Library

**Cageflix** is a movie library showcasing the cinematic legacy of Nicolas Cage. This application demonstrates full-stack capabilities using a MERN-style architecture with a focus on frontend design and fuzzy search integration.

The IMDb datasets are used as the primary source of movie data. The backend parses and filters them to only include Nicolas Cage's works, which are then served via the /api/movies endpoint. 

While the primary dataset was sourced from IMDb, some data (such as movie poster, plot, runtime, actors) was missing or incomplete. To enhance the accuracy and user experience, supplementary data was fetched from the OMDb API.


---

##  Features

-  Clean, modular backend (Express.js + MongoDB)
-  IMDb dataset parsing using Node.js streams
-  OMDb API integration for enriched movie details
-  Fuzzy search by title, description, genre, or actors (Fuse.js)
-  Frontend built with Vite + React + SCSS modules
-  Responsive UI with movie previews, search results, and detail pages

---


##  Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- OMDb API
- IMDb Datasets (`.tsv` parsing with `fs` and `readline`)
- dotenv, cors

### Frontend
- React.js
- React Router DOM
- Fuse.js (fuzzy search)
- Sass (SCSS modules)
- Material UI Icons
- Responsive flexbox layout

---

##  Dataset Usage

- IMDb `name.basics.tsv`, `title.principals.tsv`, and `title.basics.tsv` were parsed to extract **all movies involving Nicolas Cage**.
- Duplicate entries are automatically detected and ignored to ensure a clean dataset.
- These were cross-referenced and enriched with data from the [OMDb API](https://www.omdbapi.com/).
- Final data was stored in MongoDB and accessed through a REST API.

---

##  Fuzzy Search

Implemented using `Fuse.js`, enabling users to search for Nicolas Cage movies by:
- Title
- Genre
- Description
- Actor names

This supports partial matches and typo tolerance — e.g., "triller" → "Thriller".

---

##  Installation Instructions

```bash
### 1. Clone the repo
git clone https://github.com/jahandar00/cageflix.git
cd cageflix

### 2. Backend Setup
cd api
npm install
touch .env
# Add your MongoDB connection string:
# MONGO_URL=mongodb+srv://<user>:<pass>@cluster.mongodb.net/cageflix
node index.js

### 3. Frontend Setup
cd client
npm install
npm run dev

```

Frontend runs on http://localhost:5173
Backend runs on http://localhost:8800


##  Contact

Made by **Jahandar Hakhiyev**  
For **Trivago Fullstack Student Engineer Case Study – 2025**

 Email: [axiyev.cahandar@gmail.com]  
 GitHub: [https://github.com/jahandar00](https://github.com/jahandar00)
