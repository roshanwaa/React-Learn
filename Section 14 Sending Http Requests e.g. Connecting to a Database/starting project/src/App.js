import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import MoviesList from './components/MoviesList';
import './App.css';
function App() {
  const [movies, setMovies] = useState([]);

  
  async function fetchMoviesHandler() {
    const response = await fetch('https://swapi.py4e.com/api/films/');
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
  }

  const unique_id = uuid();

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList key={unique_id} movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
