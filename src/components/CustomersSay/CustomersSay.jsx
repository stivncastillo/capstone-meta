import React from 'react';
import { ReactComponent as StarFilledIcon } from '../../assets/icons/star_fill.svg';

function CustomersSay() {
  return (
    <section className="Testimonials-section">
      <div className="Testimonials-section-container container">
        <h2>Testimonials</h2>
        <div className="Testimonials-grid">
          {/* Card */}
          <div className="Card-testimonial">
            <div className="Card-testimonial-rating">
              <StarFilledIcon fill="#F4CE14" />
              <StarFilledIcon fill="#F4CE14" />
              <StarFilledIcon fill="#F4CE14" />
              <StarFilledIcon fill="#F4CE14" />
              <StarFilledIcon fill="#ededed" />
            </div>

            <div className="Card-testimonial-info">
              <div className="Card-testimonial-avatar">
                <img src="/images/testimonials/2.jpg" alt="1" />
              </div>
              <span>Elver gon</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div className="Card-testimonial">
            <div className="Card-testimonial-rating">
              <StarFilledIcon fill="#F4CE14" />
              <StarFilledIcon fill="#F4CE14" />
              <StarFilledIcon fill="#F4CE14" />
              <StarFilledIcon fill="#F4CE14" />
              <StarFilledIcon fill="#F4CE14" />
            </div>

            <div className="Card-testimonial-info">
              <div className="Card-testimonial-avatar">
                <img src="/images/testimonials/3.jpg" alt="1" />
              </div>
              <span>Elver gon</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div className="Card-testimonial">
            <div className="Card-testimonial-rating">
              <StarFilledIcon fill="#F4CE14" />
              <StarFilledIcon fill="#F4CE14" />
              <StarFilledIcon fill="#F4CE14" />
              <StarFilledIcon fill="#F4CE14" />
              <StarFilledIcon fill="#F4CE14" />
            </div>

            <div className="Card-testimonial-info">
              <div className="Card-testimonial-avatar">
                <img src="/images/testimonials/4.jpg" alt="1" />
              </div>
              <span>Elver gon</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div className="Card-testimonial">
            <div className="Card-testimonial-rating">
              <StarFilledIcon fill="#F4CE14" />
              <StarFilledIcon fill="#F4CE14" />
              <StarFilledIcon fill="#F4CE14" />
              <StarFilledIcon fill="#F4CE14" />
              <StarFilledIcon fill="#F4CE14" />
            </div>

            <div className="Card-testimonial-info">
              <div className="Card-testimonial-avatar">
                <img src="/images/testimonials/1.jpg" alt="1" />
              </div>
              <span>Elver gon</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomersSay;
