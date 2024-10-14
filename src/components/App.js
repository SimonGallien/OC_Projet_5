import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Error from '../pages/404';
import Header from './Header';
import Footer from './Footer';
import '../styles/App.css';
import '../styles/header.css';
import '../styles/footer.css';

function App() {
  return (
    <Router>
        <Header />
        <main className='content'>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/About" element={<About />}/>
            <Route path="*" element={<Error />}/>
          </Routes>
        </main>
        <Footer />
    </Router>
  );
}

export default App;
