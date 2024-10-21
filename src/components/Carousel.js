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
      <img
        className="carousel__button carousel__button--prev"
        onClick={prevSlide}
        aria-label="Previous Slide"
        src={arrow}
      />
      <div className="carousel__slides">
        {pictures.map((slide, index) => (
          <div
            key={index}
            className={`carousel__slide ${
              index === currentIndex ? 'active' : ''
            }`}
          >
            {/* Afficher les images directement */}
            {index === currentIndex && (
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="carousel__image"
              />
            )}
          </div>
        ))}
      </div>
      <img
        className="carousel__button carousel__button--next"
        onClick={nextSlide}
        aria-label="Next Slide"
        src={arrow}
      />
    </div>
  )
}

export default Carousel
