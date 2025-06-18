# 🎬 Cageflix – A Nicolas Cage Movie Library

Cageflix is a Netflix-style movie library showcasing the cinematic legacy of Nicolas Cage. Built as a case study project for Trivago’s Student Systems Engineer role, this application demonstrates full-stack capabilities using a MERN-style architecture with a strong focus on responsive frontend design and fuzzy search integration.

---

##  Features

-  **Fuzzy Search** for movies by title, genre, actors, or description  
-  **Nicolas Cage-centric library** using IMDb datasets  
-  **Responsive Design** – works seamlessly across devices  
-  **REST API Backend** using Express & MongoDB  
-  **Modern Frontend** with React, Vite, and Material UI  

---

##  Tech Stack

### Frontend
- **React 18** with Vite for fast development  
- **React Router DOM** for routing  
- **Material UI + Emotion** for UI components and styling  
- **Fuse.js** for fuzzy search  
- **SASS** for custom styling  

### Backend
- **Node.js** with **Express 5**  
- **MongoDB** with **Mongoose**  
- **dotenv** for environment configuration  
- **Axios** for HTTP requests  
- **Nodemon** for development server  

---

---

##  Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/cageflix.git
cd cageflix-main

2. Backend Setup (API)
cd api
npm install
# Create a .env file with your MongoDB connection
echo "MONGO_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/cageflix" > .env
npm start

3. Frontend Setup (Client)
cd ../client
npm install
npm run dev


Access the frontend: http://localhost:5173

Backend API: http://localhost:8800

The IMDb datasets are used as the primary source of movie data. The backend parses and filters them to only include Nicolas Cage's works, which are then served via the /api/movies endpoint.
