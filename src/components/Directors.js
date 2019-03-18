import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => {
        return (
          <div key={director.name}>
            <h3>{director.name}</h3>
            <ul>{director.movies.map(m => {
              return <li key={m}>{m}</li>
            })}</ul>
          </div>)
      })}
    </div>
  );
}

export default Directors
