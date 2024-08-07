import React from 'react';
import { Tab } from 'react-tabs';
import './Tab.css'; 

const TabComponent = ({ label }) => (
  <Tab
    className="tab" 
    selectedClassName="tab-active" 
  >
    {label}
  </Tab>
);

TabComponent.tabsRole = 'Tab';

export default TabComponent;
