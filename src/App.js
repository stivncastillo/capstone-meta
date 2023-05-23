import deliveryIcon from './assets/icons/delivery.svg'

function App() {
  return (
    <div>
      <header className="Header-page">
        <div className="Logo">
          <img src="/images/Logo.svg" alt="Little Lemon Logo" />
        </div>

        <nav className="Main-navigation">
          <ul>
            <li> <a href="#">Home</a> </li>
            <li> <a href="#">About</a> </li>
            <li> <a href="#">Reservations</a> </li>
            <li> <a href="#">Order Online</a> </li>
            <li> <a href="#">Login</a> </li>
          </ul>
        </nav>
      </header>

      <section className="Hero-section">
        <div className="Hero-section-container">
          <div className="Hero-title">
            <h1>Little Lemon <span>Chicago</span></h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              consequatur hic error ipsum id voluptatum impedit doloremque amet
              sapiente quibusdam.
            </p>

            <a href="#" className="Button Button-primary">Reserve a Table</a>
          </div>
          <div className="Hero-image">
            <div></div>
          </div>
        </div>
      </section>

      <section className="Specials-section">
        <div className="Specials-section-container">
          <div className="Specials-section-header">
            <h2>Specials</h2>
            <a href="#" className="Button Button-secondary">Online Menu</a>
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

                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>

                <a href="#" className="Button Button-sm Button-link">Order a delivery <img src={deliveryIcon} alt="Delivery" /></a>
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

                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>

                <a href="#" className="Button Button-sm Button-link">Order a delivery <img src={deliveryIcon} alt="Delivery" /></a>
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

                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>

                <a href="#" className="Button Button-sm Button-link">Order a delivery <img src={deliveryIcon} alt="Delivery" /></a>
              </div>
            </div>
          </div>
        </div>


      </section>
    </div>
  );
}

export default App;
