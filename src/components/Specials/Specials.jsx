import React from 'react';
import deliveryIcon from '../../assets/icons/delivery.svg';

function Specials() {
  return (
    <section className="Specials-section">
      <div className="container">
        <div className="Specials-section-header">
          <h2>Specials</h2>
          <a href="#" className="Button Button-secondary">
            Online Menu
          </a>
        </div>

        <div className="Specials-grid">
          {/* card */}
          <div className="Card-plate">
            <div className="Card-plate-media">
              <img src="/images/greek salad.jpg" alt="greek salad" />
            </div>
            <div className="Card-plate-content">
              <div className="Card-plate-header">
                <h4>Greek salad</h4>
                <span>$12.99</span>
              </div>

              <p>
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic
                and rosemary croutons.
              </p>

              <a href="#" className="Button Button-sm Button-link">
                Order a delivery
                {' '}
                <img src={deliveryIcon} alt="Delivery" />
              </a>
            </div>
          </div>
          <div className="Card-plate">
            <div className="Card-plate-media">
              <img src="/images/greek salad.jpg" alt="greek salad" />
            </div>
            <div className="Card-plate-content">
              <div className="Card-plate-header">
                <h4>Greek salad</h4>
                <span>$12.99</span>
              </div>

              <p>
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic
                and rosemary croutons.
              </p>

              <a href="#" className="Button Button-sm Button-link">
                Order a delivery
                {' '}
                <img src={deliveryIcon} alt="Delivery" />
              </a>
            </div>
          </div>
          <div className="Card-plate">
            <div className="Card-plate-media">
              <img src="/images/greek salad.jpg" alt="greek salad" />
            </div>
            <div className="Card-plate-content">
              <div className="Card-plate-header">
                <h4>Greek salad</h4>
                <span>$12.99</span>
              </div>

              <p>
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic
                and rosemary croutons.
              </p>

              <a href="#" className="Button Button-sm Button-link">
                Order a delivery
                {' '}
                <img src={deliveryIcon} alt="Delivery" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specials;
