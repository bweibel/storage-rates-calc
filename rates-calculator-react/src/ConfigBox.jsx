import { useState, useEffect } from 'react';
import './ConfigBox.css';
import { getTotalContainerCount, generateContainerInfo, calculateTotalPrice, calculateTotalOffsitePrice } from './utils/functions';
import { PRICES, CONTAINERS } from './utils/constants';

const ConfigBox = ({deliveryDistance, pickupDistance, relocationDistance, containerCount, storageType}) => {
  const deliveryCost = calculateDistanceCost(deliveryDistance);
  const pickupCost = calculateDistanceCost(pickupDistance);
  const relocationCost = calculateMonthlyCost(containerCount);
  const monthlyCost = calculateMonthlyCost(containerCount);
  const offsiteCost = calculateOffsiteCost(containerCount);


  function calculateDistanceCost(distance) {
    if (distance == null) {
      return;
    }
    const deliveryCost = Math.round((distance * PRICES.timeModifier) + (distance * PRICES.fuelModifier) );
    return deliveryCost * getTotalContainerCount(containerCount);
  }

  function calculateMonthlyCost(containerCount) {
    if (containerCount == null || Object.keys(containerCount).length === 0 && containerCount.constructor === Object ) {
      return null;
    }
    const generatedContainerInfo = generateContainerInfo(CONTAINERS, containerCount);
    const totalPrice = calculateTotalPrice(generatedContainerInfo);

    const monthlyCost = Math.round(totalPrice);
    return monthlyCost;
  }

  function calculateOffsiteCost(containerCount) {
    if (containerCount == null || Object.keys(containerCount).length === 0 && containerCount.constructor === Object ) {
      return null;
    }
    const generatedContainerInfo = generateContainerInfo(CONTAINERS, containerCount);
    const totalPrice = calculateTotalOffsitePrice(generatedContainerInfo);

    const monthlyCost = Math.round(totalPrice);
    return monthlyCost;
  }

  
  return (
    <div className="config-box has-shadow" id="estimate-box">     
      <table>
        <tbody>
          <tr><td> Delivery Distance (Dropoff from yard):  </td><td>{deliveryDistance} </td></tr>
          {storageType == 2 && <tr><td> Relocation Distance (Location 1 > Location 2):  </td><td>{relocationDistance}</td></tr>}
          <tr><td> Delivery Distance (Pickup and return to yard):  </td><td>{pickupDistance}</td></tr>
          <tr><td>Time Estimate: {deliveryDistance * PRICES.timeModifier}</td></tr>
          <tr><td>Fuel Cost: {deliveryDistance * PRICES.fuelModifier}</td></tr>
          <tr><td>Maintenance Cost: {deliveryDistance * PRICES.maintenanceModifier}</td></tr>
          <tr><td>Fixed Cost: {PRICES.fixedCost }</td></tr>
          <tr><td>Min Delivery Cost: {PRICES.minDeliveryCost}</td></tr>
        </tbody>
      </table>  
    

    </div>
  );
};

export default ConfigBox;