import React from 'react';
import {
  CallToAction, Chicago, CustomersSay, Footer, Nav, Specials,
} from '../components';

function Home() {
  return (
    <div>
      <header className="Header-page">
        <div className="Logo">
          <img src="/images/Logo.svg" alt="Little Lemon Logo" />
        </div>

        <Nav />
      </header>

      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
      <Footer />
    </div>
  );
}

export default Home;
