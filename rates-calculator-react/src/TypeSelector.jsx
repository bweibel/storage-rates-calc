import { useState } from 'react';
// import './TypeSelector.css';
import StorageTypeCard from './StorageTypeCard'

const TypeSelector = () => {
  return (
    <div className="TypeSelector">
      <h2>Step 1: What type of storage do you need?</h2>
      <div className="cards">
        <StorageTypeCard
          title="I Need Storage"
          icon="./how-it-works-3.png"
          description="We deliver the box to your property for your use and pick it up when your done"
        />
        <StorageTypeCard
          title="I'm Moving"
          icon="./how-it-works-4.png"
          description="We deliver the box to your property you fill it, we pick it up and deliver it to your new address"

        />
        <StorageTypeCard
          title="Off-site Storage"
          icon="./how-it-works-4.png"
          description="We deliver the box to your property you fill it, we pick it up and store it at our facility until you are ready for it again"

        />
      </div>
    </div>
  );
};

export default TypeSelector;
