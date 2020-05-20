import React from "react";

const MovieCard = ({ movie }) => {
  if (movie.poster_path !== null) {
    movie.img = `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${
      movie.poster_path
    }`;
  } else {
    movie.img =
      "https://source.unsplash.com/random/185x278/?movie,theater,camera";
  }
  return (
    <div className="card">
      <img
        className="card--image"
        src={movie.img}
        alt={movie.title + " poster"}
      />
      <div className="card--content">
        <h3 className="card--title">{movie.title}</h3>
        <p>
          <small>RELEASE DATE: {movie.release_date}</small>
        </p>
        <p>
          <small>RATING: {movie.vote_average}</small>
        </p>
        <p className="card--descr">{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
