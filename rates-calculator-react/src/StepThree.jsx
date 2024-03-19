// StepThree.jsx
import React from 'react';
import ReservationForm from './ReservationForm';
import ContainerSelector from './ContainerSelector';

const StepThree = ({ setContainerCount, containerCount, onReservationSubmit, deliveryAddress, storageType }) => {

  return (
    <section className='step3'>
        <h2>Step 3: What container size do you need?</h2>
        <ContainerSelector
          containerCount={containerCount}
          setContainerCount={setContainerCount}
          storageType={storageType} />
      
        <section className='reservation has-shadow content-box'>
          <h3>Make Your Reservation</h3>
        <ReservationForm
          onFormSubmit={onReservationSubmit}
          deliveryAddress={deliveryAddress}
          storageType={storageType} />

        </section>
    </section>
  );
};

export default StepThree;