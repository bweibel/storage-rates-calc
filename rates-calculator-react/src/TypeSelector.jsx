import { useState } from 'react';
// import './TypeSelector.css';
import { STORAGE_TYPES } from './utils/constants';
import StorageTypeCard from './StorageTypeCard'

const TypeSelector = ({ currentType, onTypeSelect }) => {
  return (
    <div className="TypeSelector">
      <h2>Step 1: What type of storage do you need?</h2>
      <div className="cards">
        {Object.entries(STORAGE_TYPES).map(([typeKey, typeData]) => (
          <StorageTypeCard
            key={typeKey}
            type={parseInt(typeKey, 10)}
            currentType={currentType}
            onTypeSelect={onTypeSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default TypeSelector;