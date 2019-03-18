import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1> 
      {movies.map(movie => {
        return (
          <div key={movie.title}>
            <h3>{movie.title} - {movie.time} mins</h3>
            <ul>{movie.genres.map(g => {
              return <li key={g}>{g}</li>
            })}</ul>
          </div>)
      })}
    </div>
  );
};

export default Movies;
