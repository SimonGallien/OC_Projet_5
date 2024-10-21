import React, { useState } from 'react'
import arrow from '../assets/arrow_back_ios-24px 2.png'

function Collapse({ title, content }) {
  // Utilisation de useState pour gérer l'état de l'élément
  const [active, setActive] = useState(false) // Par défaut, l'élément est fermé

  function handleClick() {
    setActive(!active) // Inverse l'état (fermé -> ouvert, ouvert -> fermé)
  }

  return (
    <div className={`collapse ${active ? 'collapse__active' : ''}`}>
      <div className="collapse__head">
        <h2 className="collapse__head__title">{title}</h2>
        <img
          src={arrow}
          alt="icon"
          className={`collapse__icon ${active ? 'collapse__icon--Rotate' : ''}`} // Rotation de l'icône
          onClick={() => handleClick()}
        />
      </div>
      <div
        className={`collapse__content ${
          active ? 'collapse__content--scale' : ''
        }`}
      >
        {content}
      </div>
    </div>
  )
}

export default Collapse
