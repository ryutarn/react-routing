import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'

function Nav() {

  const navStyle = {
    color: 'white'
  }
  const logoStyle = {
    color: 'rgb(45, 255, 181)'
  }


  return (
    <nav>
      <Link to='/'>
        <h3 style={logoStyle}>Logo</h3>
      </Link>
      <ul className="nav-links">
        <Link style={navStyle} to='/about'>
          <li>About</li>
        </Link>
        <Link style={navStyle} to='/shop'>
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
