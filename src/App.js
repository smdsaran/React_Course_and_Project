import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // const fetchMoviesHandler = () => {
  //   fetch("https://swapi.dev/api/films/")
  //     .then((Response) => Response.json())
  //     .then((data) => {
  //       const dataMovies = data.results;

  //       const fetchedData = dataMovies.map((movie) => {
  //         return {
  //           id: movie.episode_id,
  //           title: movie.title,
  //           release: movie.release_date,
  //           openingText: movie.opening_crawl,
  //         };
  //       });

  //       setMovies(fetchedData);
  //     });
  // };

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const Response = await fetch("https://swapi.dev/api/films/");

      // console.log(Response);
      if (Response.ok === false) {
        throw new Error("Something Went Wrong");
      }

      const data = await Response.json();

      const dataMovies = data.results;

      const fetchedData = dataMovies.map((movie) => {
        return {
          id: movie.episode_id,
          title: movie.title,
          release: movie.release_date,
          openingText: movie.opening_crawl,
        };
      });

      setMovies(fetchedData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  let content = <p>Movies Not Found</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
