import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar: React.FC = () => (
    <nav>
    <div className="nav-wrapper teal accent-4 px1">
      <NavLink to="/" className="brand-logo center">TO-DO LIST: React-v18 & Typescript-v4 & React-router-dom-v6</NavLink>
      <ul className="left hide-on-med-and-down">
        <li><NavLink to="/">TO-DO</NavLink></li>
        <li><NavLink to="/about">INFO</NavLink></li>
      </ul>
    </div>
  </nav>
)