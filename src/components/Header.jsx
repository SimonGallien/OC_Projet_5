import React from 'react'
import { NavLink } from 'react-router-dom' // Import NavLink au lieu de Link
import logo from '../assets/logo.jpg'

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo Kasa" />
      <nav className="navbar">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `navbar__link ${isActive ? 'navbar__link--active' : ''}`
          }
        >
          Accueil
        </NavLink>

        <NavLink
          to="/About"
          className={({ isActive }) =>
            `navbar__link ${isActive ? 'navbar__link--active' : ''}`
          }
        >
          A propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
