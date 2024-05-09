import { useState, useEffect } from 'react';
import './RatesCalculator.css';
import { CONTAINERS, STORAGE_TYPES, VARS} from './utils/constants';

import { scrollToNext } from './utils/functions';
import TypeSelector from './TypeSelector';
import EstimateBox from "./EstimateBox";
import ConfigBox from "./ConfigBox";

import StepTwo from './StepTwo';
import StepThree from './StepThree';

const dataUrl = 'http://localhost:10033/wp-json/wp/v2/calculator/740';

console.log(VARS);

const RatesCalculator = () => {
  
const [prices, setPrices] = useState( {
          timeModifier: 1,
          fuelModifier: VARS.fuelCost,
          maintenanceModifier: VARS.maintenanceCost,
          fixedCost: VARS.flatFee,
          minDeliveryCost: VARS.minimumDeliveryCost,
        });

  const [containers, setContainers] = useState(VARS.containers);
  const [storageType, setStorageType] = useState(null);
  const [yard, setYard] = useState(VARS.yardLocation);
  const [yardStorage, setYardStorage] = useState(VARS.yardLocationStorage);
  const [deliveryDistance, setDeliveryDistance] = useState(null);
  const [pickupDistance, setPickupDistance] = useState(null);
  const [storageDistance, setStorageDistance] = useState(null);
  const [initialStorageDistance, setInitialStorageDistance] = useState(null);
  const [finalStorageDistance, setFinalStorageDistance] = useState(null);

  const [relocationDistance, setRelocationDistance] = useState(null);

  const [containerCount, setContainerCount] = useState({});

  const [initialDeliveryAddress, setInitialDeliveryAddress] = useState("");
  const [finalDeliveryAddress, setFinalDeliveryAddress] = useState("");

  useEffect(() => {
    // Reset states when storageType changes
    setInitialDeliveryAddress("");
    setFinalDeliveryAddress("");

    setContainerCount({});
  
    setDeliveryDistance(null);
    setRelocationDistance(null);
    setPickupDistance(null);
    setStorageDistance(null);
    
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
        yard={yard}
        yardStorage={yardStorage}
        initialDeliveryAddress={initialDeliveryAddress}
        finalDeliveryAddress={finalDeliveryAddress}
        setParentInitialDeliveryAddress={setInitialDeliveryAddress}
        setParentFinalDeliveryAddress={setFinalDeliveryAddress}
        setParentDeliveryDistance={setDeliveryDistance}
        setParentPickupDistance={setPickupDistance}
        setParentRelocationDistance={setRelocationDistance}
        setParentInitialStorageDistance={setInitialStorageDistance}
        setParentFinalStorageDistance={setFinalStorageDistance}

        setStorageDistance={setStorageDistance} />}
      <EstimateBox
        prices={prices}
        containers={containers}
        deliveryDistance={deliveryDistance}
        pickupDistance={pickupDistance}
        relocationDistance={relocationDistance}
        containerCount={containerCount}
        storageType={storageType}
        initialStorageDistance={initialStorageDistance}
        finalStorageDistance={finalStorageDistance}
      />
       
      {VARS.configMode && <ConfigBox
        prices={prices}
        containers={containers}
        deliveryDistance={deliveryDistance}
        pickupDistance={pickupDistance}
        relocationDistance={relocationDistance}
        containerCount={containerCount}
        storageType={storageType} />}

      {initialDeliveryAddress && <StepThree
        containers={containers}
        containerCount={containerCount}
        setContainerCount={setContainerCount}
        storageType={storageType}
        initialDeliveryAddress={initialDeliveryAddress}
        finalDeliveryAddress={finalDeliveryAddress}/>}


    </div>
  );
};

export default RatesCalculator;
