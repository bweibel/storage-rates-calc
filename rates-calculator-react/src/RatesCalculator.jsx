import { useState } from 'react';
import './RatesCalculator.css';
import { STORAGE_TYPES, RDM_YARD_LATLONG } from './utils/constants';
import TypeSelector from './TypeSelector';
import EstimateBox from "./EstimateBox";
import StepTwo from './StepTwo';

const RatesCalculator = () => {

  const [storageType, setStorageType] = useState(null);
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [deliveryLatLng, setDeliveryLatLng] = useState(null);

  return (
    <div className="RatesCalculator ">
      <TypeSelector currentType={storageType} onTypeSelect={setStorageType} />

      { storageType ? (
        <h2 className="storage-type-title">{STORAGE_TYPES[storageType].storageTitle}</h2>
      ) : <h2 className="storage-type-title"></h2> }

      <EstimateBox />
      { storageType && <StepTwo storageType={storageType} setDeliveryAddress={setDeliveryAddress} setDeliveryLatLng={setDeliveryLatLng} /> }

    </div>
  );
};

export default RatesCalculator;
