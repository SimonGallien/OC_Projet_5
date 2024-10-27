import React from 'react'
import { useLocation } from 'react-router-dom'
import image1 from '../assets/ImageBanner1.jpg'
import image2 from '../assets/ImageBanner2.jpg'

const Banner = () => {
  const location = useLocation()

  // Définir l'image de bannière en fonction de la route
  const bannerImages = {
    '/': image1,
    '/About': image2,
  }

  // Vérifier si la bannière doit être affichée
  const shouldDisplayBanner = ['/', '/About'].includes(location.pathname)

  // Si la route actuelle ne correspond pas, ne pas afficher la bannière
  if (!shouldDisplayBanner) {
    return null
  }

  // Récupérer l'image correspondant à la route, ou une image par défaut
  const currentImage = bannerImages[location.pathname] || image1

  return (
    <div className="banner">
      <img className="banner__img" src={currentImage} alt="Banner" />
      {location.pathname === '/' && (
        <p className="banner__text">Chez vous, partout et ailleurs</p>
      )}
    </div>
  )
}

export default Banner
