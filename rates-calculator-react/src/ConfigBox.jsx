import { useState, useEffect } from 'react';
import './ConfigBox.css';
import { getTotalContainerCount, generateContainerInfo, calculateTotalPrice, calculateTotalOffsitePrice } from './utils/functions';
import { PRICES, CONTAINERS } from './utils/constants';

const ConfigBox = ({deliveryDistance, pickupDistance, containerCount, storageType}) => {
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
      Delivery Distance: {deliveryDistance} Miles
    </div>
  );
};

export default ConfigBox;