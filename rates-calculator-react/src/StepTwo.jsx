// StepTwo.js
import React from 'react';
import { useState } from 'react';
import AddressInput from './AddressInput';
import { metersToMiles, scrollToNext } from './utils/functions';


const StepTwo = ({ storageType, deliveryLatLng, finalLatLng, setInitialDeliveryAddress, setFinalDeliveryAddress, setDeliveryLatLng, setDeliveryDistance, setPickupDistance, setPickupLatLng, yard, yardStorage }) => {
  let content;

  const [initialDistance, setinitialDistance] = useState(calculateDropoffDistance(deliveryLatLng, yard));
  const [relocationDistance, setRelocationDistance] = useState(calculateDropoffDistance(deliveryLatLng, finalLatLng));

  // const [distance, setDistance] = useState( calculateDropoffDistance(deliveryLatLng, yard) );


//     // Calculate distance to yard from each address
//     const formattedLatLng = new window.google.maps.LatLng(selectedLatLng.lat, selectedLatLng.lng);
//     const yardLatLng = new window.google.maps.LatLng(yard.lat, yard.lng);
//     const yardStorageLatLng = new window.google.maps.LatLng(yardStorage.lat, yardStorage.lng);
//     const computedDistance = window.google.maps.geometry.spherical.computeDistanceBetween(formattedLatLng, yardLatLng);

  // calculateDrivingDistance(formattedLatLng, yardLatLng, (e, distance) => {
  //   const distanceInMiles = metersToMiles(distance);
  //   setPickupDistance(distanceInMiles);
  //   setDeliveryDistance(distanceInMiles);

  //   if (addressType == 'initial') {
  //       scrollToNext("initialaddress");
  //   } else if(addressType == 'final'){
  //       console.log("calculating second address");
  //       console.log(deliveryLatLng);
  //       const formattedDeliveryLatLng = new window.google.maps.LatLng(deliveryLatLng.lat, deliveryLatLng.lng);

  //       console.log(formattedLatLng);
  //       calculateDrivingDistance(formattedDeliveryLatLng, formattedLatLng, (e, distance) => {
  //           const distanceInMiles = metersToMiles(distance);
  //           console.log("second address distance:" + distanceInMiles)
  //           setRelocationDistance(distanceInMiles)
  //           scrollToNext("finaladdress" );
  //       }
  //       )
  //   }
  // })

  // Calculate the distance between two points
  // Returns in miles
  function calculateDrivingDistance(addressInitial, addressFinal, callback) {
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
  
  // Calculate initial Dropoff Distance
  function calculateDropoffDistance(deliveryLatLng, yard) {
    console.log("calculating Drop off");
    calculateDrivingDistance(deliveryLatLng, yard, (e, distance) => {
      return (distance);
    })
  }
 

  // Calculate relocation Distance
  function calculateRelocationDistance() {
    console.log("calculating Relocation");
    calculateDrivingDistance(deliveryLatLng, yard, (e, distance) => {
      return (distance);
    })
  }

  // Calculate final pickup Distance
  function calculatePickupDistance() {
    console.log("calculating Pickup");
    calculateDrivingDistance(deliveryLatLng, yard, (e, distance) => {
      return (distance);
    })
  }


  switch (storageType) {
    case 1:
      content = <AddressInput
        setParentAddress={setInitialDeliveryAddress} 
        setParentLatLng={setDeliveryLatLng}
      />;
      break;
    case 2:
      content = <><AddressInput
        storageType={storageType}
        yard={yard}
        yardStorage={yardStorage}
        addressType='initial'
        setParentAddress={setInitialDeliveryAddress} 
        setParentLatLng={setDeliveryLatLng}
        setDeliveryDistance={setDeliveryDistance}
        setPickupDistance={setPickupDistance}
        setRelocationDistance={setRelocationDistance}
      />
        <AddressInput
        storageType={storageType}
        yard={yard}
        yardStorage={yardStorage}
        deliveryLatLng={deliveryLatLng}
        addressType='final'
        setParentAddress={setFinalDeliveryAddress} 
        setParentLatLng={setPickupLatLng}
        setDeliveryDistance={setPickupDistance}
        setPickupDistance={setPickupDistance}
        setRelocationDistance={setRelocationDistance}
        /></>;
        break;
    case 3:
      content = <>
      <AddressInput
        storageType={storageType}
        yard={yard}
        yardStorage={yardStorage}
        setDeliveryAddress={setInitialDeliveryAddress} 
        setDeliveryLatLng={setDeliveryLatLng}
        setDeliveryDistance={setDeliveryDistance}
        setPickupDistance={setPickupDistance}
        />
        <a className="calculator-button" >I know my final destination</a>
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