import React from 'react';
import logo from '../assets/logo_white.png'

function Footer() {
    return (
        <footer className='footer'>
            <img src={logo} alt='Logo kasa'/>
            <p className='text-color-white'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
  }

export default Footer