import React, { useState } from 'react';

const availableTimes = [
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
];

function Booking() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(0);
  const [ocassion, setOcassion] = useState('');

  const onSubmit = () => {
    if (date === ''
      || time === ''
      || guests === 0
      || ocassion === '') {
      alert('Please fill the form');
    } else {
      alert('Your reservation has been created');
    }
  };

  return (
    <div className="Booking-page container">

      <h1>Booking</h1>
      <p>Please fill the form to reserve</p>

      <section className="Booking-section">
        <div className="Booking-form">
          <h2>Form</h2>
          <form>
            <label htmlFor="res-date">
              Choose date
              <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} />
            </label>

            <label htmlFor="res-time">
              Choose time
              <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
                <option value="">--</option>
                {availableTimes.map((item) => (<option value={item} key={item}>{item}</option>))}
              </select>
            </label>

            <label htmlFor="guests" onChange={(e) => setGuests(e.target.value)}>
              Number of guests
              <input type="number" value={guests} placeholder="1" min="1" max="10" id="guests" />
            </label>

            <label htmlFor="occasion">
              Occasion
              <select id="occasion" value={ocassion} onChange={(e) => setOcassion(e.target.value)}>
                <option value="">--</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </select>
            </label>
          </form>
        </div>

        <div className="Booking-summary">
          <div>
            <h2>Summary</h2>
            <div className="Booking-summary-item">
              <strong>Date and time:</strong>
              <span>
                {date || '--'}
                ,
                {time || ''}
              </span>
            </div>

            <div className="Booking-summary-item">
              <strong>Number of guests:</strong>
              <span>{guests || '--'}</span>
            </div>

            <div className="Booking-summary-item">
              <strong>Ocassion:</strong>
              <span>{ocassion || '--'}</span>
            </div>
          </div>

          <button onClick={onSubmit} type="button" className="Button Button-primary Button-block">Confirm Reservation</button>
        </div>
      </section>
    </div>
  );
}

export default Booking;
