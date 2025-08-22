import React from 'react';
import './NavBar.css';

const SelectBar = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="navbar">
      <button 
        onClick={() => setActiveTab('store')} 
        className={`nav-item ${activeTab === 'store' ? 'active' : ''}`}
      >
        <img src="/store-icon.png" alt="Store" className="nav-icon" />
        <span>Store</span>
      </button>
      <button 
        onClick={() => setActiveTab('canteen')} 
        className={`nav-item ${activeTab === 'canteen' ? 'active' : ''}`}
      >
        <img src="/canteen-icon.png" alt="Canteen" className="nav-icon" />
        <span>Canteen</span>
      </button>
    </nav>
  );
};

export default SelectBar;