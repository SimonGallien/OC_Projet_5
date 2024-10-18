import React from 'react'
import { NavLink } from 'react-router-dom' // Import NavLink au lieu de Link
import error404 from '../assets/404.jpg'

function Error() {
  return (
    <div className="error">
      <img className="error__img404" src={error404} alt="404" />
      <p className="error__txt">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <NavLink className="error__linkToHome" to="/">
        Retourner sur la page d'accueil
      </NavLink>
    </div>
  )
}

export default Error
