import React from 'react';

function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer-container container">
        <div className="Footer-grid">
          <div className="Footer-logo">
            <img src="/images/logo-vertical.png" alt="Logo" />
          </div>

          <nav className="Footer-nav">
            <h4>Doormat Nav igation</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Menu</a>
              </li>
              <li>
                <a href="#">Reservations</a>
              </li>
              <li>
                <a href="#">Order Online</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
            </ul>
          </nav>
          <nav className="Footer-nav">
            <h4>Contact</h4>
            <ul>
              <li>2395 Maldove Way,Chicago Illinois</li>
              <li>(629)-243-6827</li>
              <li>info@littlelemon.com</li>
            </ul>
          </nav>
          <nav className="Footer-nav">
            <h4>Social Media Links</h4>
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
