import React, { useState } from 'react'
import arrow from '../assets/arrow_back_ios-24px 2.png'

function Collapse({ title, content }) {
  // Utilisation de useState pour gérer l'état de l'élément
  const [isOpen, setIsOpen] = useState(false) // Par défaut, l'élément est fermé

  function handleClick() {
    setIsOpen(!isOpen) // Inverse l'état (fermé -> ouvert, ouvert -> fermé)
  }

  return (
    <li className="collapse collapse--backgroundColor">
      <div className="collapse__containerTitle collapse__containerTitle--backgroundColor">
        <h2 className="collapse__title collapse__title--color">{title}</h2>
        <img src={arrow} alt="icone" onClick={() => handleClick()} />
      </div>
      {isOpen && <p className="collapse__txt">{content}</p>}
    </li>
  )
}

export default Collapse
