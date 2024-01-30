import { useState, useEffect } from 'react';
import './EstimateBox.css';
import { getTotalContainerCount, generateContainerInfo, calculateTotalPrice, calculateTotalOffsitePrice } from './utils/functions';
import { PRICES, CONTAINERS } from './utils/constants';

const EstimateBox = ({deliveryDistance, pickupDistance, containerCount, storageType}) => {
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
    <div className="estimate-box has-shadow">
      {deliveryDistance} {pickupDistance}
      
      <h3 className="title">Estimated Cost</h3>
      <div className="prices">
        <div className="price-box">
            <h4>Estimated Delivery</h4>
            <span className="cost">$ {deliveryCost || '-'}</span>
        </div>
        <div className="price-box">
            <h4>Estimated Pickup</h4>
            <span className="cost">$ {pickupCost || '-'}</span>
        </div>
        {storageType == 2 && <div className="price-box">
          <h4>Estimated Relocation</h4>
          <span className="cost">$ {relocationCost || '-'}</span>
        </div>}
        <div className="price-box">
          <h4>Estimated Monthly</h4>
          <span className="cost">$ {monthlyCost || '-'}</span>{storageType == 3 && <span className="cost"> Off-Site $ {offsiteCost || '-'}</span>}
          

        </div>
      
       
      </div>
    </div>
  );
};

export default EstimateBox;