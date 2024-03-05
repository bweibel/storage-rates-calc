import { useState, useEffect } from 'react';
import './RatesCalculator.css';
import { STORAGE_TYPES, RDM_YARD_LATLONG, PRICES } from './utils/constants';

import { scrollToNext } from './utils/functions';
import TypeSelector from './TypeSelector';
import EstimateBox from "./EstimateBox";
import ConfigBox from "./ConfigBox";

import StepTwo from './StepTwo';
import StepThree from './StepThree';

const RatesCalculator = () => {

  const [storageType, setStorageType] = useState(null);
  const [deliveryDistance, setDeliveryDistance] = useState(null);
  const [deliveryLatLng, setDeliveryLatLng] = useState(null);
  const [pickupDistance, setPickupDistance] = useState(null);
  const [pickupLatLng, setPickupLatLng] = useState(null);

  const [containerCount, setContainerCount] = useState({});

  const [initialDeliveryAddress, setInitialDeliveryAddress] = useState("");
  const [finalDeliveryAddress, setFinalDeliveryAddress] = useState("");


  useEffect(() => {
    // Reset states when storageType changes
    setInitialDeliveryAddress("");
    setFinalDeliveryAddress("");

    setContainerCount({});
  
    setDeliveryDistance(null);
    setDeliveryLatLng(null);
    setPickupDistance(null);
    setPickupLatLng(null);
    
    scrollToNext("steptwo");
  }, [storageType]);

  return (
    <div className="RatesCalculator ">
      <TypeSelector currentType={storageType} onTypeSelect={setStorageType} />
      
      { storageType ? (
        <h2 className="storage-type-title" id="step-two">{STORAGE_TYPES[storageType].storageTitle}</h2>
      ) : <h2 className="storage-type-title"></h2> }

      {storageType && <StepTwo
        storageType={storageType}
        setInitialDeliveryAddress={setInitialDeliveryAddress}
        setFinalDeliveryAddress={setFinalDeliveryAddress}
        setDeliveryLatLng={setDeliveryLatLng}
        setPickupLatLng={setPickupLatLng}
        setDeliveryDistance={setDeliveryDistance}
        setPickupDistance={setPickupDistance} />}
            <EstimateBox deliveryDistance={deliveryDistance} pickupDistance={pickupDistance} containerCount={containerCount} storageType={storageType} />
            <ConfigBox deliveryDistance={deliveryDistance} pickupDistance={pickupDistance} containerCount={containerCount} storageType={storageType} />

      {initialDeliveryAddress && <StepThree
        containerCount={containerCount}
        setContainerCount={setContainerCount}
        storageType={storageType}
        initialDeliveryAddress={initialDeliveryAddress}
        finalDeliveryAddress={finalDeliveryAddress}/>}


    </div>
  );
};

export default RatesCalculator;
