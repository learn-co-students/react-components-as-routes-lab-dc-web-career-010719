import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => {
        return (
          <div key={actor.name}>
            <h3>{actor.name}</h3>
            <ul>{actor.movies.map(m => {
              return <li key={m}>{m}</li>
            })}</ul>
          </div>)
      })}
    </div>
  );
};

export default Actors;
