import React from 'react'
import { Link } from 'react-router-dom'

function Card({ id, cover, title }) {
  return (
    <li className="card card--background">
      <Link to={`/Fiche/${id}`} className="card__link">
        <img className="card__img" src={cover} alt="annonce" />
        <h2 className="card__title card__title--color">{title}</h2>
      </Link>
    </li>
  )
}

export default Card
