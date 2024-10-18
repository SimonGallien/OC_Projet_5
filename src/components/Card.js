import React from 'react'

function Card({ cover, title }) {
  return (
    <li className="card card--background">
      <img className="card__img" src={cover} alt="annonce" />
      <div className="card__containerTitle">
        <h2 className="card__title card__title--color">{title}</h2>
      </div>
    </li>
  )
}

export default Card
