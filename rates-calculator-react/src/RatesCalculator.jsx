import { useState } from 'react';
import './RatesCalculator.css';
import { STORAGE_TYPES } from './utils/constants';
import TypeSelector from './TypeSelector';
import EstimateBox from "./EstimateBox";
import StepTwo from './StepTwo';

const RatesCalculator = () => {

  const [storageType, setStorageType] = useState(null);

  return (
    <div className="RatesCalculator">
      <TypeSelector currentType={storageType} onTypeSelect={setStorageType} />

      { storageType ? (
        <h3>{STORAGE_TYPES[storageType].title}</h3>
      ) : '' }

      <EstimateBox />
      { storageType && <StepTwo storageType={storageType} /> }

    </div>
  );
};

export default RatesCalculator;
