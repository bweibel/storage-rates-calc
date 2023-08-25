import React from 'react';
import { useState } from 'react';
import { getTotalContainerCount } from './utils/functions';
import { CONTAINERS } from './utils/constants';
import './ContainerSelector.css';

const ContainerSelector = ({ containerCount, setContainerCount }) => {
  const LARGE_THRESHOLD = 5;
  const [showWarning, setShowWarning] = useState(false);

  const handleCloseWarning = () => {
    setShowWarning(false);
  };

  const handleContainerCountChange = (containerType, change) => {
    setContainerCount(prevState => {
      const currentCount = prevState[containerType] || 0;
      const newCount = currentCount + change;
  
      // Construct the next state before determining if the warning should be shown
      const nextState = { ...prevState, [containerType]: newCount < 0 ? 0 : newCount };
      const total = getTotalContainerCount(nextState);
  
      if (total > LARGE_THRESHOLD) {
        setShowWarning(true);
      } else {
        setShowWarning(false);  // Reset the warning if total is now below the threshold
      }
  
      return nextState;
    });
  };
  
  return (
    <div className="containers">
      <div className="cards">
      
        {CONTAINERS.map(container => (
          <div key={container.id} className='container-card card has-shadow'>
            <h4 className='container-title'>{container.size}</h4>
            <img src={container.image} alt="" width="120px" />
            <div className="quantity">
              <button 
                className='quantity-button quantity-down'
              onClick={() => handleContainerCountChange(container.id, -1)}
            >
            -
            </button>
            <input 
              type="text" 
              readOnly
              value={containerCount[container.id] || 0}
            />
              <button 
              className='quantity-button quantity-up'
              onClick={() => handleContainerCountChange(container.id, 1)}
            >
              +
            </button>
              </div>
          </div>
        ))}

      <a href="#" className='container-details'>Container Size Details</a>
      {showWarning && 
          <div className="warning has-shadow inner content-box">
            <button className="close-warning" onClick={handleCloseWarning}>x</button>
            <h3>That looks like a lot of containers!</h3>
            <p>You might want to give us a call and one of our representatives can help you with your order directly.</p>
            <span className="tel"><a href="tel:+18006672670">1-800-667-2670</a></span>
      </div>
    }
      </div>
      </div>
      
  );
};

export default ContainerSelector;
