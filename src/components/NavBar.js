import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return <aside className="menu">
    <p className="menu-label">
      General
    </p>
    <ul className="menu-list">
      <li><a>Search</a></li>
    </ul>
  </aside>

}

export default NavBar