// StepThree.jsx
import React from 'react';
import ReservationForm from './ReservationForm';
// ... other imports ...

const StepThree = ({ onReservationSubmit, deliveryAddress, storageType }) => {

  return (
    <section className='step3'>
          {/* Title and ContainerSelector components here ... */}
          <section className='reservation has-shadow content-box'>
            <h3>Make Your Reservation</h3>
            <ReservationForm onFormSubmit={onReservationSubmit} deliveryAddress={deliveryAddress} storageType={storageType} />

          </section>
    </section>
  );
};

export default StepThree;