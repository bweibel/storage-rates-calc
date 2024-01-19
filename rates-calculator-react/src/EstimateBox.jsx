import { useState, useEffect } from 'react';
import './EstimateBox.css';
import { getTotalContainerCount, generateContainerInfo, calculateTotalPrice } from './utils/functions';
import { PRICES, CONTAINERS } from './utils/constants';

const EstimateBox = ({deliveryDistance, pickupDistance, containerCount}) => {
  const deliveryCost = calculateDistanceCost(deliveryDistance);
  const pickupCost = calculateDistanceCost(pickupDistance);
  const monthlyCost = calculateMonthlyCost(containerCount);

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

  
  return (
    <div className="estimate-box has-shadow">
      <h3 className="title">Estimated Cost</h3>
      <h4>Estimated Delivery</h4><h4>Estimated Pickup</h4><h4>Estimated Monthly</h4>
      <span className="cost">$ {deliveryCost || '-'}</span>
      <span className="cost">$ {pickupCost || '-'}</span>
      <span className="cost">$ {monthlyCost || '-'}</span>
    </div>
  );
};

export default EstimateBox;