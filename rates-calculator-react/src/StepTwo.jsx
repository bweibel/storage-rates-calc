// StepTwo.js
import React from 'react';
import { useState, useEffect } from 'react';
import AddressInput from './AddressInput';
import { metersToMiles, scrollToNext } from './utils/functions';


const StepTwo = ({ storageType, initialDeliveryAddress, finalDeliveryAddress, setParentInitialDeliveryAddress, setParentFinalDeliveryAddress, setParentDeliveryDistance, setParentPickupDistance, setParentRelocationDistance, yard, yardStorage }) => {

  const [initialAddress, setInitialAddress] = useState(initialDeliveryAddress);
  const [finalAddress, setFinalAddress] = useState(finalDeliveryAddress);

  const [initialDistance, setInitialDistance] = useState(0);
  const [relocationDistance, setRelocationDistance] = useState( 0 );
  const [finalDistance, setFinalDistance] = useState(0);

  const [finalDestinationKnown, setfinalDestinationKnown] = useState(false);

   // useEffect to update localDeliveryDistance whenever deliveryDistance prop changes
  useEffect(() => {
    console.log(initialAddress)
    if (initialAddress && finalAddress) { 
      setRelocationDistance( calculateRelocationDistance(initialAddress, finalAddress) );
    }
  }, [initialAddress, finalAddress]);  // Dependency array includes deliveryDistance

  useEffect(() => {
    console.log(initialAddress)
    if (initialAddress && finalAddress) { 
      setParentRelocationDistance( relocationDistance  );
    }
  }, [relocationDistance]);  // Dependency array includes deliveryDistance

  // 
  // setInitialDeliveryAddress(address)
  // 
  function setInitialDeliveryAddress(address) {
    console.log("Setting Inital Address");
    console.log(address);

    calculateDropoffDistance(address, yard)
    setInitialAddress(address);
    setParentInitialDeliveryAddress(address);

    // If this is basic storage, the Final Address is the same as initial
    if (storageType == 1) {
      setFinalDeliveryAddress(address);
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
    // If this is a relocation, calculate distance
    if (storageType == 2) {
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
      return null;
    }
    calculateDrivingDistance(initalAddress, finalAddress, (e, distance ) => {
      setRelocationDistance(distance);
    })
  }

  // 
  // Calculate final pickup Distance
  // 
  function calculatePickupDistance(pickupLatLng, yard) {
    console.log("calculating Pickup");
    calculateDrivingDistance(pickupLatLng, yard, (e, distance) => {
      console.log(distance);
      setFinalDistance(distance);
      setParentPickupDistance(distance);
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
      { <label class="container"><input type="checkbox" onClick={handleKnownDestinationClick} /><span class="checkmark"></span>I know my final destination</label>}
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