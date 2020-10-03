import React from "react";
import { Link } from 'react-router-dom';
import "./Nav.css";

function Nav(props) {
  return (
    <div className="nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/new">Novo registro</Link></li>
        <li><Link to="/visualizations">Visualizações</Link></li>
      </ul>
    </div>
  )
}

export default Nav;