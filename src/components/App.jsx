import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Fiche from '../pages/Fiche'
import Error from '../pages/404'
import Header from './Header'
import Footer from './Footer'
import Banner from './Banner'
import '../styles/reset.css'
import '../styles/App.css'
import '../styles/header.css'
import '../styles/Banner.css'
import '../styles/footer.css'
import '../styles/card.css'
import '../styles/Home.css'
import '../styles/Collapse.css'
import '../styles/404.css'
import '../styles/carousel.css'

function App() {
  return (
    <Router>
      <Header />
      <main className="content">
        <Banner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Fiche/:id" element={<Fiche />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
