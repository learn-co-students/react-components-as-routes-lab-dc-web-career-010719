import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink exact to="/" activeStyle={{fontWeight: "bold"}}>Home</NavLink>
      <NavLink to="/movies" activeStyle={{fontWeight: "bold"}}>Movies</NavLink>
      <NavLink to="/directors" activeStyle={{fontWeight: "bold"}}>Directors</NavLink>
      <NavLink to="/actors" activeStyle={{fontWeight: "bold"}}>Actors</NavLink>
    </div>
  );
};

export default NavBar;
