import React, { useState, useEffect, useCallback } from 'react';
// import { v4 as uuid } from 'uuid';

import MoviesList from './components/MoviesList';
import './App.css';
function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // async function fetchMoviesHandler() {
  const fetchMoviesHandler = useCallback(async function () {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://swapi.py4e.com/api/films/');

      if (!response.ok) {
        throw new Error('Something went wrong fetching movies');
      }

      // .then((response) => {
      //   return response.json();
      // })

      const data = await response.json();
      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
          characters: movieData.characters,
        };
      });
      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();

    return () => {};
  }, [fetchMoviesHandler]);

  // const unique_id = uuid();

  let content = <h3>Found no movies.</h3>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    <h3>{error}</h3>;
  }

  if (isLoading) {
    content = <h3>Loading...</h3>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {/* {!isLoading && movies.length > 0 && (
          <MoviesList key={unique_id} movies={movies} />
        )}
        {!isLoading && movies.length === 0 && !error && (
          <h2>Found no movies.</h2>
        )}
        {!isLoading && error && <h3>{error}</h3>}
        {isLoading && <h3>Loading...</h3>} */}

        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
