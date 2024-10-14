import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink au lieu de Link
import logo from '../assets/logo.jpg'

function Header() {

    return (
        <header className='header'>
            <img src={logo} alt='Logo Kasa'/>
            <nav>
                    <NavLink 
                        to='/' 
                        className={({ isActive }) =>
                            isActive ? 'active-page' : 'inactive-page'
                        }
                    >
                        Accueil
                    </NavLink>

                    <NavLink 
                        to='/About' 
                        className={({ isActive }) =>
                            isActive ? 'active-page' : 'inactive-page'
                        }
                    >
                        A propos
                    </NavLink>
            </nav>
        </header>
    )
  }

export default Header