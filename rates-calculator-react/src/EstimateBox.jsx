import { useState } from 'react';
import './EstimateBox.css';
import logo from './logo.svg';

const EstimateBox = ({ deliveryCost, pickupCost, monthlyCost }) => {
  return (
    <div className="estimate-box">
          <h3 className="title">Estimated Cost</h3>
        <h4>Estimated Delivery</h4><h4>Estimated Pickup</h4><h4>Estimated Monthly</h4>
        <span className="cost">${ deliveryCost }</span><span className="cost">${ pickupCost }</span><span className="cost">${ monthlyCost }</span>

          </div>
  );
};

export default EstimateBox;
