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
            isActive ? 'navbar__link--active' : 'navbar__link--inactive'
          }
        >
          Accueil
        </NavLink>

        <NavLink
          to="/About"
          className={({ isActive }) =>
            isActive ? 'navbar__link--active' : 'navbar__link--inactive'
          }
        >
          A propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
