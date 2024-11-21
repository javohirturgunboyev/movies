import React, { useState } from "react";
import "./MovieCard.css";

const MovieCard = ({ movie, onLike }) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked((prev) => {
      const newState = !prev;
      onLike(newState);
      return newState;
    });
  };

  return (
    <div className="movie-card">
      <img
        src={movie.image || "https://via.placeholder.com/300x400"}
        alt={movie.title || "No Title"}
        className="movie-image"
      />
      <div className="movie-details">
        <h2>{movie.title || "No Title"}</h2>
        <p>{movie.genre || "No Genre"} | {movie.year || "No Year"}</p>
        <p>{movie.description || "No Description"}</p>
        <p>Rejissyor: {movie.director || "No Director"}</p>
        <p>Reyting: ⭐ {movie.rating || "No Rating"}</p>
        <button
          className={`like-button ${isLiked ? "liked" : ""}`}
          onClick={toggleLike}
        >
          {isLiked ? "Unlike" : "Like"}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;