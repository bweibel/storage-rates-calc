// StepTwo.js
import React from 'react';
import { useState, useEffect } from 'react';
import AddressInput from './AddressInput';
import { metersToMiles, scrollToNext } from './utils/functions';


const StepTwo = ({ storageType, initialDeliveryAddress, finalDeliveryAddress, setParentInitialDeliveryAddress, setParentFinalDeliveryAddress, setParentDeliveryDistance, setParentPickupDistance, setParentRelocationDistance, setParentInitialStorageDistance, setParentFinalStorageDistance, yard, yardStorage }) => {

  const [initialAddress, setInitialAddress] = useState(initialDeliveryAddress);
  const [finalAddress, setFinalAddress] = useState(finalDeliveryAddress);

  const [initialDistance, setInitialDistance] = useState(0);
  const [relocationDistance, setRelocationDistance] = useState( 0 );
  const [finalDistance, setFinalDistance] = useState(0);
  const [initialStorageDistance, setInitialStorageDistance] = useState(0);
  const [finalStorageDistance, setFinalStorageDistance] = useState(0);


  const [finalDestinationKnown, setfinalDestinationKnown] = useState(false);

   // useEffect to update localDeliveryDistance whenever deliveryDistance prop changes
  useEffect(() => {
    console.log("An address Changed. Checking relocation distance")
    if (initialAddress && finalAddress) { 
      if (storageType == 2) {
        setRelocationDistance(calculateRelocationDistance(initialAddress, finalAddress));
        setParentRelocationDistance( relocationDistance  );
      } 
    } 
  }, [initialAddress, finalAddress]);  // Dependency array includes deliveryDistance


  // 
  // setInitialDeliveryAddress(address)
  // 
  function setInitialDeliveryAddress(address) {

    calculateDropoffDistance(address, yard)
    setInitialAddress(address);
    setParentInitialDeliveryAddress(address);

    // If this is basic storage, the Final Address is the same as initial
    if (storageType == 1) {
      setFinalDeliveryAddress(address);
    }

    console.log(storageType);
    if (storageType == 3) {
      // TODO: if final address known
      calculateInitialYardDistance(address, yardStorage);
    }
  }

  // 
  // setFinalDeliveryAddress(address)
  // 
  function setFinalDeliveryAddress(address) {
    console.log("Setting Final Address");
    console.log(address);
    calculatePickupDistance(address, yard);

    setFinalAddress(address);
    setParentFinalDeliveryAddress(address);

    if (storageType == 3) {
      calculateFinalYardDistance(address, yardStorage);
    }
  }

  // 
  // Calculate the distance between two points
  // Returns in miles
  // 
  function calculateDrivingDistance(addressInitial, addressFinal, callback) {
    console.log("Calculating distance for " + addressInitial + " and " + addressFinal);
    let directionsService = new google.maps.DirectionsService();

    let request = {
        origin: addressInitial,  // LatLng object
        destination: addressFinal, // LatLng object
        travelMode: google.maps.TravelMode.DRIVING,
    };

    directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            // Get the distance from the response
          let distance = response.routes[0].legs[0].distance.value; // Distance in meters
          const distanceInMiles = metersToMiles(distance);
          callback(null, distanceInMiles);
        } else {
            // Handle the error
            callback(new Error('Cannot retrieve driving distance: ' + status));
        }
    });
}
  
  // 
  // Calculate initial Dropoff Distance
  // 
  function calculateDropoffDistance(deliveryLatLng, yard) {
    console.log("calculating Drop off");
    calculateDrivingDistance(deliveryLatLng, yard, (e, distance) => {
      setInitialDistance(distance);
      setParentDeliveryDistance(distance);
      // setParentInitialDistance( distance );
    })
  }
 
  // 
  // Calculate relocation Distance
  // 
  function calculateRelocationDistance(initalAddress, finalAddress) {
    console.log("calculating Relocation");
    if (initialAddress == null || finalAddress == null) {
      console.log("One of the addresses doesn't exist yet");
      return null;
    }
    calculateDrivingDistance(initalAddress, finalAddress, (e, distance ) => {
      setRelocationDistance(distance);
      setParentRelocationDistance(distance);
    })
  }

  // 
  // Calculate final pickup Distance
  // 
  function calculatePickupDistance(pickupAddress, yard) {
    console.log("calculating Pickup");
    calculateDrivingDistance(pickupAddress, yard, (e, distance) => {
      console.log(distance);
      setFinalDistance(distance);
      setParentPickupDistance(distance);
    })
  }

  // 
  // Calculate storage yard Distance
  // 
  function calculateInitialYardDistance(address, yardStorage) {
    console.log("Calculating Storage Yard distance to ");
    console.log(yardStorage);
    calculateDrivingDistance(address, yardStorage, (e, distance) => {
      console.log(distance);
      setInitialStorageDistance(distance);
      setParentInitialStorageDistance(distance);
    })
  }

     // 
  // Calculate final storage yard Distance
  // 
  function calculateFinalYardDistance(address, yardStorage) {
    console.log("Calculating Storage Yard distance");
    calculateDrivingDistance(address, yardStorage, (e, distance) => {
      console.log(distance);
      setFinalStorageDistance(distance);
      setParentFinalStorageDistance(distance);
    })
  }

  const handleKnownDestinationClick = () => {
    setfinalDestinationKnown( ! finalDestinationKnown );
  };

  let content;

  switch (storageType) {
    case 1:
      content = <AddressInput
        setParentAddress={setInitialDeliveryAddress} 
      />;
      break;
    case 2:
      content = <><AddressInput
        storageType={storageType}
        addressType='initial'
        setParentAddress={setInitialDeliveryAddress} 

      />
        <AddressInput
        storageType={storageType}
        addressType='final'
        setParentAddress={setFinalDeliveryAddress} 
        /></>;
        break;
    case 3:
      content = <>
      <AddressInput
        storageType={storageType}
        addressType='initial'
        setParentAddress={setInitialDeliveryAddress} 
        />
      { <label className="checkbox-container"><input type="checkbox" onClick={handleKnownDestinationClick} /><span className="checkmark"></span>I know my final destination</label>}
      {finalDestinationKnown && <AddressInput
        storageType={storageType}
        addressType='final'
        setParentAddress={setFinalDeliveryAddress} 
      />}
      </>;
      break;
    default:
      content = null;
  }

  return (
    <section className='step2 inner'>
      <h2>Step 2: Where are we delivering the storage unit?</h2>
      {content}
    </section>
  );
};
export default StepTwo;