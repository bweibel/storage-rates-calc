// StepTwo.js
import React from 'react';
import { useState } from 'react';
import AddressInput from './AddressInput';


const StepTwo = ({ storageType }) => {
  let content;

  switch (storageType) {
    case 1:
    case 2:
    case 3:
      content = <AddressInput />;
      break;
    default:
      content = null;
  }

  return (
    <div>
      <h2>Step 2: Where are we delivering the storage unit?</h2>
      {content}
    </div>
  );
};
export default StepTwo;