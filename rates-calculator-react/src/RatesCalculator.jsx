import { useState } from 'react';
import './RatesCalculator.css';
import TypeSelector from './TypeSelector';
import EstimateBox from "./EstimateBox";

const RatesCalculator = () => {

  const [storageType, setStorageType] = useState(null);

  function handleTypeClick() {
    setStorageType('At Home Storage');
  }

  return (
    <div className="RatesCalculator">
      <TypeSelector />

      { storageType ? (
        <h3>{storageType}</h3>
      ) : '' }

    <EstimateBox />
    </div>
  );
};

export default RatesCalculator;
