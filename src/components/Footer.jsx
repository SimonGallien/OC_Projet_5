import React from 'react'
import logo from '../assets/logo_white.png'

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo kasa" className="footer__image" />
      <p className="footer__content">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
