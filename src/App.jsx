import React, { useState } from "react";
import movies from "./assets/movies.json";
import MovieCard from "./components/MovieCard/MovieCard.jsx";
import "./App.css";

const App = () => {
  const [likes, setLikes] = useState(0);

  const handleLike = (liked) => {
    setLikes((prevLikes) => (liked ? prevLikes + 1 : prevLikes - 1));
  };

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <div className="header-left">
            <h1 className="logo">🎬 Kino Ro'yxati</h1>
          </div>
          <nav className="header-center">
            <a href="#">Bosh sahifa</a>
            <a href="#">Kinolar</a>
            <a href="#">Yangiliklar</a>
          </nav>
          <div className="header-right">
            <span className="like-icon">❤️</span>
            <span className="like-count">{likes}</span>
          </div>
        </header>
        <main className="movies-container">
          <div className="movies">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} onLike={handleLike} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
