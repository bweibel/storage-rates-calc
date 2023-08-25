import { useState } from 'react';
import { STORAGE_TYPES } from './utils/constants';
import './StorageTypeCard.css';
import logo from './logo.svg';

const StorageTypeCard = ({ type, currentType, onTypeSelect }) => {
  const typeData = STORAGE_TYPES[type];
  const isActive = currentType === type;

  return (
    <div className={`storage-type-card card ${isActive ? 'selected' : ''}`} onClick={() => onTypeSelect(type)}>
      <h3>{ typeData.title }</h3>
      <img src={ typeData.icon } alt="" />
      <p className="description">{ typeData.description }</p>
      <a className="button">Select</a>
    </div>
  );
};

export default StorageTypeCard;
