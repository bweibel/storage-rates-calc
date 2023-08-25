import { useState } from 'react';
import './StorageTypeCard.css';
import logo from './logo.svg';

const StorageTypeCard = ({ title, icon, description }) => {
  return (
    <div className="storage-type-card card">
          <h3>{ title }</h3>
          <img src={ icon } alt="" />
          <p className="description">{ description }</p>
          <a className="button">Select</a>
    </div>
  );
};

export default StorageTypeCard;
