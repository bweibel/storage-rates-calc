// StepTwo.js
import React from 'react';
import { useState } from 'react';
import AddressInput from './AddressInput';


const StepTwo = ({ storageType, setInitialDeliveryAddress, setFinalDeliveryAddress, setDeliveryLatLng, setDeliveryDistance, setPickupDistance }) => {
  let content;

  switch (storageType) {
    case 1:
      content = <AddressInput
        storageType={storageType}
        setDeliveryAddress={setInitialDeliveryAddress} 
        setDeliveryLatLng={setDeliveryLatLng}
        setDeliveryDistance={setDeliveryDistance}
        setPickupDistance={setPickupDistance}
      />;
      break;
    case 2:
      content = <><AddressInput
        storageType={storageType}
        addressType='initial'
        setDeliveryAddress={setInitialDeliveryAddress} 
        setDeliveryLatLng={setDeliveryLatLng}
        setDeliveryDistance={setDeliveryDistance}
        setPickupDistance={setPickupDistance}
      />
        <AddressInput
        storageType={storageType}
        addressType='final'
        setDeliveryAddress={setFinalDeliveryAddress} 
        setDeliveryLatLng={setDeliveryLatLng}
        setDeliveryDistance={setDeliveryDistance}
        setPickupDistance={setPickupDistance}
        /></>;
        break;
    case 3:
      content = <AddressInput
        storageType={storageType}
        setDeliveryAddress={setInitialDeliveryAddress} 
        setDeliveryLatLng={setDeliveryLatLng}
        setDeliveryDistance={setDeliveryDistance}
        setPickupDistance={setPickupDistance}
      />;
      break;
    default:
      content = null;
  }

  return (
    <section className='step2'>
      <h2>Step 2: Where are we delivering the storage unit?</h2>
      {content}
    </section>
  );
};
export default StepTwo;