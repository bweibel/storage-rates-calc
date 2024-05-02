// ReservationForm.jsx
import { useState, useEffect } from 'react';

import React from 'react';
import './ReservationForm.css';

const ReservationForm = ({ onFormSubmit, deliveryAddress, storageType }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
const handleFormSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  const reservationDate = e.target.reservationDate.value;
  const formData = { reservationDate, deliveryAddress, storageType };

  try {
    await onFormSubmit(formData);  // Assuming onFormSubmit returns a promise
    // handle success, maybe clear the form or show a success message
  } catch (error) {
    // handle error, maybe show an error message
  }

  setIsSubmitting(false);
};

  return (
      <form onSubmit={handleFormSubmit} className="reservation-form">
          <div className='form-group'>
            <label>Full Name:</label>
            <input type="text" name="name" placeholder='Full Name' required />
          </div>
            <div className='form-group'>
            <label>Phone Number:</label>
            <input
            type="tel"
            name="phoneNumber"
            placeholder='xxx-xxx-xxxx'
            required
            pattern="[0-9]{3}-?[0-9]{3}-?[0-9]{4}"
          />
          </div>
          <div className='form-group'>
            <label>Email:</label>
            <input type="email" name="email" placeholder='Email' required />
          </div>
          <div className="calendar-input form-group">
            <label htmlFor="reservationDate">Estimated date you'd like us to drop off your container:</label>
            <input type="date" id="reservationDate" name="reservationDate" required />
          </div>
          <div className='form-group full'>
            <label>Any special circumstances we should know?</label>
            <textarea type="textarea" name="special-circumstances" rows="4" cols="50"/>
      </div>
      <div className='form-group full'>
            <label>How did you find us?</label>
            <select className="" id="how-found" aria-invalid="false" name="how-found"><option value="">Please choose an option</option><option value="Website/Search Engine">Website/Search Engine</option><option value="Saw a Container at someone's House/Business">Saw a Container at someone's House/Business</option><option value="Smart Shopper">Smart Shopper</option><option value="Facebook">Facebook</option><option value="Yelp">Yelp</option><option value="NextDoor">NextDoor</option><option value="Word of Mouth">Word of Mouth</option><option value="Other">Other</option></select>
          </div>
      
      <button type="submit" className='button'>Reserve</button>
    </form>
  );
};

export default ReservationForm;
