import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Rating({ rating }) {
  const stars = Array(5).fill(0)

  return (
    <div className="rating__star">
      {stars.map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          //   color={index < rating ? 'gold' : 'gray'}
          className={index < rating ? 'rating__star--1' : 'rating__star--0'}
        />
      ))}
    </div>
  )
}

export default Rating
