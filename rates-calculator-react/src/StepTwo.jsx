// StepTwo.js
import React from 'react';
import { useState } from 'react';
import AddressInput from './AddressInput';


const StepTwo = ({ storageType, setDeliveryAddress, setDeliveryLatLng  }) => {
  let content;

  switch (storageType) {
    case 1:
    case 2:
    case 3:
      content = <AddressInput
        storageType={storageType}
        setDeliveryAddress={setDeliveryAddress} 
        setDeliveryLatLng={setDeliveryLatLng}
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