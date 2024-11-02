import React, { useState } from 'react'
import arrow from '../assets/Vector.png'

function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0) // Suivi de l'index actuel de la slide

  // Aller à la diapositive suivante
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length)
  }

  // Aller à la diapositive précédente
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length
    )
  }

  return (
    <div className="carousel">
      {pictures.map(
        (slide, index) =>
          index === currentIndex && (
            <img
              key={index}
              src={slide}
              alt={`Slide ${index + 1}`}
              className="carousel__image"
            />
          )
      )}
      {pictures.length > 1 && (
        <span className="carousel__num">
          {currentIndex + 1}/{pictures.length}
        </span>
      )}
      {pictures.length > 1 && (
        <img
          className="carousel__button carousel__button--prev"
          onClick={prevSlide}
          aria-label="Previous Slide"
          src={arrow}
        />
      )}
      {pictures.length > 1 && (
        <img
          className="carousel__button carousel__button--next"
          onClick={nextSlide}
          aria-label="Next Slide"
          src={arrow}
        />
      )}
    </div>
  )
}

export default Carousel
