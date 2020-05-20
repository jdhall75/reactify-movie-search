import React, { useState } from "react";
import MovieCard from "./MovieCard";
import ResultsBar from "./ResultsBar";

const SearchMovie = () => {
  // states - input query and movies
  const [query, setQuery] = useState("");

  // set the movies state
  const [movies, setMovies] = useState([]);

  const [pages, setPages] = useState({});

  const searchMovies = async e => {
    e.preventDefault();

    // define somewhere in settings and import this
    const api_key = "a5703d57443b96b41962ed11c3e81813";

    if (query === "") {
      setMovies([]);
      return;
    }

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      setPages(data);
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label htmlFor="query" className="label">
          Movie Name
        </label>
        <input
          name="query"
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="input"
          type="text"
          placeholder="Search for a movie..."
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <ResultsBar pages={pages} />
      <div className="card-list">
        {movies.map(movie => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </>
  );
};

export default SearchMovie;
