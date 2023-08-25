import { useState, useEffect } from 'react';
import './EstimateBox.css';
import logo from './logo.svg';

const EstimateBox = () => {
  const [deliveryCost, setDeliveryCost] = useState(0);
  const [pickupCost, setPickupCost] = useState(0);
  const [monthlyCost, setMonthlyCost] = useState(0);

  const calculateDeliveryCost = () => {
    // Placeholder logic
    return 50;  // static value for now
  };

  const calculatePickupCost = () => {
    // Placeholder logic
    return 40;  // static value for now
  };

  const calculateMonthlyCost = () => {
    // Placeholder logic
    return 150;  // static value for now
  };

  useEffect(() => {
    setDeliveryCost(calculateDeliveryCost());
    setPickupCost(calculatePickupCost());
    setMonthlyCost(calculateMonthlyCost());
  }, []);

  return (
    <div className="estimate-box has-shadow">
      <h3 className="title">Estimated Cost</h3>
      <h4>Estimated Delivery</h4><h4>Estimated Pickup</h4><h4>Estimated Monthly</h4>
      <span className="cost">${ deliveryCost }</span><span className="cost">${ pickupCost }</span><span className="cost">${ monthlyCost }</span>
    </div>
  );
};

export default EstimateBox;