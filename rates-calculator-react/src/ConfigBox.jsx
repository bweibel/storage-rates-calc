import { useState, useEffect } from 'react';
import './ConfigBox.css';
import { getTotalContainerCount, generateContainerInfo, calculateTotalPrice, calculateTotalOffsitePrice } from './utils/functions';
// import { containers } from './utils/constants';

const ConfigBox = ({prices, containers, deliveryDistance, pickupDistance, relocationDistance, containerCount, storageType}) => {
  const deliveryCost = calculateDistanceCost(deliveryDistance);
  const pickupCost = calculateDistanceCost(pickupDistance);
  const relocationCost = calculateMonthlyCost(containerCount);
  const monthlyCost = calculateMonthlyCost(containerCount);
  const offsiteCost = calculateOffsiteCost(containerCount);


  function calculateDistanceCost(distance) {
    if (distance == null) {
      return;
    }
    const deliveryCost = Math.round((distance * prices.timeModifier) + (distance * prices.fuelModifier) );
    return deliveryCost * getTotalContainerCount(containerCount);
  }

  function calculateMonthlyCost(containerCount) {
    if (containerCount == null || Object.keys(containerCount).length === 0 && containerCount.constructor === Object ) {
      return null;
    }
    const generatedContainerInfo = generateContainerInfo(containers, containerCount);
    const totalPrice = calculateTotalPrice(generatedContainerInfo);

    const monthlyCost = Math.round(totalPrice);
    return monthlyCost;
  }

  function calculateOffsiteCost(containerCount) {
    if (containerCount == null || Object.keys(containerCount).length === 0 && containerCount.constructor === Object ) {
      return null;
    }
    const generatedContainerInfo = generateContainerInfo(containers, containerCount);
    const totalPrice = calculateTotalOffsitePrice(generatedContainerInfo);

    const monthlyCost = Math.round(totalPrice);
    return monthlyCost;
  }

  
  return (
    <div className="config-box has-shadow" id="estimate-box">     
      <h3>Config</h3>
      <table>
        <tbody>
          <tr><td> Delivery Distance (Dropoff from yard):  </td><td>{deliveryDistance} </td></tr>
          {storageType == 2 && <tr><td> Relocation Distance (Location 1 to Location 2):  </td><td>{relocationDistance}</td></tr>}
          <tr><td> Delivery Distance (Pickup and return to yard):  </td><td>{pickupDistance}</td></tr>
          <tr><td>Fuel Cost: {deliveryDistance * prices.fuelModifier}</td></tr>
          <tr><td>Maintenance Cost: {deliveryDistance * prices.maintenanceModifier}</td></tr>
          <tr><td>Fixed Cost: {prices.fixedCost }</td></tr>
          <tr><td>Min Delivery Cost: {prices.minDeliveryCost}</td></tr>
        </tbody>
      </table>  
    

    </div>
  );
};

export default ConfigBox;