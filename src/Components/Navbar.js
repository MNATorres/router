import React from "react";
import {NavLink} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div>
      <ul className="links">
        <li><NavLink className={({isActive}) => isActive ? 'active' : 'blue'} to="/">Inicio</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? 'active' : 'blue'} to="/users">Usuarios</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? 'active' : 'blue'} to="/tablas">Tablas</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? 'active' : 'blue'} to="*">Not Found</NavLink></li>
      </ul>
    </div>
  );
}

export default Navbar;
