import { useState } from 'react';
import './RatesCalculator.css';
import { STORAGE_TYPES, RDM_YARD_LATLONG, PRICES } from './utils/constants';


import TypeSelector from './TypeSelector';
import EstimateBox from "./EstimateBox";
import StepTwo from './StepTwo';
import StepThree from './StepThree';

const RatesCalculator = () => {

  const [storageType, setStorageType] = useState(1);
  const [deliveryDistance, setDeliveryDistance] = useState(null);
  const [pickupDistance, setPickupDistance] = useState(null);
  const [containerCount, setContainerCount] = useState({});

  // const [deliveryAddress, setDeliveryAddress] = useState("");
  // const [deliveryLatLng, setDeliveryLatLng] = useState(null);
  const [deliveryAddress, setDeliveryAddress] = useState("20048 Mt Hope Ln, Bend, OR 97702, USA");
  const [deliveryLatLng, setDeliveryLatLng] = useState({lat: 44.0265512, lng: -121.3216636});

  return (
    <div className="RatesCalculator ">
      <TypeSelector currentType={storageType} onTypeSelect={setStorageType} />

      { storageType ? (
        <h2 className="storage-type-title">{STORAGE_TYPES[storageType].storageTitle}</h2>
      ) : <h2 className="storage-type-title"></h2> }

      <EstimateBox deliveryDistance={deliveryDistance} pickupDistance={pickupDistance} containerCount={containerCount} />
      {storageType && <StepTwo
        storageType={storageType}
        setDeliveryAddress={setDeliveryAddress}
        setDeliveryLatLng={setDeliveryLatLng}
        setDeliveryDistance={setDeliveryDistance}
        setPickupDistance={setPickupDistance} />}
      {deliveryAddress && <StepThree
        containerCount={containerCount}
        setContainerCount={setContainerCount}
        storageType={storageType}
        deliveryAddress={deliveryAddress} />}


    </div>
  );
};

export default RatesCalculator;
