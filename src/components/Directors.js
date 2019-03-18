import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <React.Fragment>
      <h1>Directors Page</h1>
      {directors.map((director) => {
        return (
          <div>
            <h2>Name: {director.name}</h2>
            <p>Movies:</p>
            <ul>
              {director.movies.map((movie) => {
                return <li>{movie}</li>
              })}
            </ul>
          </div>
        )
      }
      )}
    </React.Fragment>
  )
}

export default Directors
