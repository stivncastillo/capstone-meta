import React from 'react';
import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <section className="Hero-section">
      <div className="Hero-section-container container">
        <div className="Hero-title">
          <h1>
            Little Lemon
            <span>Chicago</span>
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            consequatur hic error ipsum id voluptatum impedit doloremque amet
            sapiente quibusdam.
          </p>

          <Link to="/booking">
            <a href="#" className="Button Button-primary">
              Reserve a Table
            </a>
          </Link>

        </div>
        <div className="Hero-image">
          <div />
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
