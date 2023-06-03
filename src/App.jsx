import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import { CallToAction, Footer, Nav } from './components';

function App() {
  return (
    <div>
      <header className="Header-page">
        <div className="Logo">
          <img src="/images/Logo.svg" alt="Little Lemon Logo" />
        </div>

        <Nav />
      </header>

      <CallToAction />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
